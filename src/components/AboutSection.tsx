import { Heart, Shield, Users } from "lucide-react";

const themes = [
  {
    icon: Heart,
    title: "Faith",
    description: "Stories of unwavering faith that carry us through the darkest storms.",
  },
  {
    icon: Shield,
    title: "Resilience",
    description: "Real accounts of standing strong when life delivers its hardest blows.",
  },
  {
    icon: Users,
    title: "Community",
    description: "The power of holding on to each other and never walking alone.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About the <span className="text-primary">Book</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground font-body leading-relaxed">
            <em>Life Punch</em> is a collection of real-life stories about faith, resilience, and
            community. Some stories are short, some are long. Some are serious, some are humorous.
            Each one reminds us that when life hits hard, we must hold on to God and to each other.
          </p>
        </div>

        {/* Theme Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {themes.map((t) => (
            <div
              key={t.title}
              className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-border group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <t.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{t.title}</h3>
              <p className="text-muted-foreground font-body">{t.description}</p>
            </div>
          ))}
        </div>

        {/* Pull Quote */}
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full" />
          <blockquote className="pl-8 py-4">
            <p className="text-2xl sm:text-3xl font-heading font-bold text-foreground/90 italic leading-snug">
              "Sometimes life doesn't tap you on the shoulder. It punches you right in the face.
              But that's when faith shows up."
            </p>
            <cite className="block mt-4 text-primary font-body font-semibold not-italic">
              — Life Punch
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
