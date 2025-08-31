import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  Building2, 
  Code, 
  Briefcase, 
  UserCheck,
  ArrowRight 
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Faculty-Guided Projects",
    description: "Work on real-world projects with expert guidance from faculty members who bring industry experience to your learning journey.",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Peer Mentoring",
    description: "Connect with senior students who provide mentorship, share experiences, and help you navigate your academic and career path.",
    color: "text-purple-600"
  },
  {
    icon: Building2,
    title: "Society Opportunities",
    description: "Discover exciting opportunities posted by college societies, from hackathons to research projects and networking events.",
    color: "text-green-600"
  },
  {
    icon: Code,
    title: "Hackathon Partners",
    description: "Find like-minded students to team up with for hackathons, competitions, and collaborative coding projects.",
    color: "text-orange-600"
  },
  {
    icon: Briefcase,
    title: "Portfolio Showcase",
    description: "Build and showcase your portfolio to recruiters who actively browse the platform for talented students.",
    color: "text-indigo-600"
  },
  {
    icon: UserCheck,
    title: "Role-Based Access",
    description: "Tailored experiences for students, faculty, societies, and recruiters with appropriate access levels and features.",
    color: "text-pink-600"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Everything You Need to
            <span className="block gradient-primary bg-clip-text text-transparent">
              Succeed Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform brings together students, faculty, and industry to create 
            meaningful collaborations that drive innovation and career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-scale hover:shadow-elegant transition-smooth border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
            Explore All Features
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};