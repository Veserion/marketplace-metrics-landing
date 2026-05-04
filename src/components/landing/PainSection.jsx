import React from 'react';
import { motion } from "framer-motion";
import { AlertTriangle, FileX, TrendingDown, Users } from "lucide-react";
import ImageUploadBox from './ImageUploadBox';

const pains = [
  { icon: AlertTriangle, text: 'Сложные отчёты маркетплейсов', color: 'text-red-500', bg: 'bg-red-50' },
  { icon: FileX, text: 'Десятки Excel файлов', color: 'text-orange-500', bg: 'bg-orange-50' },
  { icon: TrendingDown, text: 'Трудно понять реальную прибыль', color: 'text-red-500', bg: 'bg-red-50' },
  { icon: Users, text: 'Сложно контролировать менеджеров', color: 'text-orange-500', bg: 'bg-orange-50' },
];

export default function PainSection() {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Знакомая ситуация?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Селлеры маркетплейсов тратят часы на разбор отчётов, вместо того чтобы развивать бизнес.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${pain.bg} flex items-center justify-center mb-4`}>
                <pain.icon className={`w-6 h-6 ${pain.color}`} />
              </div>
              <p className="font-semibold text-foreground">{pain.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          <ImageUploadBox
            label="Скриншот: хаос Excel"
            hint="Пример сложного Excel-отчёта · рекомендуемый размер 800×500"
            className="min-h-[240px]"
          />
          <ImageUploadBox
            label="Скриншот: Метрика"
            hint="Пример нашего дашборда · рекомендуемый размер 800×500"
            className="min-h-[240px]"
          />
        </motion.div>
      </div>
    </section>
  );
}