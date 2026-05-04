import React from 'react';
import { motion } from "framer-motion";
import { Download, UploadCloud, LineChart } from "lucide-react";

const steps = [
  {
    num: '01',
    icon: Download,
    title: 'Скачайте отчёты',
    desc: 'Зайдите в личный кабинет Ozon или Wildberries и скачайте 2 стандартных отчёта.',
  },
  {
    num: '02',
    icon: UploadCloud,
    title: 'Загрузите в сервис',
    desc: 'Просто перетащите файлы. Никаких настроек, API или интеграций не требуется.',
  },
  {
    num: '03',
    icon: LineChart,
    title: 'Получите аналитику',
    desc: 'Через минуту вы увидите прибыль, убыточные товары, динамику продаж и рекомендации.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-5 py-1.5 rounded-full gradient-bp">
            <span className="font-inter font-bold text-white text-sm tracking-wide uppercase">
              Простое решение
            </span>
          </div>
          <h2 className="font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Как это работает
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Сервис превращает сложные отчёты маркетплейсов в понятную аналитику —
            за 3 простых шага
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <span className="absolute top-6 right-6 text-5xl font-black text-primary/8 group-hover:text-primary/15 transition-colors">
                {step.num}
              </span>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}