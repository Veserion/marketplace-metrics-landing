import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import ImageUploadBox from './ImageUploadBox';

const platforms = [
  {
    name: 'Wildberries',
    color: 'from-[#CB11AB] to-[#9B0082]',
    textColor: 'text-[#CB11AB]',
    borderColor: 'border-[#CB11AB]/20',
    bgColor: 'bg-[#CB11AB]/5',
    marketplaceLabel: 'Аналитика Wildberries',
    ourLabel: 'Метрика: Wildberries',
    marketplaceHint: 'Скриншот из кабинета WB · рекомендуемый размер 700×450',
    ourHint: 'Наш отчёт по WB · рекомендуемый размер 700×450',
    marketplaceSrc: '/screenshots/wildberries_raw.png',
    ourSrc: '/screenshots/wb_wide.png',
  },
  {
    name: 'Ozon',
    color: 'from-[#005BFF] to-[#7B2FE0]',
    textColor: 'text-[#005BFF]',
    borderColor: 'border-[#005BFF]/20',
    bgColor: 'bg-[#005BFF]/5',
    marketplaceLabel: 'Аналитика Ozon',
    ourLabel: 'Метрика: Ozon',
    marketplaceHint: 'Скриншот из кабинета Ozon · рекомендуемый размер 700×450',
    ourHint: 'Наш отчёт по Ozon · рекомендуемый размер 700×450',
    marketplaceSrc: '/screenshots/ozon_raw.png',
    ourSrc: '/screenshots/ozon_wide.png',
  },
];

const advantages = [
  'Прибыль по каждому товару',
  'Убыточные позиции',
  'Учёт всех комиссий',
  'Рекомендации по поставкам',
];

export default function MarketplaceComparisonSection() {
  return (
      <section className="py-20 lg:py-32 relative overflow-hidden bg-white">
        {/* Gradient background blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Маркетплейс vs{' '}
              <span className="gradient-bp-text">Метрика</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Сравните встроенную аналитику маркетплейсов с тем, что даёт наш сервис.
              Разница очевидна.
            </p>
          </motion.div>

          <div className="space-y-16">
            {platforms.map((platform, pi) => (
                <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pi * 0.1 }}
                >
                  {/* Platform header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`h-8 w-1.5 rounded-full bg-gradient-to-b ${platform.color}`} />
                    <h3 className={`font-bold text-2xl ${platform.textColor}`}>{platform.name}</h3>
                  </div>

                  <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-6 items-start">
                    {/* Marketplace screenshot */}
                    <div className="space-y-2">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${platform.bgColor} border ${platform.borderColor}`}>
                        <span className="text-xs font-semibold text-muted-foreground">Стандартная аналитика</span>
                      </div>
                      <ImageUploadBox
                          src={platform.marketplaceSrc}
                          label={platform.marketplaceLabel}
                          hint={platform.marketplaceHint}
                          className="min-h-[260px]"
                      />
                      <ul className="mt-3 space-y-1.5">
                        {['Базовые графики продаж', 'Нет расчёта прибыли', 'Нет анализа убыточных товаров'].map((con, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="w-4 h-4 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold flex-shrink-0">✕</span>
                              {con}
                            </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow */}
                    <div className="hidden lg:flex items-center justify-center pt-20">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg`}>
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Our screenshot */}
                    <div className="space-y-2">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${platform.color} shadow-sm`}>
                        <Zap className="w-3 h-3 text-white" />
                        <span className="text-xs font-semibold text-white">Маркетплейс Метрика</span>
                      </div>
                      <ImageUploadBox
                          src={platform.ourSrc}
                          label={platform.ourLabel}
                          hint={platform.ourHint}
                          className="min-h-[260px] border-primary/40"
                      />
                      <ul className="mt-3 space-y-1.5">
                        {advantages.map((adv, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-foreground font-medium">
                              <span className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                              {adv}
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}
