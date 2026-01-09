import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const programsLinks = [
  { title: "USMLE CV Building", href: "/programs/usmle-cv" },
  { title: "US Clinical Rotations", href: "/programs/clinical-rotations" },
  { title: "Residency Match Strategy", href: "/programs/residency-match" },
];

const portalLinks = [
  { title: "Step 1/Step 2 CK Portal", href: "https://app.nextstepscareer.com/login" },
  { title: "USMLE CV Portal", href: "https://cv.nextstepsusmle.com/" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Next Steps Logo" className="h-10 w-auto object-contain" />
            <span className="text-xl font-extrabold tracking-tighter gradient-text">USMLE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/#step1-2ck" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Step 1 & 2 CK
            </Link>

            {/* USMLE Programs Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-4"
              >
                USMLE Programs
                <ChevronDown className={`w-4 h-4 transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} />

                {isProgramsOpen && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-background border border-border rounded-lg shadow-lg z-50 py-2">
                    <ul className="py-1">
                      {programsLinks.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            </div>

            <Link to="/#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link to="/payment" className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors">
              Pay Fee
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>

            {/* Get Started Dropdown */}
            <div className="relative group">
              <Button size="sm" className="gap-1 bg-primary hover:bg-primary/90 text-white">
                Get Started
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </Button>

              <div className="absolute top-full right-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
                <div className="p-4 bg-muted/30 border-b border-border">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Student Portals</p>
                </div>
                <ul className="py-2">
                  {portalLinks.map((item, index) => (
                    <li key={index}>
                      {item.href.startsWith('http') ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent transition-colors font-medium border-l-2 border-transparent hover:border-primary"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent transition-colors font-medium border-l-2 border-transparent hover:border-primary"
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
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
          <div className="md:hidden py-6 border-t border-border animate-fade-in bg-background">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3 px-2">
                <Link to="/#step1-2ck" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold text-foreground">
                  Step 1 & 2 CK
                </Link>
                <Link to="/#testimonials" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold text-foreground">
                  Testimonials
                </Link>
                <Link to="/payment" onClick={() => setIsMenuOpen(false)} className="text-base font-semibold text-green-600">
                  Pay Fee
                </Link>
              </div>

              <div className="flex flex-col gap-4 pt-4 border-t border-border px-2">
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Programs</p>
                  <div className="grid grid-cols-1 gap-2">
                    {programsLinks.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm font-medium text-foreground py-2 border-b border-border/50 hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Student Portals</p>
                  <div className="grid grid-cols-1 gap-2">
                    {portalLinks.map((item, index) => (
                      item.href.startsWith('http') ? (
                        <a
                          key={index}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-sm font-medium text-foreground py-2 border-b border-border/50 hover:text-primary transition-colors"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Link
                          key={index}
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-sm font-medium text-foreground py-2 border-b border-border/50 hover:text-primary transition-colors"
                        >
                          {item.title}
                        </Link>
                      )
                    ))}
                  </div>
                </div>

                <Button variant="default" className="mt-6 w-full py-6 text-lg" asChild>
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
