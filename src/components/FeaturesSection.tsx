import { motion } from "motion/react";
import { Trees, Home, Calendar, Shield } from "lucide-react";

const features = [
  {
    icon: Trees,
    value: "80 га",
    label: "Заповідна зона з персональним доступом",
  },
  {
    icon: Home,
    value: "0.17 га",
    label: "Площа двору навколо будинку",
  },
  {
    icon: Calendar,
    value: "2018",
    label: "Рік введення в експлуатацію",
  },
  {
    icon: Shield,
    value: "23",
    label: "Сорти дерев віком від 100 років",
  },
];

export function FeaturesSection() {
  return (
    <section id="content" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6">
            Абсолютно унікальна нерухомість
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Розташована в межах столиці України, міста Києва, посеред національного 
            заповідника Межигір'я площею 80 гектарів
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 border border-border rounded-lg hover:shadow-xl transition-all hover:border-secondary/50 hover:-translate-y-1 bg-card"
              >
                <Icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <div className="text-4xl mb-2">{feature.value}</div>
                <p className="text-muted-foreground">{feature.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
