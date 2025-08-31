import type { Request,Response } from "express";
import { generateToken } from "../lib/utils";
import bcrypt from "bcryptjs";
import User,{ IUser } from "../models/user.model"
// import cloudinary from "../lib/cloudinary.js";

type IUserInput = {
  name: string;
  email: string;
  password: string;
  role: string;
  year?: number;
  branch?: string;
};

export const signup = async (req: Request, res: Response) => {
    const { name, email, password, role, year, branch } = req.body;
    try {
        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: "Please provide all the fields" });
        }
        if (role === 'student' && (!year || !branch)) {
            return res.status(400).json({ message: "Year and Branch are required for students" });
        }
        if (role === 'faculty' && !branch) {
            return res.status(400).json({ message: "Branch is required for faculty" });
        }
        // hash password
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }
        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "Email already existed" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User<IUserInput>({
            name,
            email,
            password: hashedPassword,
            role,
            year: role === 'student' ? year : undefined,
            branch: (role === 'student' || role === 'faculty') ? branch : undefined
        });

        if (newUser) {
            // generate jwt token
            generateToken(newUser._id, res); // sending default mongo user ID as the payload
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                year: newUser.year ?? null,
                branch: newUser.branch ?? null,
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        console.log("Error in signup controller", (error as Error).message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = (await User.findOne({ email })) as IUser | null;;
        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        generateToken(user._id, res);

        return res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            year: user.year ?? null,
            branch: user.branch ?? null,
        })
    } catch (error) {
        console.log("Error in login controller", (error as Error).message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const checkAuth = (req:Request, res: Response) => {
    try {
        return res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in checkAuth controller", (error as Error).message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const logout = (req: Request, res: Response) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", (error as Error).message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}