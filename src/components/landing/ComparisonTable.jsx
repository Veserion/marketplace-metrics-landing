import React from 'react';
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

// excel: 'bad' = red X, 'text' = plain text | metrika: 'good' = green check, 'text' = plain text
const rows = [
  { feature: 'Время на аналитику', excel: 'bad-text', excelText: '2–4 часа', metrika: 'good-text', metrikaText: '1 минута' },
  { feature: 'Подходит без опыта в Excel', excel: 'bad', metrika: 'good' },
  { feature: 'Автоматический расчёт прибыли', excel: 'bad', metrika: 'good' },
  { feature: 'Определение убыточных товаров', excel: 'bad', metrika: 'good' },
  { feature: 'Визуализация данных', excel: 'bad', metrika: 'good' },
  { feature: 'Рекомендации по поставкам', excel: 'bad', metrika: 'good' },
  { feature: 'ABC-анализ товаров', excel: 'bad', metrika: 'good' },
  { feature: 'Ручная загрузка отчётов без API', excel: 'bad', metrika: 'good' },
  { feature: 'Бесплатный доступ на старте', excel: 'bad-text', excelText: 'Дорого по времени', metrika: 'good-text', metrikaText: 'Бесплатно' },
];

function ExcelCell({ row }) {
  if (row.excel === 'bad') return <X className="w-5 h-5 text-red-500 mx-auto" />;
  if (row.excel === 'bad-text') return (
    <div className="flex flex-col items-center gap-1">
      <X className="w-4 h-4 text-red-500" />
      <span className="text-xs text-red-500 font-medium">{row.excelText}</span>
    </div>
  );
  return null;
}

function MetrikaCell({ row }) {
  if (row.metrika === 'good') return <Check className="w-5 h-5 text-green-500 mx-auto" />;
  if (row.metrika === 'good-text') return (
    <div className="flex flex-col items-center gap-1">
      <Check className="w-4 h-4 text-green-500" />
      <span className="text-xs text-green-600 font-semibold">{row.metrikaText}</span>
    </div>
  );
  return null;
}

export default function ComparisonTable() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Почему это лучше Excel
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border overflow-hidden shadow-sm"
        >
          <div className="grid grid-cols-3">
            <div className="p-4 bg-secondary/50 border-b border-r border-border font-semibold text-muted-foreground text-sm" />
            <div className="p-4 bg-secondary/50 border-b border-r border-border text-center font-semibold text-muted-foreground text-sm">
              Excel
            </div>
            <div className="p-4 bg-primary/8 border-b border-border text-center font-bold text-primary text-sm">
              Маркетплейс Метрика
            </div>
          </div>

          {rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-secondary/20'}`}>
              <div className="p-4 border-b border-r border-border/40 text-sm text-foreground font-medium">
                {row.feature}
              </div>
              <div className="p-4 border-b border-r border-border/40 text-center bg-red-50/40">
                <ExcelCell row={row} />
              </div>
              <div className="p-4 border-b border-border/40 text-center bg-green-50/40">
                <MetrikaCell row={row} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
