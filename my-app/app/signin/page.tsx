"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-black text-blue-400 relative overflow-hidden">
      {/* Animated SVG background shapes */}
      <svg className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-30 animate-spin-slow z-0" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="200" fill="url(#blueGradient)" />
        <defs>
          <radialGradient id="blueGradient" cx="0" cy="0" r="1" gradientTransform="translate(250 250) scale(200)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#1e3a8a" stopOpacity="0.7" />
          </radialGradient>
        </defs>
      </svg>
      <svg className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-20 animate-pulse z-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="300" height="300" rx="80" fill="#60a5fa" />
      </svg>
      <svg className="absolute top-1/2 left-0 w-[200px] h-[200px] opacity-10 animate-bounce z-0" style={{transform: 'translateY(-50%)'}} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 190,190 10,190" fill="#1e40af" />
      </svg>
      {/* Back to Home Button */}
      <div className="absolute top-8 left-8 z-20">
        <Link href="/">
          <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300">
            ← Back to Home
          </Button>
        </Link>
      </div>
      <div className="max-w-md mx-auto pt-32 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
              <CardDescription className="text-gray-400">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 text-sm text-gray-300">
                    <input type="checkbox" className="rounded border-gray-600" />
                    <span>Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Sign In
                </Button>

                <div className="text-center text-sm text-gray-400">
                  Don't have an account?{' '}
                  <Link href="/signup" className="text-blue-400 hover:text-blue-300">
                    Sign up here
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
  </div>
  )
}
