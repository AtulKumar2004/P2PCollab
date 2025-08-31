import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

interface Post {
  _id: string;
  title: string;
  content: string;
  media?: string;
  author: {
    _id: string;
    name: string;
    email: string;
    role: string
  };
  createdAt: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  fetchPosts: () => Promise<void>;
  createPost: (data: { title: string; content: string; media?: File | null }) => Promise<void>;
}

export const usePostStore = create<PostState>((set, get) => ({
  posts: [],
  loading: false,

  fetchPosts: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("http://localhost:5000/api/posts/get-post", {
        withCredentials: true,
      });
      set({ posts: res.data.posts });
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to fetch posts");
    } finally {
      set({ loading: false });
    }
  },

  createPost: async (data) => {
    set({ loading: true });
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      if (data.media) formData.append("media", data.media);

      const res = await axios.post("http://localhost:5000/api/posts/create-post", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Add new post to store
      set({ posts: [res.data.post, ...get().posts] });
      toast.success("Post created!");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to create post");
    } finally {
      set({ loading: false });
    }
  },
}));
