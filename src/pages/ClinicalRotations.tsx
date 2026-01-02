import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Stethoscope,
  FileCheck,
  Users,
  MapPin,
  Clock,
  Award,
  CheckCircle,
  MessageCircle
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

const rotationFeatures = [
  { icon: Building2, title: "In-patient + Out-patient Experience", description: "Comprehensive clinical exposure in both settings" },
  { icon: Stethoscope, title: "Hospital Based LORs", description: "Strong letters of recommendation from attending physicians" },
  { icon: FileCheck, title: "LOE for Visa Application", description: "Letter of Experience for visa documentation" },
  { icon: Users, title: "Best Hands-on US Clinical Experience", description: "Direct patient care under supervision" },
  { icon: MapPin, title: "Multiple Locations", description: "Rotations available across various US states" },
  { icon: Clock, title: "Flexible Duration", description: "4-12 week rotation programs available" },
];

const benefits = [
  "Work directly with US-trained physicians",
  "Gain exposure to US healthcare system",
  "Build professional network for residency",
  "Improve clinical skills and confidence",
  "Understand US medical documentation",
  "Prepare for residency interviews",
];

const ClinicalRotations = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">US Clinical Rotations</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Clinical Rotations & Electives in USA
            </h1>
            <p className="text-muted-foreground text-lg">
              Gain hands-on US clinical experience with our comprehensive rotation programs.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {rotationFeatures.map((feature, index) => (
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

          {/* Benefits Section */}
          <Card className="bg-muted/50 border-border mb-12">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Why Choose Our Rotations?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
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
                <MessageCircle className="w-5 h-5" />
                {showForm ? "Hide Contact Form" : "Contact our Clinical Rotations Team"}
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

export default ClinicalRotations;
