import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maria T.",
    text: "Life Punch moved me to tears and then lifted me right back up. Every story felt like it was written for me.",
    stars: 5,
  },
  {
    name: "James W.",
    text: "This book reminded me that I'm not alone. Real stories from real people who've been through it. Powerful.",
    stars: 5,
  },
  {
    name: "Sandra K.",
    text: "I bought this for my small group and it sparked some of the best conversations we've ever had.",
    stars: 5,
  },
  {
    name: "Pastor David L.",
    text: "Douglas has a gift for telling stories that pierce the heart and heal the soul. A must-read.",
    stars: 5,
  },
  {
    name: "Angela R.",
    text: "Some stories made me laugh, some made me cry. All of them made me think. Incredible book.",
    stars: 4,
  },
  {
    name: "Marcus H.",
    text: "I don't usually read books like this, but a friend recommended it. I couldn't put it down.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center text-foreground mb-4">
          What Readers <span className="text-primary">Say</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-xl mx-auto">
          Stories that resonate. Faith that inspires. Community that heals.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
                {Array.from({ length: 5 - r.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-border" />
                ))}
              </div>
              <p className="text-foreground/80 font-body leading-relaxed mb-6 italic">
                "{r.text}"
              </p>
              <p className="font-heading font-bold text-foreground text-sm">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
