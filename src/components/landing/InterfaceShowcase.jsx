import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageUploadBox from './ImageUploadBox';

const screens = [
  { id: 'dashboard', label: 'Общий дашборд', img: '/screenshots/dashboard_wb_full.png' },
  { id: 'upload', label: 'Загрузка', img: '/screenshots/zagruzka.png' },
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
          <Tabs value={active} onValueChange={setActive} className="w-full sm:w-auto">
            <TabsList className="grid h-auto w-full grid-cols-2 gap-1.5 rounded-2xl border border-border bg-white p-1.5 shadow-sm sm:inline-flex sm:w-auto sm:grid-cols-none sm:rounded-full sm:p-1">
              {screens.map(s => (
                <TabsTrigger
                  key={s.id}
                  value={s.id}
                  className="min-h-10 whitespace-normal rounded-xl px-2 py-2 text-center text-sm leading-tight data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm sm:min-h-0 sm:whitespace-nowrap sm:rounded-full sm:px-4"
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
              className="rounded-none shadow-none md:min-h-[320px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
