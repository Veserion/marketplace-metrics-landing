import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageUploadBox from './ImageUploadBox';

const screens = [
  { id: 'upload', label: 'Загрузка', img: '/screenshots/zagruzka.png' },
  { id: 'dashboard', label: 'Общий дашборд', img: '/screenshots/dashboard_wb_full.png' },
  { id: 'details', label: 'Детализация расчетов', img: '/screenshots/detalizaciya-raschetov.png' },
  { id: 'products', label: 'Структура выручки', img: '/screenshots/unit_total.png' },
  { id: 'losses', label: 'Убыточные товары', img: '/screenshots/ubitochnie.png' },
  { id: 'dynamics', label: 'Динамика продаж', img: '/screenshots/dinamika.png' },
];

export default function InterfaceShowcase() {
  const [active, setActive] = useState('dashboard');
  const currentScreen = screens.find(s => s.id === active);

  return (
    <section className="py-20 lg:py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Интерфейс продукта
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Современный дашборд с полной аналитикой магазина
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <Tabs value={active} onValueChange={setActive}>
            <TabsList className="bg-white border border-border shadow-sm rounded-full p-1 flex-wrap h-auto gap-1">
              {screens.map(s => (
                <TabsTrigger
                  key={s.id}
                  value={s.id}
                  className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm"
                >
                  {s.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-3 bg-primary/8 rounded-3xl blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl bg-white">
            <ImageUploadBox
              src={currentScreen.img}
              label={currentScreen.label}
              hint="Скриншот интерфейса · рекомендуемый размер 1200×700"
              className="min-h-[320px] rounded-none shadow-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
