import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Shield, Upload, Zap } from "lucide-react";
import { Link } from 'react-router-dom';

const features = [
  'Полная аналитика магазина',
  'Прибыль по каждому товару',
  'Убыточные товары',
  'Динамика продаж',
  'Рекомендации по поставкам',
  'Поддержка Ozon и Wildberries',
  'Учёт налога',
  'Обновления каждые 1.5 месяца',
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Два тарифа — один правильный выбор
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Начните с базового или сразу выбирайте профессиональный
          </p>
        </motion.div>

        {/* Two plan cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10 items-stretch">
          {/* Basic card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-background border border-border p-6 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Upload className="w-4 h-4 text-primary" />
              </div>
              <span className="font-bold text-foreground">Базовый</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Самая необходимая выжимка для понимания отчётности. Загрузка отчётов вручную за период до 1 месяца.
            </p>
            <ul className="space-y-2 flex-1">
              {['Ключевые показатели прибыли', 'Прибыль по каждому товару', 'Убыточные товары', 'Динамика продаж', 'Учёт налога'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="pt-4 flex items-baseline gap-1 border-t border-border mt-4">
              <span className="text-4xl font-black gradient-bp-text">550</span>
              <span className="text-base font-bold text-muted-foreground">₽/мес</span>
            </div>
          </motion.div>

          {/* Pro card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-background border border-primary/20 p-6 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-100 px-2.5 py-1 rounded-full">Скоро</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <Zap className="w-4 h-4 text-purple-600" />
              </div>
              <span className="font-bold text-foreground">Профессиональный</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Расширенная аналитика со всеми категориями движения финансов. Подключение через API — без ограничений по периоду.
            </p>
            <ul className="space-y-2 flex-1">
              {['Всё из базового тарифа', 'Все категории движения финансов', 'Тонкая настройка под ваши задачи', 'Подключение через API', 'Любой период отчётности'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-border mt-4">
              <span className="text-sm text-muted-foreground">Цена — по запросу</span>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-10">
          <Link to="/plans" className="text-sm text-primary underline underline-offset-4 hover:opacity-80 transition-opacity font-medium">
            Подробное сравнение тарифов →
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm text-muted-foreground font-medium">Начните с базового прямо сейчас</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="relative max-w-xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-primary/15 rounded-3xl blur-xl" />
          <div className="relative bg-white rounded-2xl border border-primary/20 shadow-xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 border border-green-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                7 дней бесплатно
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-7xl font-black gradient-bp-text">
                  550
                </span>
                <span className="text-2xl font-bold text-muted-foreground">₽/мес</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Дешевле чашки кофе — 30 дней полной аналитики
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{f}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full gradient-bp hover:opacity-90 text-white font-bold text-base py-6 rounded-full shadow-lg shadow-purple-300/30 border-0"
            >
              Начать бесплатный триал
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              После регистрации вы получите доступ через Telegram-бот
            </p>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Переходя в Telegram, вы принимаете{' '}
              <Link to="/offer" className="underline underline-offset-2 hover:text-foreground transition-colors">условия оферты</Link>
              {' '}и{' '}
              <Link to="/privacy" className="underline underline-offset-2 hover:text-foreground transition-colors">политики конфиденциальности</Link>
            </p>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}