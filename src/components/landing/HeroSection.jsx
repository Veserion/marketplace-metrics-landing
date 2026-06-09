import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileSpreadsheet, Plug, Clock } from "lucide-react";
import { motion } from "framer-motion";
import HeroBackground from './HeroBackground';
import ImageUploadBox from './ImageUploadBox';
import { APP_URL } from '@/lib/links';

export default function HeroSection() {
  return (
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <HeroBackground />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-1.5 bg-primary/10 text-primary border-primary/20 rounded-full font-medium text-sm hover:bg-primary/10">
                Бесплатный доступ открыт
              </Badge>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-inter font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-foreground"
            >
              Полная аналитика{' '}
              <span className="gradient-bp-text">
              вашего магазина
            </span>
              <br />
              за 1 минуту
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Загружайте отчёты вручную и бесплатно получайте аналитику магазина.
              API-подключение и полноценная интеграция с Ozon сейчас в разработке и будут доступны позже.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap items-center justify-center gap-3 mt-8"
            >
              {[
                { icon: FileSpreadsheet, text: 'Без сложностей с Excel' },
                { icon: Plug, text: 'API в разработке' },
                { icon: Clock, text: 'Бесплатно на старте' },
              ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
              ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-10"
            >
              <Button
                  asChild
                  size="lg"
                  className="gradient-bp hover:opacity-90 text-white font-bold text-base px-8 py-6 rounded-full shadow-lg shadow-purple-300/30 hover:shadow-purple-400/40 transition-all duration-300 border-0"
              >
                <a href={APP_URL}>
                  Перейти в сервис
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Dashboard screenshot */}
          <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="mt-16 lg:mt-20 relative max-w-5xl mx-auto"
          >
            <div className="absolute -inset-3 bg-primary/10 rounded-2xl blur-2xl" />
            <ImageUploadBox
              src="/screenshots/dashboard_wb_full.png"
              label="Скриншот дашборда"
              hint="PNG, JPG — рекомендуемый размер 1200×700"
              className="relative rounded-2xl border-primary/30 shadow-2xl shadow-primary/10 md:min-h-[300px]"
              imageClassName="h-auto"
            />
          </motion.div>
        </div>
      </section>
  );
}
