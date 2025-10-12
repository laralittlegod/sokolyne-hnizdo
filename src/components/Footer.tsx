import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-[#0f2419] text-primary-foreground py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl mb-4 italic">Соколине гніздо</h3>
            <p className="opacity-90 leading-relaxed">
              Унікальна вілла в серці національного заповідника Межигір'я. 
              Ваш ексклюзивний маєток у Києві.
            </p>
          </div>

          <div>
            <h4 className="text-xl mb-4">Контакти</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@sokolyne-hnizdo.com" className="opacity-90 hover:opacity-100 transition-opacity">
                  info@sokolyne-hnizdo.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+380000000000" className="opacity-90 hover:opacity-100 transition-opacity">
                  +380 (XX) XXX-XX-XX
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">
                  Межигір'я, Київ, Україна
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl mb-4">Інформація</h4>
            <ul className="space-y-2 opacity-90">
              <li>Площа території: 0.17 га</li>
              <li>Рік побудови: 2018</li>
              <li>Заповідна зона: 80 га</li>
              <li>Вартість: €2,000,000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center opacity-75">
          <p>© 2025 Вілла "Соколине гніздо". Всі права захищені.</p>
          <p className="mt-2 text-sm">
            Цей сайт створено для ознайомлення потенційних покупців з об'єктом нерухомості.
          </p>
        </div>
      </div>
    </footer>
  );
}
