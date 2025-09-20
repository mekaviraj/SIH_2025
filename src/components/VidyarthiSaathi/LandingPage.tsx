import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Target, Users, Award, TrendingUp } from "lucide-react";
import heroStudents from "@/assets/hero-students.jpg";

interface LandingPageProps {
  onClassSelect: (classLevel: "10" | "12") => void;
}

const LandingPage = ({ onClassSelect }: LandingPageProps) => {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personalized Career Guidance",
      description: "AI-powered quiz to discover your perfect career path"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Government College Focus",
      description: "Comprehensive database of affordable government institutions"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Recommendations",
      description: "Get top 3 stream suggestions based on your interests"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Roadmaps",
      description: "Clear pathways from education to employment"
    }
  ];

  const stats = [
    { value: "500+", label: "Government Colleges" },
    { value: "50+", label: "Career Paths" },
    { value: "10,000+", label: "Students Guided" },
    { value: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroStudents} 
            alt="Diverse Indian students looking toward their bright future with career symbols around them"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 gradient-bg-hero opacity-30"></div>
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-primary/20 p-4 shadow-glow backdrop-blur-sm">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="gradient-text">VidyarthiSaathi</span>
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
            Your AI-powered career companion for discovering the perfect educational path
          </p>
          
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
            From confusion to clarity - get personalized career guidance and discover 
            affordable government colleges that match your interests and goals.
          </p>

          {/* Class Selection Cards */}
          <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
            <Card className="group cursor-pointer overflow-hidden border-2 border-primary/20 bg-card/80 p-8 backdrop-blur-sm transition-all hover:border-primary hover:shadow-primary hover:-translate-y-1">
              <div 
                className="space-y-4 text-center"
                onClick={() => onClassSelect("10")}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <span className="text-2xl font-bold">10</span>
                </div>
                <h3 className="text-xl font-semibold">I'm in Class 10</h3>
                <p className="text-sm text-muted-foreground">
                  Choose your stream for Class 11 & 12
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  Start My Journey
                </Button>
              </div>
            </Card>

            <Card className="group cursor-pointer overflow-hidden border-2 border-success/20 bg-card/80 p-8 backdrop-blur-sm transition-all hover:border-success hover:shadow-success hover:-translate-y-1">
              <div 
                className="space-y-4 text-center"
                onClick={() => onClassSelect("12")}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success transition-colors group-hover:bg-success group-hover:text-success-foreground">
                  <span className="text-2xl font-bold">12</span>
                </div>
                <h3 className="text-xl font-semibold">I'm in Class 12</h3>
                <p className="text-sm text-muted-foreground">
                  Find the perfect college course for you
                </p>
                <Button variant="outline" className="w-full group-hover:bg-success group-hover:text-success-foreground group-hover:border-success">
                  Explore Colleges
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose VidyarthiSaathi?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We make career decisions simple with personalized guidance and comprehensive information
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="group border-border/50 bg-card/60 p-6 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Discover Your Future?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of students who found their perfect career path with VidyarthiSaathi
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              onClick={() => onClassSelect("12")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary"
            >
              <Users className="mr-2 h-5 w-5" />
              Start Career Quiz
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onClassSelect("10")}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Streams
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;