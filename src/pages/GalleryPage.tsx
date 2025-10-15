import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ArrowLeft, Home } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import heroImage from "figma:asset/df33b0a7e0e2c89ed38bbe542ad4d2a2989202c8.png";

// Генеруємо масив з 50 фотографій
const generateGalleryImages = () => {
  const images = [
    {
      src: heroImage,
      alt: "Вілла Соколине гніздо на заході сонця",
      category: "exterior" as const,
    },
  ];

  // Додаємо placeholder фото (замініть на реальні)
  const placeholders = [
    "https://images.unsplash.com/photo-1702222029197-a330aacb6efa?w=1080",
    "https://images.unsplash.com/photo-1740258662768-b46a3f3f0c06?w=1080",
    "https://images.unsplash.com/photo-1568565609251-2d230a4fefc3?w=1080",
    "https://images.unsplash.com/photo-1668365011614-9c4a49a0e89d?w=1080",
    "https://images.unsplash.com/photo-1729606188713-814d1b7bf893?w=1080",
    "https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?w=1080",
    "https://images.unsplash.com/photo-1658760046471-896cbc719c9d?w=1080",
    "https://images.unsplash.com/photo-1652459002590-03af0263b70d?w=1080",
  ];

  const categories: Array<"exterior" | "interior" | "nature" | "details"> = [
    "exterior", "exterior", "exterior", "interior", "interior", "interior", "nature", "details"
  ];

  for (let i = 0; i < 49; i++) {
    images.push({
      src: placeholders[i % placeholders.length],
      alt: `Вілла Соколине гніздо - фото ${i + 2}`,
      category: categories[i % categories.length],
    });
  }

  return images;
};

const allGalleryImages = generateGalleryImages();

interface GalleryPageProps {
  onBackToHome?: () => void;
}

export function GalleryPage({ onBackToHome }: GalleryPageProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-4 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl mb-2">Повна галерея</h1>
            <p className="opacity-90">Вілла "Соколине гніздо"</p>
          </div>
          <Button
            variant="outline"
            onClick={onBackToHome || (() => window.location.href = '/')}
            className="border-primary-foreground/20 bg-primary-foreground text-primary hover:bg-primary-foreground/95 hover:text-secondary hover:border-secondary/50"
          >
            {onBackToHome ? (
              <>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Назад
              </>
            ) : (
              <>
                <Home className="h-4 w-4 mr-2" />
                На головну
              </>
            )}
          </Button>
        </div>
      </header>

      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-wrap gap-3 justify-center"
          >
            {[
              { value: "all", label: "Всі фото" },
              { value: "exterior", label: "Екстер'єр" },
              { value: "interior", label: "Інтер'єр" },
              { value: "nature", label: "Природа" },
              { value: "details", label: "Деталі" },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`px-6 py-3 rounded-full transition-all ${
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
            className="text-center mb-12"
          >
            <p className="text-lg text-muted-foreground">
              Показано {filteredImages.length} {filter === "all" ? "фотографій" : `фото категорії "${filter === "exterior" ? "Екстер'єр" : filter === "interior" ? "Інтер'єр" : filter === "nature" ? "Природа" : "Деталі"}"`}
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cursor-pointer overflow-hidden rounded-lg aspect-[4/3] bg-muted shadow-md hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(index)}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center bg-muted/50 rounded-lg p-8"
          >
            <h3 className="text-2xl mb-4">Зацікавлені в перегляді?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Для особистого перегляду вілли та отримання додаткової інформації, 
              будь ласка, зв'яжіться з нами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@sokolyne-hnizdo.com">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Написати на email
                </Button>
              </a>
              <a href="tel:+380000000000">
                <Button size="lg" variant="outline">
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
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors"
              aria-label="Закрити"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 text-white hover:text-white/70 transition-colors"
              aria-label="Попереднє фото"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white hover:text-white/70 transition-colors"
              aria-label="Наступне фото"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <div className="text-white text-center mt-4 space-y-2">
                <p className="text-lg">{filteredImages[selectedImage].alt}</p>
                <p className="text-sm opacity-75">
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
