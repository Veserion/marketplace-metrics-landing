import React from 'react';
import { motion } from "framer-motion";
import {
  DollarSign, TrendingUp, Package, AlertTriangle,
  LineChart, PieChart, Truck, Calculator
} from "lucide-react";

const features = [
  { icon: DollarSign, title: 'Чистая прибыль', desc: 'Точный расчёт прибыли с учётом всех комиссий и расходов', color: 'bg-blue-50 text-blue-600' },
  { icon: TrendingUp, title: 'Выручка', desc: 'Общая выручка магазина за любой период', color: 'bg-green-50 text-green-600' },
  { icon: Package, title: 'Прибыль по товарам', desc: 'Аналитика каждого товара — сколько заработали', color: 'bg-blue-50 text-blue-600' },
  { icon: AlertTriangle, title: 'Убыточные товары', desc: 'Автоматическое определение товаров, которые приносят убыток', color: 'bg-red-50 text-red-500' },
  { icon: LineChart, title: 'Динамика продаж', desc: 'Графики продаж по дням, неделям и месяцам', color: 'bg-purple-50 text-purple-600' },
  { icon: PieChart, title: 'Оборот за период', desc: 'Полная картина оборота магазина', color: 'bg-indigo-50 text-indigo-600' },
  { icon: Truck, title: 'Рекомендации по поставкам', desc: 'Подсказки, какие товары нужно пополнить', color: 'bg-amber-50 text-amber-600' },
  { icon: Calculator, title: 'Учёт налога', desc: 'Возможность учитывать налог в расчёте прибыли', color: 'bg-teal-50 text-teal-600' },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Возможности аналитики
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Всё, что нужно для контроля прибыли вашего магазина
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-white border border-border hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color.split(' ')[0]}`}>
                <f.icon className={`w-6 h-6 ${f.color.split(' ')[1]}`} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
