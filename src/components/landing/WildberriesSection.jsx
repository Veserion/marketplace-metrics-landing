import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gift, BarChart3, Package, TrendingUp, Star } from 'lucide-react';
import BetaRequestDialog from './BetaRequestDialog';

const wbFeatures = [
  { icon: BarChart3, title: 'Полная аналитика по 1 отчёту', desc: 'Загрузите один файл из кабинета WB — и получите всю картину: выручку, прибыль, комиссии, возвраты.' },
  { icon: Package, title: 'Прибыль по каждому товару', desc: 'Видите, что реально зарабатывает, а что тянет в минус.' },
  { icon: TrendingUp, title: 'Динамика продаж', desc: 'Графики по дням и неделям прямо из одного отчёта — без ручной сборки.' },
];

const abcItems = [
  { group: 'A', label: 'Топ-товары', desc: '80% прибыли магазина', color: 'bg-green-500', textColor: 'text-green-700', bg: 'bg-green-50' },
  { group: 'B', label: 'Стабильные', desc: 'Средний вклад, потенциал роста', color: 'bg-blue-500', textColor: 'text-blue-700', bg: 'bg-blue-50' },
  { group: 'C', label: 'Аутсайдеры', desc: 'Мало прибыли — пора решать', color: 'bg-red-400', textColor: 'text-red-700', bg: 'bg-red-50' },
];

export default function WildberriesSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white">
      {/* Purple gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-gradient-to-r from-purple-300/20 via-indigo-300/20 to-blue-300/20 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {/* WB badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-white font-bold text-sm shadow-lg"
            style={{ background: 'linear-gradient(135deg, #CB11AB 0%, #9B0082 100%)' }}>
            <span className="text-base">🍇</span>
            Wildberries
          </div>

          <h2 className="font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Ozon <span className="text-muted-foreground font-light">и</span>{' '}
            <span className="gradient-bp-text">Wildberries</span>
            <br />в одном сервисе
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Не нужно переключаться между кабинетами. Аналитика по обоим маркетплейсам — в одном месте.
          </p>
        </motion.div>

        {/* WB features grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {wbFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md hover:border-purple-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #CB11AB22 0%, #7C3AED22 100%)' }}>
                <f.icon className="w-6 h-6" style={{ color: '#9B0082' }} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ABC analysis gift block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-purple-200/60 shadow-xl bg-white"
        >
          {/* Gradient header bar */}
          <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #CB11AB 0%, #7C3AED 50%, #3B82F6 100%)' }} />

          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Left: gift badge + text */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-bold text-sm mb-6">
                  <Gift className="w-4 h-4" />
                  Для участников бета-теста
                </div>
                <h3 className="font-inter font-extrabold text-2xl sm:text-3xl text-foreground mb-4">
                  ABC-анализ товаров{' '}
                  <span className="gradient-bp-text">в раннем доступе</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
                  В бете вы сможете загрузить 1 отчёт из Wildberries и получить полную аналитику магазина
                  <strong className="text-foreground"> плюс ABC-анализ</strong>.
                  Сервис автоматически разобьёт все ваши товары на группы по вкладу в прибыль.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    'Автоматическая классификация товаров по прибыли',
                    'Понимаете, на что делать ставку',
                    'Видите, от чего пора отказываться',
                    'Без Excel, без формул — всё сразу',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-foreground">
                      <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <BetaRequestDialog>
                  <Button className="gradient-bp hover:opacity-90 text-white font-bold px-8 py-5 rounded-full shadow-lg shadow-purple-300/30 border-0">
                    Подать заявку на бета-тест
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </BetaRequestDialog>
              </div>

              {/* Right: ABC groups visualization */}
              <div className="lg:w-80 w-full flex-shrink-0">
                <div className="rounded-2xl border border-border bg-background p-6 space-y-3">
                  <p className="font-bold text-foreground text-sm mb-4 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    ABC-анализ товаров
                  </p>
                  {abcItems.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.12 }}
                      className={`flex items-center gap-4 p-4 rounded-xl ${item.bg}`}
                    >
                      <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center text-white font-black text-lg flex-shrink-0`}>
                        {item.group}
                      </div>
                      <div>
                        <p className={`font-bold text-sm ${item.textColor}`}>{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
