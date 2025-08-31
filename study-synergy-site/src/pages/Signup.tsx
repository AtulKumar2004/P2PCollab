import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useAuthStore } from "../../store/useAuth";  // ✅ import zustand store

// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: "student" | "faculty" | "recruiter";
  year?: string;
  branch?: string;
}


// ✅ Validation schema
const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["student", "faculty", "recruiter"]),
  year: z.string().optional(),
  branch: z.string().optional(),
});

type SignupForm = z.infer<typeof signupSchema>;

export const SignupPage = () => {
  const [formData, setFormData] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
    role: "student",
    year: "",
    branch: "",
  });
  const { signup, loading, user } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (role: string) => {
    setFormData({ ...formData, role: role as SignupForm["role"] });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const result = signupSchema.safeParse(formData);
  if (!result.success) {
    result.error.errors.forEach((err) => toast.error(err.message));
    return;
  }

  // ✅ Narrow to correct type
  const validData = result.data as Omit<User, "id"> & { password: string };

  await signup(validData);

  if (useAuthStore.getState().user) {
    navigate("/dashboard"); // ✅ navigate after signup
  }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create your account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          <Input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} />
          <Input name="password" placeholder="Password" type="password" value={formData.password} onChange={handleChange} />

          <Select onValueChange={handleRoleChange} defaultValue={formData.role}>
            <SelectTrigger><SelectValue placeholder="Select Role" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="faculty">Faculty</SelectItem>
              <SelectItem value="recruiter">Recruiter</SelectItem>
            </SelectContent>
          </Select>

          {formData.role === "student" && (
            <>
              <Input name="year" placeholder="Year (e.g. 2)" value={formData.year || ""} onChange={handleChange} />
              <Input name="branch" placeholder="Branch (e.g. CSE)" value={formData.branch || ""} onChange={handleChange} />
            </>
          )}

          {formData.role === "faculty" && (
            <Input name="branch" placeholder="Branch (e.g. Mechanical)" value={formData.branch || ""} onChange={handleChange} />
          )}

          <Button type="submit" className="w-full flex justify-center items-center" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "Signup"}
          </Button>
        </form>
      </div>
    </div>
  );
};
