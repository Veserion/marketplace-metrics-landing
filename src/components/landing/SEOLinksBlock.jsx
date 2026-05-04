import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2 } from 'lucide-react';

const links = [
  { to: '/analytics-marketplaces', label: 'Аналитика маркетплейсов', desc: 'Полная картина бизнеса на Ozon и WB' },
  { to: '/analytics-wildberries', label: 'Аналитика Wildberries', desc: 'Чистая прибыль по каждому артикулу WB' },
  { to: '/analytics-ozon', label: 'Аналитика Ozon', desc: 'Прибыль по товарам с учётом FBO/FBS' },
];

export default function SEOLinksBlock() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-4">
            <BarChart2 className="w-4 h-4" />
            Полезные материалы
          </div>
          <h2 className="font-inter font-extrabold text-2xl sm:text-3xl text-foreground mb-3">
            Почему аналитика маркетплейсов важна
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Без аналитики невозможно понять, какие товары зарабатывают, а какие работают в убыток. 
            Читайте подробнее по площадкам.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={link.to}
                className="group flex flex-col gap-2 p-5 rounded-2xl border border-border bg-background hover:bg-white hover:border-primary/30 hover:shadow-md transition-all h-full"
              >
                <span className="font-bold text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                <span className="text-sm text-muted-foreground flex-1">{link.desc}</span>
                <div className="flex items-center gap-1 text-sm text-primary font-medium mt-1">
                  Читать <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}