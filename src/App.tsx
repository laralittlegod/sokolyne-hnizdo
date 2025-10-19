import { useRef, useState, useEffect } from "react";
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
  const [currentPage, setCurrentPage] = useState<"home" | "gallery">("home");

  // Перевіряємо URL при завантаженні
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/gallery" || path === "/gallery.html") {
      setCurrentPage("gallery");
    }
  }, []);

  // Оновлюємо URL при зміні сторінки
  useEffect(() => {
    if (currentPage === "gallery") {
      window.history.pushState({}, "", "/gallery");
    } else {
      window.history.pushState({}, "", "/");
    }
  }, [currentPage]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    trackEvent("click", "CTA", "Scroll to Contact Form");
  };

  // Якщо сторінка галереї
  if (currentPage === "gallery") {
    return (
      <div className="min-h-screen">
        <GoogleAnalytics trackingId="GA_MEASUREMENT_ID" />
        <Toaster position="top-center" richColors />
        <GalleryPage onBackToHome={() => setCurrentPage("home")} />
      </div>
    );
  }

  // Головна сторінка
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
