import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users2, 
  Trophy, 
  ArrowRight,
  GraduationCap,
  UserSearch,
  Building
} from "lucide-react";

const userTypes = [
  {
    id: "for-students",
    icon: GraduationCap,
    title: "For Students",
    subtitle: "Build Your Future",
    description: "Connect with peers, find mentors, and work on real projects that build your portfolio and skills.",
    features: [
      "Join faculty-guided projects",
      "Find hackathon teammates",
      "Get mentored by seniors",
      "Build impressive portfolios",
      "Network with alumni"
    ],
    color: "from-blue-500 to-purple-600"
  },
  {
    id: "for-faculty",
    icon: BookOpen,
    title: "For Faculty", 
    subtitle: "Guide & Mentor",
    description: "Create guided projects, mentor students, and bridge the gap between academia and industry.",
    features: [
      "Create guided project opportunities",
      "Mentor promising students",
      "Share industry insights",
      "Build academic-industry connections",
      "Track student progress"
    ],
    color: "from-green-500 to-teal-600"
  },
  {
    id: "for-recruiters",
    icon: UserSearch,
    title: "For Recruiters",
    subtitle: "Discover Talent",
    description: "Browse student portfolios, find skilled candidates, and connect with the next generation of talent.",
    features: [
      "Browse verified student portfolios",
      "Filter by skills and projects",
      "Connect directly with candidates",
      "Access project showcases",
      "Find diverse talent"
    ],
    color: "from-orange-500 to-red-600"
  }
];

export const UserTypes = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Built for
            <span className="block gradient-primary bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a student, faculty member, or recruiter, CollabHub 
            provides tailored experiences to meet your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {userTypes.map((userType, index) => (
            <Card 
              key={index}
              id={userType.id}
              className="hover-scale transition-smooth border-0 bg-card/80 backdrop-blur-sm shadow-elegant hover:shadow-glow overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${userType.color}`}></div>
              
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-br ${userType.color} flex items-center justify-center mb-4 shadow-glow`}>
                  <userType.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{userType.title}</CardTitle>
                <p className="text-primary font-semibold">{userType.subtitle}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {userType.description}
                </p>
                
                <ul className="space-y-3">
                  {userType.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full mt-6 group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};