/**
 * Конфігурація реальних фото вілли "4 сезони"
 * 50 фотографій розподілені по сезонах та інтер'єру
 * 
 * ІНСТРУКЦІЯ:
 * 1. Завантажте всі фото в папку public/images/gallery/ на GitHub
 * 2. Замініть шляхи нижче на ваші файли (summer-01.jpg, autumn-01.jpg тощо)
 * 3. Оновіть описи (alt) під ваші реальні фото
 * 4. Збережіть файл і задеплойте на Vercel
 */

export interface RealGalleryImage {
  src: string;
  alt: string;
  category: 'autumn' | 'winter' | 'spring' | 'summer' | 'interior';
}

export const realGalleryImages: RealGalleryImage[] = [
  // ========== ЛІТО (9 фото) ==========
  {
    src: "/images/gallery/10.1-summer.webp",
    alt: "Затишний літній день на терасі",
    category: "summer"
  },
  {
    src: "/images/gallery/10.2-summer.webp",
    alt: "Відпочивальна з видом на ліс",
    category: "summer"
  },
  {
    src: "/images/gallery/13.1-summer_1.webp",
    alt: "Залитий сонцем простір вілли",
    category: "summer"
  },
  {
    src: "/images/gallery/13.3-summer.webp",
    alt: "Сонячне світло пронизує інтер'єр",
    category: "summer"
  },
  {
    src: "/images/gallery/13.4-summer.webp",
    alt: "Завжди багато світла влітку",
    category: "summer"
  },
  {
    src: "/images/gallery/13.5-summer.webp",
    alt: "Панорамний вид влітку",
    category: "summer"
  },
  {
    src: "/images/gallery/summer-house_1.webp",
    alt: "Вілла 4 сезони - головний фасад влітку",
    category: "summer"
  },
 
  {
    src: "/images/gallery/summer-sun.webp",
    alt: "Захід сонця над віллою",
    category: "summer"
  },
  {
    src: "/images/gallery/villa-summer-1.1.webp",
    alt: "Літній теплий ранок на віллі",
    category: "summer"
  },

  // ========== ОСІНЬ (10 фото) ==========
  {
    src: "/images/gallery/7.3_autumn.webp",
    alt: "Вілла в золотих барвах осені",
    category: "autumn"
  },
  {
    src: "/images/gallery/autumn_2.1.webp",
    alt: "Осіннє листя навколо вілли",
    category: "autumn"
  },
  {
    src: "/images/gallery/autumn_3.webp",
    alt: "Фасад восени",
    category: "autumn"
  },
  {
    src: "/images/gallery/autumn_house.webp",
    alt: "Вілла на початку осені",
    category: "autumn"
  },
  {
    src: "/images/gallery/autumn_house_2.webp",
    alt: "Будинок серед осінніх дерев",
    category: "autumn"
  },
  {
    src: "/images/gallery/autumn_house_3.webp",
    alt: "Осінь це прикраса для вілли",
    category: "autumn"
  },
  {
    src: "/images/gallery/autumn_house_6.1.webp",
    alt: "Вид на осінній парковий ландшафт",
    category: "autumn"
  },
  {
    src: "/images/gallery/autumn_house_7.webp",
    alt: "Алея в осінньому листі",
    category: "autumn"
  },
  {
    src: "/images/gallery/autumn_house_8.webp",
    alt: "Вид на віллу з парку в осінніх тонах",
    category: "autumn"
  },
  

  // ========== ЗИМА (10 фото) ==========
  {
    src: "/images/gallery/4.1-winter-house.webp",
    alt: "Сонячний зимовий день біля вілли",
    category: "winter"
  },
  {
    src: "/images/gallery/4.3-winter.webp",
    alt: "Засніжений сад навколо вілли",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-1.webp",
    alt: "Засніжена територія маєтку у вечірній час",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-2.webp",
    alt: "Вечірній затишок взимку",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-3.webp",
    alt: "Вид з балкона на зимовий пейзаж",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-4.webp",
    alt: "Засніжений заповідник біля вілли ввечері",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-5.webp",
    alt: "Зимовий ранок у парку біля вілли",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-house.webp",
    alt: "Сніжинки на вікнах - зимовий сад",
    category: "winter"
  },
  {
    src: "/images/gallery/villa-winter-4.2.webp",
    alt: "Казкова зимова атмосфера",
    category: "winter"
  },

  // ========== ВЕСНА (10 фото) ==========
  {
    src: "/images/gallery/6.3_spring.webp",
    alt: "Весняний ранок просочується світлом",
    category: "spring"
  },
  {
    src: "/images/gallery/7.2_spring.webp",
    alt: "Квітучий сад навесні",
    category: "spring"
  },
  {
    src: "/images/gallery/13.2_spring.webp",
    alt: "Перші весняні листочки",
    category: "spring"
  },
  {
    src: "/images/gallery/spring_1.1.webp",
    alt: "Рання весняна свіжість",
    category: "spring"
  },
  {
    src: "/images/gallery/spring_3.1.webp",
    alt: "Пробудження природи навесні",
    category: "spring"
  },
  {
    src: "/images/gallery/spring_4.1.webp",
    alt: "Трохи снігу навесні",
    category: "spring"
  },
  {
    src: "/images/gallery/spring_5.1.webp",
    alt: "Пробудження зранку навесні",
    category: "spring"
  },
  {
    src: "/images/gallery/spring_6.webp",
    alt: "Весна вже тут",
    category: "spring"
  },
  {
    src: "/images/gallery/villa-spinng-1.2.webp",
    alt: "Весна в розпалі",
    category: "spring"
  },

  // ========== ІНТЕР'ЄР (10 фото) ==========
  {
    src: "/images/gallery/villa-aero-5.1_1.webp",
    alt: "Аєро макет вілли",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-autumn-2.1.webp",
    alt: "Панорама літа на віллі",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-bath-12.4.webp",
    alt: "Вид у вікно з ванної кімнати у головній спальні",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-bedroom-12.1.webp",
    alt: "Головна спальня",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-cabinet-9.2.webp",
    alt: "Кабінет з видом на ліс",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-childrenroom-15.2.webp",
    alt: "Дитяча кімната з видом на парк",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-garden-7.1.webp",
    alt: "Їдальня з видом на сад",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-hall-6.1.webp",
    alt: "Затишний холл ввечері",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-kitchen-8.4.webp",
    alt: "Сучасна кухня з островом",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-living-room-6.2.webp",
    alt: "Винний льох",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-living-room-8.1.webp",
    alt: "Вечірня вітальня",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-progect-5.2_1.webp",
    alt: "Макет вілли з усіх боків",
    category: "interior"
  },
];

/**
 * ✅ ШВИДКА ІНСТРУКЦІЯ:
 * 
 * 1. Завантажте фото на GitHub в public/images/gallery/
 * 2. Назвіть їх: summer-01.jpg, autumn-01.jpg, winter-01.jpg тощо
 * 3. Якщо ваші назви інші - змініть src вище
 * 4. Оновіть описи (alt) під ваші реальні фото
 * 5. Commit changes на GitHub
 * 6. Vercel автоматично задеплоїть зміни
 * 
 * Детальна інструкція: /ІНСТРУКЦІЯ_ЗАМІНА_ФОТО_ГАЛЕРЕЇ.md
 */
