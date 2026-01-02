import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Video,
  Users,
  ListOrdered,
  BookOpen,
  MessageSquare,
  Award,
  CheckCircle
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

const matchServices = [
  { icon: FileText, title: "CV & PS Review", description: "Expert review and optimization of your CV and Personal Statement" },
  { icon: BookOpen, title: "ERAS Application", description: "Complete guidance through the ERAS application process" },
  { icon: Video, title: "Live Interview Classes", description: "Interactive sessions to master interview skills" },
  { icon: Users, title: "Mock Interviews", description: "Practice with experienced interviewers" },
  { icon: ListOrdered, title: "Rank Order List", description: "Strategic advice for ranking programs" },
  { icon: MessageSquare, title: "Interview Prep Course", description: "Comprehensive preparation for residency interviews" },
];

const processSteps = [
  { step: "1", title: "Initial Assessment", description: "We evaluate your profile and identify areas for improvement" },
  { step: "2", title: "Strategy Development", description: "Create a personalized match strategy based on your goals" },
  { step: "3", title: "Application Preparation", description: "Perfect your CV, personal statement, and ERAS application" },
  { step: "4", title: "Interview Training", description: "Intensive preparation with mock interviews and feedback" },
  { step: "5", title: "Match Success", description: "Strategic rank list creation and final preparations" },
];

const ResidencyMatch = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Residency Match</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Residency Match Strategy
            </h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive support to maximize your chances of matching into your dream residency program.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {matchServices.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <Card className="bg-muted/50 border-border mb-12">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Our Match Process</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {processSteps.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-3">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-xs">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => setShowForm(!showForm)}
              >
                <MessageSquare className="w-5 h-5" />
                {showForm ? "Hide Contact Form" : "Talk to our match strategists now"}
              </Button>
            </div>

            {showForm && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                <Card className="bg-card border-border shadow-soft">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ResidencyMatch;
