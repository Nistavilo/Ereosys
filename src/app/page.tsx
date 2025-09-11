import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import {  ProductsSection } from "@/components/GeciciProductSection";
import { Footer } from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";

import { Divide } from "lucide-react";
import { StatsSection } from "@/components/StatsSection";
import { PricingSection } from "@/components/PricisingSection";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
    <main className="relative">
      <HeroSection />  
      <AboutSection/>
      <ProductsSection/>
      <ContactSection/>   
      <Footer/>

    </main>
    </div>
  );
}