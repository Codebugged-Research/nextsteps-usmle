import { Mail, Phone, Globe, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-bold tracking-tight">
                NEXT <span className="text-primary">STEPS</span>
              </span>
              <span className="text-xs text-primary-foreground/60">USMLE</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Most Comprehensive USMLE Preparation Program
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#step1-2ck" className="hover:text-primary transition-colors">Step 1 & 2 CK</a></li>
              <li><a href="#cv-building" className="hover:text-primary transition-colors">CV Building</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-semibold mb-4">Student Portals</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/auth/step1" className="hover:text-primary transition-colors">Step 1 Portal</Link></li>
              <li><Link to="/auth/step2" className="hover:text-primary transition-colors">Step 2 CK Portal</Link></li>
              <li><Link to="/auth/cv" className="hover:text-primary transition-colors">USMLE CV Portal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <a href="https://www.nextstepsusmle.com" className="hover:text-primary transition-colors">
                  www.nextstepsusmle.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:admin@nextstepsusmle.com" className="hover:text-primary transition-colors">
                  admin@nextstepsusmle.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p>HYD: +91 88850 14877</p>
                  <p>BLR: +91 90358 20146</p>
                  <p>USA: +1 561-599-7669</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Next Steps USMLE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-primary-foreground/60 font-medium">Follow us @nextstepsusmle</span>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/nextstepsusmle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/nextstepsusmle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/nextstepsusmle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
