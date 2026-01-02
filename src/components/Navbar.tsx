import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const programsDropdown = [
  { title: "USMLE CV", href: "/programs/usmle-cv" },
  { title: "US Clinical Rotations", href: "/programs/clinical-rotations" },
  { title: "Residency Match Strategy", href: "/programs/residency-match" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-foreground">NEXT</span>
                <span className="gradient-text"> STEPS</span>
              </span>
              <span className="text-[10px] text-muted-foreground -mt-1">USMLE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#step1-2ck" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Step 1 & 2 CK
            </a>

            {/* USMLE Programs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                onBlur={() => setTimeout(() => setIsProgramsOpen(false), 150)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                USMLE Programs
                <ChevronDown className={`w-4 h-4 transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProgramsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg z-50">
                  <ul className="py-2">
                    {programsDropdown.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                          onClick={() => setIsProgramsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
            <Link to="/payment" className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors">
              Pay Fee
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <div className="relative group">
              <Button size="sm" className="gap-1">
                Get Started
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </Button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <ul className="py-2 text-left">
                  <li>
                    <Link to="/auth/step1" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent">
                      Step 1 Portal
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth/step2" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent">
                      Step 2 CK Portal
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth/cv" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent">
                      CV Portal
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#step1-2ck" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Step 1 & 2 CK
              </a>

              {/* Mobile Programs Dropdown */}
              <div>
                <button
                  onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  USMLE Programs
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProgramsOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {programsDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => {
                          setIsProgramsOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </a>
              <Link to="/payment" className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors">
                Pay Fee
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">Get Started</p>
                <div className="grid grid-cols-1 gap-2">
                  <Button variant="outline" size="sm" className="justify-start gap-2" asChild>
                    <Link to="/auth/step1" onClick={() => setIsMenuOpen(false)}>
                      Step 1 Portal
                    </Link>
                  </Button>
                  <Button variant="secondary" size="sm" className="justify-start gap-2" asChild>
                    <Link to="/auth/step2" onClick={() => setIsMenuOpen(false)}>
                      Step 2 CK Portal
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="justify-start gap-2 border" asChild>
                    <Link to="/auth/cv" onClick={() => setIsMenuOpen(false)}>
                      CV Portal
                    </Link>
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="mt-2" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
