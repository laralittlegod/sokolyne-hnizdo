import { motion } from "motion/react";
import { TrendingUp, DollarSign, Award, Shield } from "lucide-react";
import { Button } from "./ui/button";

interface InvestmentSectionProps {
  onContactClick: () => void;
}

const investments = [
  {
    icon: TrendingUp,
    title: "Висока інвестиційна привабливість",
    description:
      "Локація будинку сприяє подвоєнню його вартості після завершення війни. Реальна вартість об'єкту складає €3-3.5 млн.",
  },
  {
    icon: DollarSign,
    title: "Унікальна ціна",
    description:
      "Об'єкт продається за €2 млн (без урахування податків) — це дуже вигідна інвестиція саме зараз, в чому ви можете самостійно переконатись.",
  },
  {
    icon: Award,
    title: "Рідкісна пропозиція",
    description:
      "Дім у продажу в такій унікальній місцевості — це велика рідкість. Зазвичай такі об'єкти слугують сімейними маєтками або заміськими резиденціями.",
  },
  {
    icon: Shield,
    title: "Прозора угода",
    description:
      "Продаж відбувається у зв'язку з сімейними обставинами, що є єдиною причиною продажу об'єкту. Повна юридична чистота.",
  },
];

export function InvestmentSection({ onContactClick }: InvestmentSectionProps) {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary to-[#152e24] text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6">
            Чудова інвестиційна можливість
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Це не просто купівля нерухомості — це інвестиція у вашу якість життя 
            та фінансове майбутнє
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {investments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-10 rounded-lg"
              >
                <Icon className="h-10 w-10 mb-4" />
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="opacity-90 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={onContactClick}
            className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-12 py-6 h-auto shadow-2xl"
          >
            Дізнатися більше про інвестицію
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
