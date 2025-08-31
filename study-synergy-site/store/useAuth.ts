import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  year?: string;
  branch?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean; // for signup/login actions
  isCheckingAuth: boolean; // ✅ separate flag for restoring session
  checkAuth: () => Promise<void>;
  signup: (data: Omit<User, "id"> & { password: string }) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set,get) => ({
  user: null,
  loading: false,
  isCheckingAuth: true, // ✅ start in "checking session" mode

  // 🔄 Restore session from backend
  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axios.get("http://localhost:5000/api/auth/check-auth", {
        withCredentials: true,
      });
      set({ user: res.data, isCheckingAuth: false });
    } catch(error) {
        console.log("Error while checking auth",(error as Error).message);
      set({ user: null, isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ loading: true });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        data,
        { withCredentials: true }
      );
      set({ user: res.data });
      toast.success("🎉 Signup successful!");
    } catch (err: any) {
      toast.error((err as Error).message || "Please try again later!");
    } finally {
      set({ loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      set({ user: res.data });
      toast.success("✅ Login successful!");
    } catch (err: any) {
      toast.error((err as Error).message || "Login failed");
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
      set({ user: null });
      toast.success("🚪 Logged out");
    } catch {
      toast.error("Logout failed");
    }
  },
}));
