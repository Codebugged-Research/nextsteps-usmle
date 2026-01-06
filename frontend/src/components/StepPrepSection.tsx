import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  FileCheck, 
  Video, 
  BookOpen, 
  MessageCircle,
  CheckCircle2,
  RefreshCw,
  Zap
} from "lucide-react";

const features = [
  { icon: Users, title: "Dedicated Mentorship", description: "1:1 faculty guidance" },
  { icon: Calendar, title: "Daily Class Schedule", description: "Structured learning" },
  { icon: FileCheck, title: "Weekly Mock Tests", description: "Track your progress" },
  { icon: Video, title: "Live Classes", description: "Interactive sessions" },
  { icon: RefreshCw, title: "Revision Classes", description: "Reinforce concepts" },
  { icon: Zap, title: "Crash Courses", description: "Intensive prep" },
  { icon: BookOpen, title: "Self Assessments", description: "Evaluate yourself" },
  { icon: MessageCircle, title: "Doubt Sessions", description: "Clear all doubts" },
];

const StepPrepSection = () => {
  return (
    <section id="step1-2ck" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Courses</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Step 1 & Step 2 CK Preparation
          </h2>
          <p className="text-muted-foreground text-lg">
            We've simplified the vast USMLE syllabus into structured, easy-to-manage modules 
            that can be completed within 100 days of dedicated study.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Module Info Card */}
        <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Each Module Covers 6-8 Pages of FA Book
                </h3>
                <ul className="space-y-3">
                  {[
                    "Concept-based video lectures",
                    "Concise study notes",
                    "Daily test focused on syllabus",
                    "Weekly interactive sessions with faculty"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6">
                  <p className="text-lg font-semibold mb-2">Mentorship Program</p>
                  <p className="text-primary-foreground/80 text-sm">
                    Every student gets added to a dedicated WhatsApp group for direct access to their mentor.
                  </p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6">
                  <p className="text-lg font-semibold mb-2">Exclusive Handbooks</p>
                  <p className="text-primary-foreground/80 text-sm">
                    Next Steps USMLE Dissection Handbook Series - not sold separately in the market.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StepPrepSection;
