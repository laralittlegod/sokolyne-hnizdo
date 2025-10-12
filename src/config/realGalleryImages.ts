/**
 * Конфігурація з реальними фото вілли
 * 
 * ВАЖЛИВО: Після того як ви перенесете сайт на хостинг:
 * 1. Покладіть всі реальні фото в папку public/images/gallery/
 * 2. Імпортуйте їх тут
 * 3. Замініть galleryImages в /config/galleryImages.ts на ці фото
 */

// Приклад імпорту реальних фото (розкоментуйте після переносу на хостинг):
// import villaLito from "../public/images/gallery/villa-lito.png";
// import villaOsin from "../public/images/gallery/villa-osin.png";
// import villaZyma from "../public/images/gallery/villa-zyma.png";

export interface RealGalleryImage {
  src: string;
  alt: string;
  category: 'exterior' | 'interior' | 'nature' | 'details';
}

// Тимчасово використовуємо placeholder зображення
// Після переносу на хостинг замініть на:
// src: villaLito (або "/images/gallery/villa-lito.png")
export const realGalleryImages: RealGalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1702222029197-a330aacb6efa?w=1080",
    alt: "Вілла Соколине гніздо влітку серед зелені",
    category: "exterior"
  },
  {
    src: "https://images.unsplash.com/photo-1740258662768-b46a3f3f0c06?w=1080",
    alt: "Вілла восени в золотих кольорах",
    category: "exterior"
  },
  {
    src: "https://images.unsplash.com/photo-1568565609251-2d230a4fefc3?w=1080",
    alt: "Вілла взимку в снігу",
    category: "exterior"
  },
];

/**
 * ІНСТРУКЦІЯ ПО ЗАМІНІ НА РЕАЛЬНІ ФОТО:
 * 
 * 1. Покладіть ваші 3 фото (літо, осінь, зима) в папку public/images/gallery/
 * 2. Назвіть їх: villa-summer.png, villa-autumn.png, villa-winter.png
 * 3. Замініть src вище на:
 *    src: "/images/gallery/villa-summer.png"
 *    src: "/images/gallery/villa-autumn.png"
 *    src: "/images/gallery/villa-winter.png"
 * 4. Відкрийте /config/galleryImages.ts
 * 5. Замініть перші 3 елементи масиву на ці
 */
