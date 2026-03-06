import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Author", href: "#author" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Details", href: "#details" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-heading text-2xl font-bold text-primary-foreground tracking-wider">
          LIFE <span className="text-primary">PUNCH</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-primary-foreground/70 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#details"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Buy Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md border-t border-primary/20 pb-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-primary-foreground/70 hover:text-primary font-semibold uppercase tracking-wider text-sm"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="#details"
              onClick={() => setOpen(false)}
              className="block text-center bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-bold uppercase tracking-wider"
            >
              Buy Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
