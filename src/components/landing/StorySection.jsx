import React from 'react';
import { motion } from "framer-motion";
import { Code2, Building2, ShoppingBag, Users } from "lucide-react";

export default function StorySection() {
  return (
    <section id="story" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-gradient-to-tl from-purple-200/20 via-indigo-200/15 to-transparent blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6">
            <Users className="w-4 h-4" />
            Об авторах
          </div>
          <h2 className="font-inter font-extrabold text-3xl sm:text-4xl text-foreground mb-4">
            История создания & об авторах
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Маркетплейс Метрика создана в коллаборации двух людей, которые понимают Wildberries и работу селлеров с разных, но одинаково важных сторон.
          </p>
        </motion.div>

        {/* Two authors */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {/* Author 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden"
          >
            <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #3B82F6 0%, #7C3AED 100%)' }} />
            <div className="p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <p className="font-bold text-foreground text-base leading-tight">Разработчик Wildberries</p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Работает внутри компании и знает платформу не как пользователь — а как человек, который строит её изнутри.
                Понимает структуру отчётов, логику комиссий и расчётов на уровне данных. Видит, где и почему теряется прибыль.
              </p>
              <div className="space-y-2">
                {[
                  'Внутренняя логика данных и отчётов WB',
                  'Реальная структура расчётов и комиссий',
                  'Понимание системы на уровне её создания',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Author 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden"
          >
            <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #7C3AED 0%, #CB11AB 100%)' }} />
            <div className="p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="w-5 h-5 text-purple-600" />
                </div>
                <p className="font-bold text-foreground text-base leading-tight">Селлер с опытом 3+ лет</p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Прошёл весь путь продавца на маркетплейсах: ручной разбор таблиц, непонятные отчёты, нехватка времени.
                Знает на практике, что действительно нужно селлеру для контроля магазина — и чего катастрофически не хватает.
              </p>
              <div className="space-y-2">
                {[
                  'Реальная боль продавца изнутри',
                  'Понимание, что важно для контроля прибыли',
                  'Опыт работы с отчётами каждый день',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Conclusion card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden"
        >
          <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #3B82F6 0%, #7C3AED 50%, #CB11AB 100%)' }} />
          <div className="p-8 lg:p-10 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Данные есть у каждого селлера — но они спрятаны за сложными таблицами и непонятной структурой файлов.
              <span className="text-foreground font-semibold"> Селлерам сложно увидеть полную картину.</span>
            </p>
            <p>
              Именно сочетание технической экспертизы и реального опыта продаж позволило создать продукт, который не просто показывает цифры — а делает аналитику действительно понятной, быстрой и полезной.
            </p>
            <p className="text-foreground font-bold text-xl">
              <span className="gradient-bp-text">Маркетплейс Метрика</span> превращает сырые отчёты WB и Ozon в прозрачную аналитику. Без Excel. Без формул. Без лишних движений. За одну минуту.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}