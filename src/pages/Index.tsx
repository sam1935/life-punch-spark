import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AuthorSection from "@/components/AuthorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookDetailsSection from "@/components/BookDetailsSection";
import QuotesSection from "@/components/QuotesSection";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AuthorSection />
      <TestimonialsSection />
      <BookDetailsSection />
      <QuotesSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
