import Post from "../models/post.model";
import { Request, Response } from "express";

// ✅ Create a new post
export const createPost = async (req: any, res: Response) => {
  try {
    const { title, content } = req.body;
    const userId = req.user._id;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    // Cloudinary upload result from multer-storage-cloudinary
    const mediaUrl = req.file?.secure_url || req.file?.path;  // ✅ ensure secure URL
    const publicId = req.file?.public_id || req.file?.filename;

    const post = await Post.create({
      title,
      content,
      media: mediaUrl || null,   // ✅ will be Cloudinary URL
      mediaId: publicId || null,
      author: userId,
    });

    res.status(201).json({ post });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// ✅ Get all posts (feed)
export const getPosts = async (req: any, res: Response) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json({ posts });
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
