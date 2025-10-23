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
    alt: "Вілла 4 сезони - головний фасад влітку",
    category: "summer"
  },
  {
    src: "/images/gallery/10.2-summer.webp",
    alt: "Літня тераса з видом на ліс",
    category: "summer"
  },
  {
    src: "/images/gallery/13.1-summer_1.webp",
    alt: "Басейн серед зелені",
    category: "summer"
  },
  {
    src: "/images/gallery/13.3-summer.webp",
    alt: "Літній сад вілли",
    category: "summer"
  },
  {
    src: "/images/gallery/13.4-summer.webp",
    alt: "Альтанка для відпочинку",
    category: "summer"
  },
  {
    src: "/images/gallery/13.5-summer.webp",
    alt: "Панорамний вид влітку",
    category: "summer"
  },
  {
    src: "/images/gallery/summer-house_1.webp",
    alt: "Зона барбекю",
    category: "summer"
  },
 
  {
    src: "/images/gallery/summer-sun.webp",
    alt: "Захід сонця над віллою",
    category: "summer"
  },
  {
    src: "/images/gallery/villa-summer-1.1.webp",
    alt: "Захід сонця над віллою",
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
    alt: "Тераса в осінній період",
    category: "autumn"
  },
  {
    src: "/images/gallery/autumn_house_2.webp",
    alt: "Сад в осінніх фарбах",
    category: "autumn"
  },
  {
    src: "/images/gallery/autumn_house_3.webp",
    alt: "Алея з опалим листям",
    category: "autumn"
  },
  {
    src: "/images/gallery/autumn_house_6.1.webp",
    alt: "Вечірні вогні восени",
    category: "autumn"
  },
  {
    src: "/images/gallery/autumn_house_7.webp",
    alt: "Вид з вікна восени",
    category: "autumn"
  },
  {
    src: "/images/gallery/autumn_house_8.webp",
    alt: "Осінній ранок",
    category: "autumn"
  },
  {
    src: "/images/gallery/villa-autumn-2.1.webp",
    alt: "Вілла в осінньому тумані",
    category: "autumn"
  },

  // ========== ЗИМА (10 фото) ==========
  {
    src: "/images/gallery/4.1-winter-house.webp",
    alt: "Вілла вкрита снігом",
    category: "winter"
  },
  {
    src: "/images/gallery/4.3-winter.webp",
    alt: "Зимовий фасад вілли",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-1.webp",
    alt: "Засніжена територія маєтку",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-2.webp",
    alt: "Затишок взимку",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-3.webp",
    alt: "Заповідник Межигір'я взимку",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-4.webp",
    alt: "Вечірнє світло на снігу",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-5.webp",
    alt: "Димар у роботі",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-6.webp",
    alt: "Зимовий ранок біля вілли",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-house.webp",
    alt: "Сніжинки на вікнах",
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
    alt: "Вілла навесні в цвіту",
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
    alt: "Весняна свіжість",
    category: "spring"
  },
  {
    src: "/images/gallery/spring_2.webp",
    alt: "Пробудження природи навесні",
    category: "spring"
  },
  {
    src: "/images/gallery/spring_3.1.webp",
    alt: "Пробудження природи навесні",
    category: "spring"
  },
  {
    src: "/images/gallery/spring_4.1.webp",
    alt: "Пробудження природи навесні",
    category: "spring"
  },
  {
    src: "/images/gallery/spring_5.1.webp",
    alt: "Пробудження природи навесні",
    category: "spring"
  },
  {
    src: "/images/gallery/spring_6.webp",
    alt: "Пробудження природи навесні",
    category: "spring"
  },
  {
    src: "/images/gallery/villa-spinng-1.2.webp",
    alt: "Пробудження природи навесні",
    category: "spring"
  },

  // ========== ІНТЕР'ЄР (10 фото) ==========
  {
    src: "/images/gallery/villa-aero-5.1_1.webp",
    alt: "Просторе вітальня з каміном",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-autumn-2.1.webp",
    alt: "Вітальня з панорамними вікнами",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-bath-12.4.webp",
    alt: "Головна спальня",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-bedroom-12.1.webp",
    alt: "Гостьова спальня",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-cabinet-9.2.webp",
    alt: "Сучасна кухня з островом",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-childrenroom-15.2.webp",
    alt: "Їдальня на 12 персон",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-garden-7.1.webp",
    alt: "Головна ванна кімната",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-hall-6.1.webp",
    alt: "Робочий кабінет",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-kitchen-8.4.webp",
    alt: "Холл з мармуровими сходами",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-living-room-6.2.webp",
    alt: "Винний льох",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-living-room-8.1.webp",
    alt: "Винний льох",
    category: "interior"
  },
  {
    src: "/images/gallery/villa-progect-5.2_1.webp",
    alt: "Винний льох",
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
