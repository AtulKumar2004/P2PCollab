import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";
import bcrypt from "bcryptjs";
// import cloudinary from "../lib/cloudinary.js";


export const signup = async (req, res) => {
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
        const newUser = new User({
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
        console.log("Error in signup controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
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
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}