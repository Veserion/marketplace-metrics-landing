import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileSpreadsheet, Plug, Clock, Upload, ImagePlus, X } from "lucide-react";
import { motion } from "framer-motion";
import HeroBackground from './HeroBackground';

export default function HeroSection() {
  const [heroImg, setHeroImg] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setHeroImg(URL.createObjectURL(file));
  };

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
                Для продавцов Ozon и Wildberries
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
              Загрузите 2 отчёта из Ozon или Wildberries
              и получите полный контроль прибыли магазина.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap items-center justify-center gap-3 mt-8"
            >
              {[
                { icon: FileSpreadsheet, text: 'Без сложностей с Excel' },
                { icon: Plug, text: 'В 2 клика' },
                { icon: Clock, text: 'Триал & гарантия качества' },
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
              <a href="#pricing">
                <Button
                    size="lg"
                    className="gradient-bp hover:opacity-90 text-white font-bold text-base px-8 py-6 rounded-full shadow-lg shadow-purple-300/30 hover:shadow-purple-400/40 transition-all duration-300 border-0"
                >
                  Попробовать бесплатно
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
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
            <div className="relative rounded-2xl overflow-hidden border-2 border-dashed border-primary/30 shadow-2xl shadow-primary/10 bg-white min-h-[300px]">
              {heroImg ? (
                  <div className="relative group">
                    <img
                        src={heroImg}
                        alt="Маркетплейс Метрика — аналитический дашборд"
                        className="w-full h-auto"
                    />
                    <button
                        onClick={() => setHeroImg(null)}
                        className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5 shadow opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4 text-foreground" />
                    </button>
                  </div>
              ) : (
                  <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-full min-h-[300px] flex flex-col items-center justify-center gap-3 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors p-12"
                  >
                    <ImagePlus className="w-12 h-12 opacity-40" />
                    <span className="text-base font-medium">Нажмите, чтобы загрузить скриншот дашборда</span>
                    <span className="text-sm opacity-60">PNG, JPG — рекомендуемый размер 1200×700</span>
                  </button>
              )}
              <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
              />
            </div>
          </motion.div>
        </div>
      </section>
  );
}