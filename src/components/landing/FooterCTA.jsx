import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { APP_URL } from '@/lib/links';

export default function FooterCTA() {
  return (
    <section className="relative pt-20 pb-0 lg:pt-32 lg:pb-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-background to-blue-50/60" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[140px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Узнайте, сколько вы{' '}
            <span className="gradient-bp-text">реально зарабатываете</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Перейдите в сервис, загрузите отчёты вручную и получите аналитику бесплатно.
            Заявка и ручное одобрение больше не нужны.
          </p>
          <Button
            asChild
            size="lg"
            className="gradient-bp hover:opacity-90 text-white font-bold text-lg px-10 py-7 rounded-full shadow-lg shadow-purple-300/30 hover:shadow-purple-400/40 transition-all border-0"
          >
            <a href={APP_URL}>
              Перейти в сервис
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative mt-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main footer grid */}
          <div className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Brand column */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Logo className="w-7 h-7" />
                <span className="font-inter font-bold text-sm text-foreground">Маркетплейс Метрика</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Аналитика для селлеров<br />Wildberries и Ozon.<br />Без Excel. За 1 минуту.
              </p>
            </div>

            {/* Analytics links */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Аналитика</p>
              <div className="flex flex-col gap-2">
                <Link to="/analytics-marketplaces" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Аналитика маркетплейсов</Link>
                <Link to="/analytics-wildberries" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Аналитика Wildberries</Link>
                <Link to="/analytics-ozon" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Аналитика Ozon</Link>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Бесплатный доступ</a>
              </div>
            </div>

            {/* Legal links */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Документы</p>
              <div className="flex flex-col gap-2">
                <Link to="/offer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Публичная оферта</Link>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Политика конфиденциальности</Link>
                <Link to="/personal-data" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Обработка персональных данных</Link>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Условия использования</Link>
                <Link to="/refund" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Политика возвратов</Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="py-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center">
              © 2026 Маркетплейс Метрика. Все права защищены.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
