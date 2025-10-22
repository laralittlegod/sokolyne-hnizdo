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
  // ========== ЛІТО (7 фото) ==========
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
    src: "/images/gallery/summer-15.webp",
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
    src: "/images/gallery/autumn-10.webp",
    alt: "Вілла в осінньому тумані",
    category: "autumn"
  },

  // ========== ЗИМА (10 фото) ==========
  {
    src: "/images/gallery/winter-01.webp",
    alt: "Вілла вкрита снігом",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-02.webp",
    alt: "Зимовий фасад вілли",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-03.webp",
    alt: "Засніжена територія маєтку",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-04.webp",
    alt: "Затишок взимку",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-05.webp",
    alt: "Заповідник Межигір'я взимку",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-06.webp",
    alt: "Вечірнє світло на снігу",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-07.webp",
    alt: "Димар у роботі",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-08.webp",
    alt: "Зимовий ранок біля вілли",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-09.webp",
    alt: "Сніжинки на вікнах",
    category: "winter"
  },
  {
    src: "/images/gallery/winter-10.webp",
    alt: "Казкова зимова атмосфера",
    category: "winter"
  },

  // ========== ВЕСНА (5 фото) ==========
  {
    src: "/images/gallery/spring-01.webp",
    alt: "Вілла навесні в цвіту",
    category: "spring"
  },
  {
    src: "/images/gallery/spring-02.webp",
    alt: "Квітучий сад навесні",
    category: "spring"
  },
  {
    src: "/images/gallery/spring-03.webp",
    alt: "Перші весняні листочки",
    category: "spring"
  },
  {
    src: "/images/gallery/spring-04.webp",
    alt: "Весняна свіжість",
    category: "spring"
  },
  {
    src: "/images/gallery/spring-05.webp",
    alt: "Пробудження природи навесні",
    category: "spring"
  },

  // ========== ІНТЕР'ЄР (10 фото) ==========
  {
    src: "/images/gallery/interior-01.webp",
    alt: "Просторе вітальня з каміном",
    category: "interior"
  },
  {
    src: "/images/gallery/interior-02.webp",
    alt: "Вітальня з панорамними вікнами",
    category: "interior"
  },
  {
    src: "/images/gallery/interior-03.webp",
    alt: "Головна спальня",
    category: "interior"
  },
  {
    src: "/images/gallery/interior-04.webp",
    alt: "Гостьова спальня",
    category: "interior"
  },
  {
    src: "/images/gallery/interior-05.webp",
    alt: "Сучасна кухня з островом",
    category: "interior"
  },
  {
    src: "/images/gallery/interior-06.webp",
    alt: "Їдальня на 12 персон",
    category: "interior"
  },
  {
    src: "/images/gallery/interior-07.webp",
    alt: "Головна ванна кімната",
    category: "interior"
  },
  {
    src: "/images/gallery/interior-08.webp",
    alt: "Робочий кабінет",
    category: "interior"
  },
  {
    src: "/images/gallery/interior-09.webp",
    alt: "Холл з мармуровими сходами",
    category: "interior"
  },
  {
    src: "/images/gallery/interior-10.webp",
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
