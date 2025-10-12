import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { galleryImages, TOTAL_IMAGES, CURRENT_IMAGES } from "../config/galleryImages";
import heroImage from "figma:asset/df33b0a7e0e2c89ed38bbe542ad4d2a2989202c8.png";

// Додаємо головне фото з Figma на початок галереї
const allGalleryImages = [
  {
    src: heroImage,
    alt: "Вілла Соколине гніздо на заході сонця",
    category: "exterior" as const,
  },
  ...galleryImages,
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? allGalleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === allGalleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6">Галерея</h2>
          <p className="text-xl text-muted-foreground">
            {TOTAL_IMAGES}+ фотографій та відео екскурсія по маєтку
          </p>
          {CURRENT_IMAGES < TOTAL_IMAGES && (
            <p className="text-sm text-muted-foreground mt-2">
              Показано {CURRENT_IMAGES} з {TOTAL_IMAGES} фотографій
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allGalleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer overflow-hidden rounded-lg aspect-[4/3] bg-muted"
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {CURRENT_IMAGES < TOTAL_IMAGES && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-muted-foreground"
          >
            <p>
              Повна галерея з {TOTAL_IMAGES}+ фотографіями та 3 відео доступна після запиту на перегляд
            </p>
          </motion.div>
        )}
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
                src={allGalleryImages[selectedImage].src}
                alt={allGalleryImages[selectedImage].alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <p className="text-white text-center mt-4">
                {selectedImage + 1} / {allGalleryImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
