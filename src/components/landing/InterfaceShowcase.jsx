import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageUploadBox from './ImageUploadBox';

const screens = [
  { id: 'dashboard', label: 'Общий дашборд', img: '/__generating__/img_8a5017dddae5.png' },
  { id: 'products', label: 'Прибыль по товарам', img: '/__generating__/img_a3564b9a09d8.png' },
  { id: 'losses', label: 'Убыточные товары', img: '/__generating__/img_ee120fa27b77.png' },
  { id: 'dynamics', label: 'Динамика продаж', img: '/__generating__/img_06798a0b1901.png' },
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
            {active === 'dashboard' ? (
              <ImageUploadBox
                label="Общий дашборд"
                hint="Скриншот главного дашборда · рекомендуемый размер 1200×700"
                className="min-h-[320px]"
              />
            ) : (
              <img
                src={currentScreen.img}
                alt={currentScreen.label}
                className="w-full h-auto"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
