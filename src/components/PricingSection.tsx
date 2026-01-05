import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, Zap, Gift, FileDown, ChevronDown, ChevronUp } from "lucide-react";
import ContactForm from "./ContactForm";

const courses = [
  {
    name: "Full Regular Course",
    icon: BookOpen,
    description: "Perfect for medical students or those who prefer guided support with close monitoring throughout their preparation journey.",
  },
  {
    name: "Standard Course",
    icon: Target,
    description: "Best suited for students who are in a dedicated full-time study phase and want to self-study with our structured resources.",
  },
  {
    name: "Crash Course",
    icon: Zap,
    description: "Designed for students who have low NBME scores or need focused help with test-taking strategies and application skills.",
  },
];

const PricingSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Step 1 and Step 2 CK Courses <span className="gradient-text">Include:</span>
            </h2>
          </div>

          {/* Course Cards */}
          <div className="space-y-6 mb-12">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card transition-all hover:shadow-hover flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <course.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{course.name}</h3>
                  <p className="text-muted-foreground">{course.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus Section */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12 border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Gift className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Exclusive Bonuses</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Get a <strong>Free Qbank Access for 1 year</strong> on enrollment with any of our programs (Step-1)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Get <strong>free access</strong> to our exclusive <strong>USMLE DISSECTION SERIES HANDBOOK</strong></span>
                    <a
                      href="/Next_Steps Brochure_New 2026.pdf"
                      download
                      className="inline-flex items-center gap-1 ml-2 px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-colors"
                    >
                      <FileDown className="w-4 h-4" />
                      Sample PDF
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card rounded-2xl p-8 shadow-card">
            <p className="text-lg text-muted-foreground mb-6">
              Fill this form - your USMLE expert will get in touch with you shortly
            </p>
            <div className="flex flex-col items-center">
              <Button
                size="lg"
                className="px-8 gap-2 mb-8"
                onClick={() => setShowForm(!showForm)}
              >
                {showForm ? "Hide Form" : "Get Started Today"}
                {showForm ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>

              {showForm && (
                <div className="w-full animate-in fade-in slide-in-from-top-4 duration-500 text-left border-t pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
                  <ContactForm />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
