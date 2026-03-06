import { useState, useEffect } from "react";

const quotes = [
  "Sometimes life doesn't tap you on the shoulder. It punches you right in the face. But that's when faith shows up.",
  "You don't have to carry it all alone. That's why God gave us each other.",
  "The strongest people aren't those who never fall — they're the ones who reach out a hand while getting back up.",
  "Faith isn't the absence of fear. It's taking the next step when you can't see the ground.",
  "Community isn't built in comfort. It's forged in the fire of shared struggle.",
];

const QuotesSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center min-h-[200px] flex flex-col items-center justify-center">
          <p
            key={current}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground/90 italic leading-snug animate-fade-in-up"
          >
            "{quotes[current]}"
          </p>
          <span className="block mt-6 text-primary font-body font-semibold text-sm uppercase tracking-widest">
            — From Life Punch
          </span>

          {/* Dots */}
          <div className="flex gap-2 mt-8">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-primary-foreground/20"
                }`}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
