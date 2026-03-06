import heroBg from "@/assets/hero-bg.jpg";
import bookCover from "@/assets/book-cover.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left animate-fade-in-up">
          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary-foreground leading-none mb-2">
            LIFE<br />
            <span className="text-primary">PUNCH</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg sm:text-xl lg:text-2xl max-w-xl mt-6 font-body leading-relaxed">
            Holding on to God and helping each other when life hits hard.
          </p>
          <p className="text-primary-foreground/50 text-sm mt-2 font-body italic">
            By Douglas James Hood
          </p>

          <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
            <a
              href="#details"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading text-lg font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Buy the Book
            </a>
            <a
              href="#about"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-heading text-lg font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              Read a Sample
            </a>
            <a
              href="#community"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-heading text-lg font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              Join the Community
            </a>
          </div>
        </div>

        {/* Book Cover */}
        <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <img
            src={bookCover}
            alt="Life Punch book cover by Douglas James Hood"
            className="w-64 sm:w-72 lg:w-80 xl:w-96 rounded-lg shadow-2xl shadow-primary/20 hover:scale-105 transition-transform duration-500"
            loading="eager"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
