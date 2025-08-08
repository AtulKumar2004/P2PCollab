
import { cn } from "../lib/utils";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";

const navOptions = [
  { label: "Landing Page", description: "Intro, Tagline, Login/Signup" },
  { label: "Login / Signup", description: "OAuth, Role-based" },
  { label: "Student Dashboard" },
  { label: "Faculty Dashboard" },
  { label: "Recruiter Dashboard" },
  { label: "Mentor Dashboard" },
  { label: "Project Listings" },
  { label: "Project Details" },
  { label: "Create/Join Project" },
  { label: "Request Mentorship" },
  { label: "Mentor Assignments" },
  { label: "Recruiter Portal" },
  { label: "Chat System" },
  { label: "Notifications" },
  { label: "Portfolio/Profile" },
  { label: "Admin/Faculty Tools" },
  { label: "Navbar/Footer" },
  { label: "Error/404" },
  { label: "Loading Animations" },
];


export default function AnimatedIntro() {
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
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 pt-32 pb-20 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-glow text-center">
          Peer-to-Peer Project Collaboration & Mentorship Network
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-blue-300 animate-fade-in-delay text-center max-w-2xl">
          Connect students, faculty, alumni, and recruiters for collaboration, mentorship, and project-based learning.
        </p>
        <div className="flex flex-wrap gap-6 justify-center mb-16 animate-fade-in-delay-2">
          <Button className="bg-blue-500 hover:bg-blue-600 text-black font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 animate-bounce text-lg">
            Explore Projects
          </Button>
          <Button className="bg-black border border-blue-400 hover:bg-blue-700 hover:text-black text-blue-400 font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 animate-bounce text-lg">
            Get Mentorship
          </Button>
          <Button className="bg-blue-700 hover:bg-blue-800 text-black font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 animate-bounce text-lg">
            Recruit Talent
          </Button>
        </div>
      </main>
      <footer className="w-full text-center py-6 text-blue-700 text-xs animate-fade-in-delay-4 absolute bottom-0 left-0 z-10">
        &copy; {new Date().getFullYear()} P2P Collab. All rights reserved.
      </footer>
    </div>
  );
}


