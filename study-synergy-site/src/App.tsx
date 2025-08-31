import { Toaster } from "react-hot-toast";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";
import AppShell from "./pages/AppShell";
import { useAuthStore } from "../store/useAuth";
import { useEffect } from "react";

const App = () => {
  const { user, loading, checkAuth, isCheckingAuth } = useAuthStore();
  const queryClient = new QueryClient();

  // 🔄 Run once to restore session
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // ⏳ While verifying session (first load only)
  if (isCheckingAuth) {
    return (
      <div className="flex h-screen items-center justify-center">
        ⏳ Checking session...
      </div>
    );
  }

  // 🔒 While performing login/signup/logout
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="animate-spin text-2xl">⏳</span>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route
              path="/"
              element={user ? <Navigate to="/dashboard" /> : <Index />}
            />
            <Route
              path="/login"
              element={!user ? <LoginPage /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="/signup"
              element={!user ? <SignupPage /> : <Navigate to="/dashboard" />}
            />

            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={user ? <AppShell /> : <Navigate to="/login" />}
            />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
