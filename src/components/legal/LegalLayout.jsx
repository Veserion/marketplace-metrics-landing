import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '@/components/landing/Logo';
import SiteFooter from '@/components/landing/SiteFooter';

export default function LegalLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <Logo className="w-8 h-8" />
            <span className="font-inter font-bold text-base text-foreground">Маркетплейс Метрика</span>
          </Link>
          <Link to="/" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>
        </div>
      </nav>

      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <h1 className="font-inter font-extrabold text-3xl sm:text-4xl text-foreground mb-3">{title}</h1>
            <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(90deg, #3B82F6, #7C3AED)' }} />
          </div>

          {/* Content */}
          <div className="prose-legal space-y-5">
            {children}
          </div>

          {/* Footer links */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Другие документы:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { to: '/offer', label: 'Оферта' },
                { to: '/privacy', label: 'Конфиденциальность' },
                { to: '/personal-data', label: 'Персональные данные' },
                { to: '/refund', label: 'Возвраты' },
                { to: '/terms', label: 'Условия использования' },
              ].map(link => (
                <Link key={link.to} to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}