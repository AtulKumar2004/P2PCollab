import express from "express";
import { createPost } from "../controllers/post.controller";
import { protectRoute } from "../middleware/auth.middleware";
import { getPosts } from "../controllers/post.controller";
import { upload } from "../middleware/upload";

const router = express.Router();

router.post("/create-post",protectRoute, upload.single("media"),createPost);
router.get("/get-post", protectRoute, getPosts)

export default router;