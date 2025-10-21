import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ArrowLeft, Home, ArrowUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { realGalleryImages } from "../config/realGalleryImages";

// Використовуємо реальні фото з конфігу
const allGalleryImages = realGalleryImages;

interface GalleryPageProps {
  onBackToHome?: () => void;
}

export function GalleryPage({ onBackToHome }: GalleryPageProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const filtersRef = useRef<HTMLDivElement>(null);

  const filteredImages = filter === "all" 
    ? allGalleryImages 
    : allGalleryImages.filter(img => img.category === filter);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  const scrollToFilters = () => {
    filtersRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const filterCategories = [
    { value: "all", label: "Всі фото" },
    { value: "autumn", label: "Осінь" },
    { value: "winter", label: "Зима" },
    { value: "spring", label: "Весна" },
    { value: "summer", label: "Літо" },
    { value: "interior", label: "Інтер'єр" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 md:py-6 px-4 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2 truncate">Повна галерея</h1>
            <p className="text-sm md:text-base opacity-90 truncate">Вілла "4 сезони"</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onBackToHome || (() => window.location.href = '/')}
            className="border-primary-foreground/20 bg-primary-foreground text-primary hover:bg-primary-foreground/95 hover:text-secondary hover:border-secondary/50 shrink-0 md:text-base"
          >
            {onBackToHome ? (
              <>
                <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                <span className="hidden xs:inline">Назад</span>
                <span className="xs:hidden">←</span>
              </>
            ) : (
              <>
                <Home className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                <span className="hidden xs:inline">На головну</span>
                <span className="xs:hidden">🏠</span>
              </>
            )}
          </Button>
        </div>
      </header>

      <div className="py-8 md:py-12 lg:py-16 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <motion.div
            ref={filtersRef}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12 flex flex-wrap gap-2 md:gap-3 justify-center"
          >
            {filterCategories.map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 text-sm md:text-base rounded-full transition-all ${
                  filter === item.value
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground border border-border hover:border-secondary hover:shadow"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>

          {/* Gallery Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8 md:mb-12 px-2"
          >
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
              Показано {filteredImages.length} {filter === "all" ? "фотографій" : `фото категорії "${
                filter === "autumn" ? "Осінь" : 
                filter === "winter" ? "Зима" : 
                filter === "spring" ? "Весна" : 
                filter === "summer" ? "Літо" : 
                "Інтер'єр"
              }"`}
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 relative">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cursor-pointer overflow-hidden rounded-lg aspect-[4/3] bg-muted shadow-md hover:shadow-xl transition-all relative"
                onClick={() => setSelectedImage(index)}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 md:p-3 opacity-0 hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs md:text-sm line-clamp-2">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll to Top Button - показується після прокрутки */}
          {filteredImages.length > 12 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-30"
            >
              <Button
                onClick={scrollToFilters}
                size="lg"
                className="rounded-full w-12 h-12 md:w-14 md:h-14 shadow-2xl bg-primary hover:bg-primary/90 p-0"
                aria-label="Повернутися до фільтрів"
              >
                <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </motion.div>
          )}

          {/* Duplicate Filters at Bottom для зручності */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 mb-6 md:mb-8 flex flex-wrap gap-2 md:gap-3 justify-center"
          >
            {filterCategories.map((item) => (
              <button
                key={`bottom-${item.value}`}
                onClick={() => {
                  setFilter(item.value);
                  scrollToFilters();
                }}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 text-sm md:text-base rounded-full transition-all ${
                  filter === item.value
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground border border-border hover:border-secondary hover:shadow"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16 text-center bg-muted/50 rounded-lg p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Зацікавлені в перегляді?</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto px-2">
              Для особистого перегляду вілли та отримання додаткової інформації, 
              будь ласка, зв'яжіться з нами
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <a href="mailto:viktorconar@gmail.com" className="w-full sm:w-auto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  Написати на email
                </Button>
              </a>
              <a href="tel:+380937560491" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Зателефонувати
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-white/70 transition-colors z-10 bg-black/30 rounded-full p-1.5 sm:p-2"
              aria-label="Закрити"
            >
              <X className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors z-10 bg-black/30 rounded-full p-1.5 sm:p-2"
              aria-label="Попереднє фото"
            >
              <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors z-10 bg-black/30 rounded-full p-1.5 sm:p-2"
              aria-label="Наступне фото"
            >
              <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-7xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh] lg:max-h-[85vh] object-contain"
              />
              <div className="text-white text-center mt-3 md:mt-4 space-y-1 md:space-y-2 px-4">
                <p className="text-sm md:text-base lg:text-lg line-clamp-2">{filteredImages[selectedImage].alt}</p>
                <p className="text-xs md:text-sm opacity-75">
                  {selectedImage + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
