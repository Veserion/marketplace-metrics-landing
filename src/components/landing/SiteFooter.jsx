import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Logo className="w-7 h-7" />
              <span className="font-inter font-bold text-sm text-foreground">Маркетплейс Метрика</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Аналитика для селлеров<br />Wildberries и Ozon.<br />Без Excel. За 1 минуту.
            </p>
          </div>

          {/* Analytics */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Аналитика</p>
            <div className="flex flex-col gap-2">
              <Link to="/analytics-marketplaces" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Аналитика маркетплейсов</Link>
              <Link to="/analytics-wildberries" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Аналитика Wildberries</Link>
              <Link to="/analytics-ozon" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Аналитика Ozon</Link>
              <Link to="/plans" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Тарифные планы</Link>
            </div>
          </div>

          {/* Legal */}
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

        <div className="py-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 Маркетплейс Метрика. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}