import { useRef } from "react";
import { Toaster } from "./components/ui/sonner";
import { GoogleAnalytics, trackEvent } from "./components/GoogleAnalytics";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { DetailSection } from "./components/DetailSection";
import { GallerySection } from "./components/GallerySection";
import { VideoSection } from "./components/VideoSection";
import { InvestmentSection } from "./components/InvestmentSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    trackEvent("click", "CTA", "Scroll to Contact Form");
  };

  return (
    <div className="min-h-screen">
      {/* 
        Для активації Google Analytics замініть 'GA_MEASUREMENT_ID' 
        на ваш реальний Google Analytics Measurement ID (наприклад, 'G-XXXXXXXXXX')
      */}
      <GoogleAnalytics trackingId="GA_MEASUREMENT_ID" />
      
      <Toaster position="top-center" richColors />
      
      <HeroSection onContactClick={scrollToContact} />
      <FeaturesSection />
      <DetailSection />
      <GallerySection />
      <VideoSection />
      <InvestmentSection onContactClick={scrollToContact} />
      <ContactSection ref={contactRef} />
      <Footer />
    </div>
  );
}
