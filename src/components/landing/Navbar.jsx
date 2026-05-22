import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from './Logo';
import BetaRequestDialog from './BetaRequestDialog';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Возможности', href: '#features' },
    { label: 'Как работает', href: '#how-it-works' },
    { label: 'История создания', href: '#story' },
    { label: 'Бета-тест', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-border/60'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2.5">
            <Logo className="w-8 h-8" />
            <span className="font-inter font-bold text-base text-foreground">
              Маркетплейс Метрика
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <BetaRequestDialog>
              <Button className="gradient-bp hover:opacity-90 text-white font-semibold px-6 rounded-full shadow-sm border-0">
                Войти в сервис
              </Button>
            </BetaRequestDialog>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <BetaRequestDialog>
                <Button
                  className="w-full gradient-bp hover:opacity-90 text-white font-semibold rounded-full mt-2 border-0"
                  onClick={() => setMobileOpen(false)}
                >
                  Войти в сервис
                </Button>
              </BetaRequestDialog>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
