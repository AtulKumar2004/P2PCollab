import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Search, Users, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Join the Community",
    description: "Sign up and create your profile based on your role - student, faculty, society, or recruiter.",
    step: "01"
  },
  {
    icon: Search,
    title: "Discover Opportunities",
    description: "Browse projects, find mentors, explore society opportunities, or discover collaboration partners.",
    step: "02"
  },
  {
    icon: Users,
    title: "Start Collaborating",
    description: "Connect with others, join projects, mentor peers, or create new initiatives together.",
    step: "03"
  },
  {
    icon: Trophy,
    title: "Achieve Success",
    description: "Build your portfolio, gain experience, develop skills, and advance your career goals.",
    step: "04"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How It
            <span className="block gradient-primary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these four steps to unlock your collaborative potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center hover-scale transition-smooth border-0 bg-gradient-to-br from-card to-secondary/20 shadow-elegant">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-20 h-20 rounded-full gradient-primary flex items-center justify-center mb-4 shadow-glow">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">STEP {step.step}</div>
                  <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Start Your Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};