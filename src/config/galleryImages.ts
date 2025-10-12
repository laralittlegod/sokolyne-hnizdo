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
  // ДОДАЙТЕ БІЛЬШЕ ФОТО ЕКСТЕР'ЄРУ ТУТ
  // { src: "/images/gallery/exterior-04.jpg", alt: "Опис фото", category: "exterior" },
  // { src: "/images/gallery/exterior-05.jpg", alt: "Опис фото", category: "exterior" },
  // ... до 15 фото екстер'єру

  // ІНТЕР'ЄР (фото 16-35)
  {
    src: "https://images.unsplash.com/photo-1668365011614-9c4a49a0e89d?w=1080",
    alt: "Вітальня вілли",
    category: "interior"
  },
  {
    src: "https://images.unsplash.com/photo-1729606188713-814d1b7bf893?w=1080",
    alt: "Головна спальня",
    category: "interior"
  },
  {
    src: "https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?w=1080",
    alt: "Кухня",
    category: "interior"
  },
  {
    src: "https://images.unsplash.com/photo-1658760046471-896cbc719c9d?w=1080",
    alt: "Ванна кімната",
    category: "interior"
  },
  // ДОДАЙТЕ БІЛЬШЕ ФОТО ІНТЕР'ЄРУ ТУТ
  // { src: "/images/gallery/interior-05.jpg", alt: "Опис фото", category: "interior" },
  // { src: "/images/gallery/interior-06.jpg", alt: "Опис фото", category: "interior" },
  // ... до 20 фото інтер'єру

  // ПРИРОДА І ТЕРИТОРІЯ (фото 36-50)
  {
    src: "https://images.unsplash.com/photo-1652459002590-03af0263b70d?w=1080",
    alt: "Національний заповідник Межигір'я",
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
