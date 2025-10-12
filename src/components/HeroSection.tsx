import { motion } from "motion/react";
import { ChevronDown, MapPin, Home } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "figma:asset/df33b0a7e0e2c89ed38bbe542ad4d2a2989202c8.png";

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const scrollToContent = () => {
    const element = document.getElementById("content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-primary">
      {/* Split Layout */}
      <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center px-6 py-20 lg:px-16 xl:px-24 bg-primary text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-2xl"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 inline-flex items-center gap-2 border border-primary-foreground/20 rounded-full px-4 py-2"
            >
              <MapPin className="h-4 w-4 text-secondary" />
              <span className="text-sm tracking-wide opacity-90">
                Національний заповідник Межигір'я, Київ
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-6 text-6xl md:text-7xl xl:text-8xl tracking-tight leading-[1.1]"
            >
              Вілла
              <br />
              <span className="italic text-secondary">
                Соколине гніздо
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mb-8 text-lg md:text-xl leading-relaxed opacity-90 max-w-xl"
            >
              Унікальна сімейна резиденція посеред 80 гектарів вікового лісу. 
              Поєднання абсолютної приватності та близькості до столиці.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mb-10 grid grid-cols-2 gap-6 border-t border-b border-primary-foreground/20 py-8"
            >
              <div>
                <div className="text-sm opacity-70 mb-1">Площа двору</div>
                <div className="text-2xl">0.17 га</div>
              </div>
              <div>
                <div className="text-sm opacity-70 mb-1">Заповідна зона</div>
                <div className="text-2xl">80 га</div>
              </div>
              <div>
                <div className="text-sm opacity-70 mb-1">Рік побудови</div>
                <div className="text-2xl">2018</div>
              </div>
              <div>
                <div className="text-sm opacity-70 mb-1">Вартість</div>
                <div className="text-2xl text-secondary">€2,000,000</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="flex flex-col sm:flex-row lg:flex-col xl:flex-col 2xl:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={onContactClick}
                className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-10 py-6 h-auto group w-full sm:w-auto xl:w-full 2xl:w-auto min-w-[280px]"
              >
                Запланувати перегляд
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContent}
                className="border-primary-foreground/20 bg-primary-foreground text-primary hover:bg-primary-foreground/95 hover:text-secondary hover:border-secondary/50 text-lg px-10 py-6 h-auto transition-colors w-full sm:w-auto xl:w-full 2xl:w-auto min-w-[280px]"
              >
                Дізнатися більше
              </Button>
            </motion.div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-12 flex items-center gap-3 opacity-75"
            >
              <Home className="h-5 w-5" />
              <span className="text-sm">
                Архітектор: Володимир Кунін | Введено в експлуатацію 2018
              </span>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            onClick={scrollToContent}
            className="absolute bottom-8 left-[25%] -translate-x-1/2 hidden lg:block"
            aria-label="Прокрутити вниз"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm opacity-70">Прокрутіть</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="h-6 w-6 opacity-70" />
              </motion.div>
            </div>
          </motion.button>
        </div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="relative h-[50vh] lg:h-full"
        >
          <img
            src={heroImage}
            alt="Вілла Соколине гніздо - аерофотознімок"
            className="h-full w-full object-cover"
            style={{ objectPosition: '65% center' }}
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/20 lg:to-primary/40" />
          
          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 right-8 bg-primary/90 backdrop-blur-sm text-primary-foreground px-6 py-4 rounded-lg"
          >
            <div className="text-sm opacity-80 mb-1">Ексклюзивна пропозиція</div>
            <div className="text-xl">Рідкісна можливість</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
