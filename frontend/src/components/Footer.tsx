import { Mail, Phone, Globe, Linkedin, Facebook, X, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Next Steps Logo" className="h-10 w-auto object-contain brightness-0 invert" />
              <span className="text-2xl font-extrabold tracking-tighter text-primary">USMLE</span>
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
              <li><Link to="/#step1-2ck" className="hover:text-primary transition-colors">Step 1 & 2 CK</Link></li>
              <li><Link to="/#cv-building" className="hover:text-primary transition-colors">CV Building</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cancellation-policy" className="hover:text-primary transition-colors">Cancellation Policy</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-semibold mb-4">Student Portals</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="https://app.nextstepscareer.com/login" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Step 1/Step 2 Portal</a></li>
              <li><a href="https://cv.nextstepsusmle.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">USMLE CV Portal</a></li>
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
                href="https://www.linkedin.com/company/next-steps-usmle/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/nextstepsUSMLE/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/NextStepsUSMLE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow us on X"
              >
                <X className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/nextstepsusmle/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
