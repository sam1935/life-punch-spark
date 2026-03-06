import { useState } from "react";
import { Facebook, Mail } from "lucide-react";

const CommunitySection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section id="community" className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Join the <span className="text-primary">Community</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-12">
          Life's punches are easier to take when we face them together. Connect with readers who
          share your faith and your fight.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-3xl mx-auto mb-12">
          {/* Newsletter */}
          <div className="flex-1 bg-card rounded-xl p-8 border border-border shadow-sm">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Newsletter</h3>
            <p className="text-muted-foreground font-body text-sm mb-6">
              Get encouragement, updates, and exclusive content delivered to your inbox.
            </p>

            {submitted ? (
              <p className="text-primary font-body font-semibold">Thank you for subscribing! 🙌</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 h-11 rounded-md border border-input bg-background px-3 text-sm font-body placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 h-11 rounded-md font-heading font-bold uppercase text-sm tracking-wider hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Facebook */}
          <div className="flex-1 bg-card rounded-xl p-8 border border-border shadow-sm flex flex-col items-center justify-center">
            <Facebook className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Facebook Group</h3>
            <p className="text-muted-foreground font-body text-sm mb-6">
              Share your story, encourage others, and grow together.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading font-bold uppercase text-sm tracking-wider hover:bg-primary/90 transition-colors"
            >
              Join the Group
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
