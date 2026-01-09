import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

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

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="https://app.nextstepscareer.com/login" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-14 px-8 gap-2 bg-[#179BAE] hover:bg-[#179BAE]/90 text-white shadow-soft hover:shadow-hover border-none">
                <GraduationCap className="w-5 h-5" />
                Step 1/Step 2 CK Portal
              </Button>
            </a>
            <a href="https://cv.nextstepsusmle.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="h-14 px-8 gap-2 bg-white hover:bg-muted text-foreground border-border shadow-soft hover:shadow-hover">
                <FileText className="w-5 h-5" />
                USMLE CV Portal
              </Button>
            </a>
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
