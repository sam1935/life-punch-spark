import authorPhoto from "@/assets/author-photo.jpg";

const AuthorSection = () => {
  return (
    <section id="author" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
          Meet the <span className="text-primary">Author</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-5xl mx-auto">
          <img
            src={authorPhoto}
            alt="Douglas James Hood, author of Life Punch"
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl border-4 border-primary/20 flex-shrink-0"
            loading="lazy"
          />

          <div>
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
              Douglas James Hood
            </h3>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Douglas James Hood is a storyteller, community builder, and man of faith. Through
              decades of ministry and life experience, he has witnessed firsthand the power of
              holding on — to God, to hope, and to each other. <em>Life Punch</em> is his
              collection of those moments that shaped him and the people around him.
            </p>

            {/* Mission callout */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6">
              <p className="text-foreground font-body text-lg italic leading-relaxed">
                "I'm on a mission to build and preserve community. I'll shine my light, and you
                shine yours."
              </p>
              <span className="block mt-2 text-primary font-semibold font-body text-sm">
                — Douglas James Hood
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
