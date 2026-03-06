import bookCover from "@/assets/book-cover.png";
import { BookOpen, ShoppingCart } from "lucide-react";

const retailers = [
  { name: "Amazon", url: "#" },
  { name: "Barnes & Noble", url: "#" },
  { name: "Books-A-Million", url: "#" },
];

const BookDetailsSection = () => {
  return (
    <section id="details" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
          Get Your <span className="text-primary">Copy</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-5xl mx-auto">
          <img
            src={bookCover}
            alt="Life Punch book cover"
            className="w-56 sm:w-64 lg:w-72 rounded-lg shadow-2xl shadow-primary/10 flex-shrink-0"
            loading="lazy"
          />

          <div className="flex-1">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-6">
              Life Punch
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-8 text-sm font-body">
              <div>
                <span className="text-muted-foreground">Author</span>
                <p className="font-semibold text-foreground">Douglas James Hood</p>
              </div>
              <div>
                <span className="text-muted-foreground">Format</span>
                <p className="font-semibold text-foreground">Paperback / Kindle</p>
              </div>
              <div>
                <span className="text-muted-foreground">Pages</span>
                <p className="font-semibold text-foreground">220+ pages</p>
              </div>
              <div>
                <span className="text-muted-foreground">Genre</span>
                <p className="font-semibold text-foreground">Inspirational / Faith</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground font-body text-sm">
                Available in paperback and digital formats
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              {retailers.map((r) => (
                <a
                  key={r.name}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading font-bold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  {r.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsSection;
