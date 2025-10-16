/**
 * Конфігурація галереї зображень вілли "Соколине гніздо"
 * 
 * ІНСТРУКЦІЯ ДЛЯ ДОДАВАННЯ ВЛАСНИХ ФОТОГРАФІЙ:
 * 
 * Варіант 1 - При переносі на власний хостінг:
 * 1. Створіть папку /public/images/gallery/ у вашому проєкті
 * 2. Завантажте туди всі фото (наприклад: villa-01.jpg, villa-02.jpg, і т.д.)
 * 3. Змініть src нижче на: "/images/gallery/villa-01.jpg" і т.д.
 * 
 * Варіант 2 - Використання онлайн сховища:
 * 1. Завантажте фото на Google Drive, Dropbox, або інше сховище
 * 2. Отримайте публічні посилання на кожне фото
 * 3. Вставте ці посилання нижче в поле src
 * 
 * Варіант 3 - Використання CDN або хостингу зображень:
 * 1. Завантажте на Cloudinary, ImgBB, або подібний сервіс
 * 2. Вставте URL з цих сервісів
 */

export interface GalleryImage {
  src: string;
  alt: string;
  category?: 'exterior' | 'interior' | 'nature' | 'details';
}

export const galleryImages: GalleryImage[] = [
  // ЕКСТЕР'ЄР БУДИНКУ (фото 1-15)
  {
    src: "/images/gallery/villa-summer-1.1.webp",
    alt: "Вілла Соколине гніздо влітку серед зелені",
    category: "exterior"
  },
  {
    src: "/images/gallery/villa-autumn-2.1.webp",
    alt: "Вілла восени в золотих кольорах",
    category: "exterior"
  },
  {
    src: "/images/gallery/villa-winter-4.2.webp",
    alt: "Вілла взимку в снігу",
    category: "exterior"
  },
  // ДОДАЙТЕ БІЛЬШЕ ФОТО ЕКСТЕР'ЄРУ ТУТ
  // { src: "/images/gallery/exterior-04.jpg", alt: "Опис фото", category: "exterior" },
  // { src: "/images/gallery/exterior-05.jpg", alt: "Опис фото", category: "exterior" },
  // ... до 15 фото екстер'єру

  // ІНТЕР'ЄР (фото 16-35)
  {
    src: "/images/gallery/villa-hall-6.1.webp",
    alt: "Вітальня вілли",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-bedroom-12.1.webp",
    alt: "Головна спальня",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-kitchen-8.4.webp",
    alt: "Кухня",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-cabinet-9.2.webp",
    alt: "Кабінет",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-bath-12.4.webp",
    alt: "Ванна кімната",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-garden-7.1.webp",
    alt: "Зимовий сад",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-living-room-8.1.webp",
    alt: "Вітальня",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-childrenroom-15.2.webp",
    alt: "Дитяча кімната",
    category: "interior"
  },
  // ДОДАЙТЕ БІЛЬШЕ ФОТО ІНТЕР'ЄРУ ТУТ
  // { src: "/images/gallery/interior-05.jpg", alt: "Опис фото", category: "interior" },
  // { src: "/images/gallery/interior-06.jpg", alt: "Опис фото", category: "interior" },
  // ... до 20 фото інтер'єру

  // ПРИРОДА І ТЕРИТОРІЯ (фото 36-50)
  {
    src: "/images/gallery/villa-aero-5.1_1.webp",
    alt: "Проект будинку",
    category: "nature"
  },
  {
    src: "/images/gallery/villa-progect-5.2_1.webp",
    alt: "Проект будинку",
    category: "nature"
  },
  {
    src: "/images/gallery/villa-spinng-1.2.webp",
    alt: "Вілла навесні",
    category: "nature"
  },
  // ДОДАЙТЕ БІЛЬШЕ ФОТО ПРИРОДИ ТУТ
  // { src: "/images/gallery/nature-02.jpg", alt: "Опис фото", category: "nature" },
  // { src: "/images/gallery/nature-03.jpg", alt: "Опис фото", category: "nature" },
  // ... до 15 фото природи

  // ДЕТАЛІ ТА ОСОБЛИВОСТІ (фото можна додати за потреби)
  // { src: "/images/gallery/detail-01.jpg", alt: "Архітектурні деталі", category: "details" },
];

// Функція для фільтрації по категоріях (опціонально)
export const getImagesByCategory = (category: GalleryImage['category']) => {
  return galleryImages.filter(img => img.category === category);
};

// Експортуємо кількість для відображення в UI
export const TOTAL_IMAGES = 50; // Загальна кількість фото для показу у тексті
export const CURRENT_IMAGES = galleryImages.length; // Поточна кількість завантажених фото
