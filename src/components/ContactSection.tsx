import { useState, forwardRef } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";
import { trackEvent } from "./GoogleAnalytics";

export const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Відстежуємо подію у Google Analytics
    trackEvent("submit_form", "Contact", "Contact Form Submission");

    // Тут буде інтеграція з вашим бекендом
    console.log("Form submitted:", formData);

    toast.success("Дякуємо за ваш запит!", {
      description: "Ми зв'яжемося з вами найближчим часом для планування перегляду.",
    });

    // Очищаємо форму
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={ref} className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6">
            Запланувати перегляд
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Залиште ваші контактні дані, і наш менеджер зв'яжеться з вами 
            для організації персонального перегляду маєтку
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-lg shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Ім'я та прізвище *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Іван Іваненко"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="ivan@example.com"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+380 XX XXX XX XX"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Повідомлення (необов'язково)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Розкажіть трохи про себе та ваші побажання щодо перегляду..."
                rows={5}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-lg py-6 h-auto bg-primary hover:bg-primary/90"
            >
              Надіслати запит
            </Button>

            <p className="text-sm text-muted-foreground text-center mt-4">
              Ваші дані будуть оброблені конфіденційно відповідно до політики приватності
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
