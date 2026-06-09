import React from 'react';
import { motion } from "framer-motion";
import { Download, Upload, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  { icon: Download, label: 'Скачали отчёты', desc: 'из маркетплейса' },
  { icon: Upload, label: 'Загрузили', desc: 'в сервис' },
  { icon: BarChart3, label: 'Получили аналитику', desc: 'за 1 минуту' },
];

export default function SolutionSection() {
  return (
    <section className="py-20 lg:py-32 relative bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Простое решение
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Сервис превращает сложные отчёты маркетплейсов в понятную аналитику.
            Не нужно разбираться в Excel или подключать API: API сейчас в разработке и будет доступно позже.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-background border border-border w-full md:w-64 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{step.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
