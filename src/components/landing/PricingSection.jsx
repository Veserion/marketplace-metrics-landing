import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Shield, Upload, Zap } from "lucide-react";
import BetaRequestDialog from './BetaRequestDialog';

const betaSteps = [
  {
    icon: Upload,
    title: 'Оставьте заявку',
    text: 'Расскажите, на каких маркетплейсах продаёте и какие отчёты хотите оцифровать в первую очередь.',
  },
  {
    icon: Shield,
    title: 'Мы отберём участников',
    text: 'В бета-тест попадут селлеры, чьи сценарии помогут быстрее проверить продукт на реальных данных.',
  },
  {
    icon: Zap,
    title: 'Получите ранний доступ',
    text: 'Одобренные участники смогут пользоваться сервисом бесплатно во время бета-теста и после релиза сервиса в течение трёх месяцев!',
  },
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
            Идёт набор в бета-тест
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Сейчас мы не продаём подписку, а собираем заявки от селлеров,
            которые хотят первыми проверить аналитику на своих отчётах.
          </p>
        </motion.div>

        {/* Beta steps */}
        <div className="grid md:grid-cols-2 gap-6 mb-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white border border-border p-6 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Upload className="w-4 h-4 text-primary" />
              </div>
              <span className="font-bold text-foreground">Что уже проверяем</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              В бете фокус на понятной оцифровке отчётов и быстрых ответах по прибыли,
              убыточным товарам и динамике продаж.
            </p>
            <ul className="space-y-2 flex-1">
              {['Ключевые показатели прибыли', 'Прибыль по каждому товару', 'Убыточные товары', 'Динамика продаж', 'Учёт налога'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-white border border-primary/20 p-6 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-100 px-2.5 py-1 rounded-full">Ограниченный набор</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <Zap className="w-4 h-4 text-purple-600" />
              </div>
              <span className="font-bold text-foreground">Кого берём в бету</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Нужны продавцы Ozon и Wildberries, готовые загрузить реальные отчёты,
              дать обратную связь и помочь нам довести продукт до публичного запуска.
            </p>
            <ul className="space-y-2 flex-1">
              {['Есть действующий магазин', 'Есть отчёты за последние периоды', 'Готовность проверить расчёты', 'Обратная связь по интерфейсу', 'Интерес к регулярной аналитике'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm text-muted-foreground font-medium">Как попасть в бету</span>
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
                3 месяца бесплатно в подарок
              </div>
              <h3 className="font-inter font-extrabold text-3xl text-foreground">
                Заявка на бета-тест
              </h3>
              <p className="text-sm text-muted-foreground mt-3 max-w-sm mx-auto">
                Мы вручную рассматриваем заявки и открываем доступ тем, кому сервис уже может дать практическую пользу.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {betaSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{step.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <BetaRequestDialog>
              <Button
                size="lg"
                className="w-full gradient-bp hover:opacity-90 text-white font-bold text-base py-6 rounded-full shadow-lg shadow-purple-300/30 border-0"
              >
                Подать заявку на бета-тест
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </BetaRequestDialog>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
