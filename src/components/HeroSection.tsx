import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, Stethoscope, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-muted/20" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23008B8B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Global Leading USMLE Online Platform
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Your Path to{" "}
            <span className="gradient-text">USMLE Success</span>{" "}
            Starts Here
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Most comprehensive USMLE preparation program with dedicated mentorship,
            structured modules, and proven methodology.
          </p>

          {/* Get Started Button with Options */}
          <div className="animate-fade-up blur-in" style={{ animationDelay: "0.3s" }}>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="px-10 py-7 text-lg gap-2 shadow-soft hover:shadow-hover transition-all">
                  Get Started
                  <ChevronDown className="w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-6">Choose Your Portal</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  <Link to="/auth/step1" className="w-full">
                    <Button variant="outline" className="w-full h-16 justify-between gap-4 text-left hover:border-primary hover:bg-primary/5 transition-all text-lg font-semibold px-6">
                      <div className="flex items-center gap-4">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <span>Step 1 Portal</span>
                      </div>
                      <span className="text-muted-foreground text-sm font-normal">Start Preparation</span>
                    </Button>
                  </Link>
                  <Link to="/auth/step2" className="w-full">
                    <Button variant="outline" className="w-full h-16 justify-between gap-4 text-left hover:border-secondary hover:bg-secondary/5 transition-all text-lg font-semibold px-6">
                      <div className="flex items-center gap-4">
                        <Stethoscope className="w-6 h-6 text-secondary" />
                        <span>Step 2 CK Portal</span>
                      </div>
                      <span className="text-muted-foreground text-sm font-normal">Join CK Course</span>
                    </Button>
                  </Link>
                  <Link to="/auth/cv" className="w-full">
                    <Button variant="outline" className="w-full h-16 justify-between gap-4 text-left hover:border-accent hover:bg-accent/5 transition-all text-lg font-semibold px-6">
                      <div className="flex items-center gap-4">
                        <FileText className="w-6 h-6 text-accent-foreground" />
                        <span>CV Portal</span>
                      </div>
                      <span className="text-muted-foreground text-sm font-normal">Build Your CV</span>
                    </Button>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">100+</p>
              <p className="text-sm text-muted-foreground mt-1">Days Program</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">1:1</p>
              <p className="text-sm text-muted-foreground mt-1">Mentorship</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">95%</p>
              <p className="text-sm text-muted-foreground mt-1">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
