const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-heading text-2xl font-bold text-primary-foreground tracking-wider">
              LIFE <span className="text-primary">PUNCH</span>
            </span>
            <p className="text-primary-foreground/40 font-body text-sm mt-1">
              By Douglas James Hood
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 justify-center">
            {["About", "Author", "Reviews", "Details", "Community", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-primary-foreground/50 hover:text-primary font-body text-sm transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/30 font-body text-xs">
            © {new Date().getFullYear()} Douglas James Hood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
