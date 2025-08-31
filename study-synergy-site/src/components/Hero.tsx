import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Target } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
        <div className="space-y-8 animate-in fade-in duration-1000">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Where Students
              <span className="block bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Collaborate & Innovate
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Connect with peers, mentors, and faculty to build real projects, 
              gain experience, and shape your future career
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button variant="hero" size="lg" className="text-base px-8 py-3">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-3 bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary">
              Explore Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <Users className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-white/80 text-sm">Active Students</div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <BookOpen className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <Target className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-white/80 text-sm">Placement Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};