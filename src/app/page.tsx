import { AboutSection } from "@/components/about";
import { ContactSection } from "@/components/ContactSection";
import { ProductsSection } from "@/components/ProductSection";
import { Footer } from "@/components/FooterSection";
import { HeroSection } from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="relative">
        <HeroSection />
        <section id="features">
          <AboutSection />
        </section>
        <ProductsSection />
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </div>
  );
}