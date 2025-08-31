import mongoose from "mongoose";

interface IPost extends mongoose.Document {
    title: string;
    content: string;
    author: mongoose.Schema.Types.ObjectId;
    media?: string;
    mediaId?: string;
    createdAt: Date;
}

const postSchema = new mongoose.Schema<IPost>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    media: { type: String },
    mediaId: {type: String},
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IPost>("Post", postSchema);
