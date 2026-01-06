import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  BookMarked,
  Globe2,
  Award,
  Briefcase,
  Monitor,
  Building2,
  Stethoscope,
  FileCheck,
  Users
} from "lucide-react";

const cvFeatures = [
  { icon: FileText, title: "Case Report Publications" },
  { icon: BookMarked, title: "Research Publications" },
  { icon: Globe2, title: "International Conferences" },
  { icon: Award, title: "AHA Certified ACLS & BLS" },
  { icon: Briefcase, title: "Work Experience" },
  { icon: Monitor, title: "EMR & RCM Training" },
];

const rotationFeatures = [
  { icon: Building2, title: "In-patient + Out-patient Experience" },
  { icon: Stethoscope, title: "Hospital based LORs" },
  { icon: FileCheck, title: "LOE for Visa Application" },
  { icon: Users, title: "Best Hands-on US Clinical Experience" },
];

const matchFeatures = [
  "CV & PS Review",
  "ERAS Application",
  "Live Interview Classes",
  "Mock Interviews",
  "Rank Order List",
  "Interview Prep Course",
];

const CVBuildingSection = () => {
  return (
    <section id="cv-building" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">CV Building</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            USMLE CV Building Program
          </h2>
          <p className="text-muted-foreground text-lg">
            Build a competitive CV with publications, clinical experience, and comprehensive match preparation.
          </p>
        </div>

        {/* CV Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {cvFeatures.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="font-medium text-foreground">{feature.title}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Clinical Rotations & Match Strategy */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Clinical Rotations */}
          <Card className="bg-muted/50 border-border overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Clinical Rotations/Electives</h3>
              </div>
              <ul className="space-y-4">
                {rotationFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature.title}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Match Strategy */}
          <Card className="bg-muted/50 border-border overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Residency Match Strategy</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {matchFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <a href="https://cv.nextstepsusmle.com/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full mt-6">
                  Explore CV Portal
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CVBuildingSection;
