
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Settings, BarChart3, Shield, Database, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function AdminFaculty() {
  const tools = [
    {
      icon: Users,
      title: "User Management",
      description: "Manage student, faculty, and recruiter accounts",
      action: "Manage Users"
    },
    {
      icon: Settings,
      title: "System Configuration",
      description: "Configure platform settings and preferences",
      action: "Configure"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "View platform usage and engagement metrics",
      action: "View Analytics"
    },
    {
      icon: Shield,
      title: "Security Management",
      description: "Monitor security and access controls",
      action: "Security Settings"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Backup, export, and manage platform data",
      action: "Manage Data"
    },
    {
      icon: UserCheck,
      title: "Account Verification",
      description: "Review and approve new account registrations",
      action: "Review Accounts"
    }
  ]

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
      <div className="relative z-10 pt-24 pb-12 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-glow text-center">Admin & Faculty Tools</h1>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-10 text-center animate-fade-in-delay">Comprehensive tools for platform administration and faculty management</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl animate-fade-in-delay-2">
          {tools.map((tool, index) => (
            <Card key={index} className="bg-gray-800/60 border-blue-700 hover:bg-gray-900/80 transition-all duration-300 hover:scale-105 shadow-xl animate-fade-in animate-delay-[200ms]">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-600/20 rounded-lg animate-pulse">
                    <tool.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">{tool.title}</CardTitle>
                </div>
                <CardDescription className="text-blue-200">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 animate-bounce">
                  {tool.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
