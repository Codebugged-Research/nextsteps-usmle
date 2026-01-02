import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Globe, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: Globe,
    label: "Website",
    value: "www.nextstepsusmle.com",
    href: "https://www.nextstepsusmle.com"
  },
  {
    icon: Mail,
    label: "Email",
    value: "admin@nextstepsusmle.com",
    href: "mailto:admin@nextstepsusmle.com"
  }
];

const phoneNumbers = [
  { location: "Hyderabad", number: "+91 88850 14877" },
  { location: "Bangalore", number: "+91 90358 20146" },
  { location: "USA", number: "+1 561-599-7669" }
];

const Contact = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-secondary py-20">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Have questions about our USMLE preparation programs? We are here to help you start your journey to success.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Ready to start your USMLE preparation journey? Reach out to us through any of the following channels.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Phone Numbers */}
            <Card className="bg-muted/50 border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                </div>
                <div className="space-y-3">
                  {phoneNumbers.map((phone, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{phone.location}</span>
                      <a
                        href={`tel:${phone.number.replace(/\s/g, "")}`}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {phone.number}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <p className="text-primary-foreground/80 text-sm mb-3">
                Stay updated with our latest news and tips
              </p>
              <p className="font-medium">@nextstepsusmle</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
