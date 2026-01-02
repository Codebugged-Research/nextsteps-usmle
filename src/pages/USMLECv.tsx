import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  BookMarked,
  Globe2,
  Award,
  Briefcase,
  Monitor,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";

const cvFeatures = [
  { icon: FileText, title: "Case Report Publications", description: "Get published in peer-reviewed journals" },
  { icon: BookMarked, title: "Research Publications", description: "Contribute to impactful research" },
  { icon: Globe2, title: "International Conferences", description: "Present at global medical conferences" },
  { icon: Award, title: "AHA Certified ACLS & BLS", description: "Essential certifications for residency" },
  { icon: Briefcase, title: "Work Experience", description: "Gain valuable clinical exposure" },
  { icon: Monitor, title: "EMR & RCM Training", description: "Master electronic medical records" },
];

const USMLECv = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">USMLE CV</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Build Your Competitive USMLE CV
            </h1>
            <p className="text-muted-foreground text-lg">
              Strengthen your residency application with publications, certifications, and professional experience.
            </p>
          </div>

          {/* CV Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cvFeatures.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/auth/cv">
                <Button size="lg">
                  Get Started with CV Building
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => setShowForm(!showForm)}
              >
                <MessageCircle className="w-5 h-5" />
                {showForm ? "Hide Contact Form" : "Talk to our Research Expert"}
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

export default USMLECv;
