import { motion } from "motion/react";
import { MapPin, Users, Wind, Lock } from "lucide-react";

const details = [
  {
    icon: MapPin,
    title: "Розташування",
    description:
      "Будинок знаходиться в одному із найпрестижніших районів київської субурбії – Межигір'я. Поруч живуть видатні українські родини зі сфер бізнесу та політики.",
  },
  {
    icon: Wind,
    title: "Екологія",
    description:
      "Дуже чисте повітря, повна відсутність міського шуму. Парк із 23 сортами дерев віком від 100 років є заповідною зоною, що охороняється державою.",
  },
  {
    icon: Users,
    title: "Приватність",
    description:
      "Будинок знаходиться в межах села і при цьому не має межуючих сусідів з трьох сторін. Забезпечує максимальну конфіденційність та комфорт.",
  },
  {
    icon: Lock,
    title: "Безпека",
    description:
      "Дуже зручні та незавантажені автомобілями дороги і транспортні розв'язки. Відсутність злочинності. Близьке розташування від Києва.",
  },
];

export function DetailSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6">
            Життя в гармонії з природою
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Цікавою особливістю маєтку є поєднання престижного розташування, 
            абсолютної приватності та екологічно чистого середовища
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-lg border border-border hover:border-secondary/30 transition-all hover:shadow-lg"
              >
                <Icon className="h-10 w-10 mb-4 text-secondary" />
                <h3 className="text-2xl mb-4">{detail.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {detail.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-10 rounded-lg text-center"
        >
          <h3 className="text-3xl mb-4">Архітектор</h3>
          <p className="text-xl text-muted-foreground">
            Будинок збудований по індивідуальному проекту архітектора{" "}
            <span className="text-foreground">Володимира Куніна</span> та 
            введений в експлуатацію у 2018 році.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
