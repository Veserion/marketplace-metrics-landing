import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, Zap, Shield, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/landing/Logo';
import ImageUploadBox from '@/components/landing/ImageUploadBox';
import SiteFooter from '@/components/landing/SiteFooter';

const basicFeatures = [
  { text: 'Ключевые показатели прибыли', ok: true },
  { text: 'Прибыль по каждому товару', ok: true },
  { text: 'Убыточные товары', ok: true },
  { text: 'Динамика продаж', ok: true },
  { text: 'Поддержка Ozon и Wildberries', ok: true },
  { text: 'Учёт налога', ok: true },
  { text: 'Загрузка отчётов вручную (период — 1 месяц)', ok: true },
  { text: 'Расширенные категории движения финансов', ok: false },
  { text: 'Тонкая настройка под ваши задачи', ok: false },
  { text: 'Подключение через API', ok: false },
  { text: 'Любой период отчётности', ok: false },
];

const proFeatures = [
  { text: 'Ключевые показатели прибыли', ok: true },
  { text: 'Прибыль по каждому товару', ok: true },
  { text: 'Убыточные товары', ok: true },
  { text: 'Динамика продаж', ok: true },
  { text: 'Поддержка Ozon и Wildberries', ok: true },
  { text: 'Учёт налога', ok: true },
  { text: 'Расширенные категории движения финансов', ok: true },
  { text: 'Тонкая настройка под ваши задачи', ok: true },
  { text: 'Подключение через API', ok: true },
  { text: 'Любой период отчётности', ok: true },
  { text: 'Приоритетная поддержка', ok: true },
];

function FeatureRow({ text, ok }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${ok ? 'bg-primary/10' : 'bg-muted'}`}>
        {ok
          ? <Check className="w-3 h-3 text-primary" />
          : <X className="w-3 h-3 text-muted-foreground/50" />}
      </div>
      <span className={`text-sm ${ok ? 'text-foreground' : 'text-muted-foreground/50 line-through'}`}>{text}</span>
    </div>
  );
}

export default function Plans() {
  return (
    <div className="min-h-screen bg-background font-inter">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6">
              <Zap className="w-4 h-4" />
              Тарифные планы
            </div>
            <h1 className="font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
              Выберите свой тариф
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Два варианта подписки — для старта и для профессионального роста. Оба с 7-дневным бесплатным пробным периодом.
            </p>
          </motion.div>

          {/* Plans grid */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 items-stretch">

            {/* Basic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col flex-1">
                <div className="h-1.5 w-full flex-shrink-0" style={{ background: 'linear-gradient(90deg, #3B82F6, #7C3AED)' }} />
                <div className="p-7 lg:p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-4">
                      <Upload className="w-3 h-3" />
                      Базовый
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black gradient-bp-text">550</span>
                      <span className="text-xl font-bold text-muted-foreground">₽/мес</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Самое необходимое для понимания вашей отчётности. Загрузка отчётов вручную за период до 1 месяца.
                    </p>
                  </div>

                  <div className="space-y-3 flex-1">
                    {basicFeatures.map((f, i) => <FeatureRow key={i} {...f} />)}
                  </div>

                  <div className="mt-7">
                    <Button
                      size="lg"
                      className="w-full gradient-bp hover:opacity-90 text-white font-bold rounded-full border-0"
                    >
                      Начать бесплатно
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">7 дней бесплатно · доступ через Telegram-бот</p>
                  </div>
                </div>
              </div>

              {/* Screenshot placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border bg-white">
                <div className="px-5 pt-5 pb-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Интерфейс базового тарифа</p>
                </div>
                <ImageUploadBox
                  src="/screenshots/basic-plan-interface.png"
                  label="Скриншот базового тарифа"
                  hint="Загрузите скриншот интерфейса базового тарифа · 1200×700"
                  className="min-h-[200px] rounded-none shadow-none"
                />
              </div>
            </motion.div>

            {/* Pro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <div className="relative flex flex-col flex-1">
                <div className="absolute -inset-1 bg-primary/15 rounded-3xl blur-xl pointer-events-none" />
                <div className="relative bg-white rounded-2xl border border-primary/30 shadow-xl overflow-hidden flex flex-col flex-1">
                  <div className="h-1.5 w-full flex-shrink-0" style={{ background: 'linear-gradient(90deg, #7C3AED, #DB2777)' }} />
                  <div className="p-7 lg:p-8 flex flex-col flex-1">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          <Zap className="w-3 h-3" />
                          Профессиональный
                        </div>
                        <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-600 border border-amber-100 px-2.5 py-1 rounded-full text-xs font-semibold">
                          Скоро
                        </div>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-black gradient-bp-text">—</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Расширенная аналитика со всеми категориями движения финансов. Подключение через API — без ограничений по периоду отчётности.
                      </p>
                    </div>

                    <div className="space-y-3 flex-1">
                      {proFeatures.map((f, i) => <FeatureRow key={i} {...f} />)}
                    </div>

                    <div className="mt-7">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full rounded-full font-bold border-primary/30 text-primary hover:bg-primary/5"
                      >
                        Узнать о запуске
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-3">Профессиональный тариф в разработке</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Screenshot placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border bg-white">
                <div className="px-5 pt-5 pb-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Интерфейс профессионального тарифа</p>
                </div>
                <ImageUploadBox
                  src="/screenshots/pro-plan-interface.png"
                  label="Скриншот профессионального тарифа"
                  hint="Загрузите скриншот интерфейса профессионального тарифа · 1200×700"
                  className="min-h-[200px] rounded-none shadow-none"
                />
              </div>
            </motion.div>
          </div>

          {/* Comparison note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-10 rounded-2xl bg-white border border-border p-6 lg:p-8 flex flex-col sm:flex-row gap-5 items-start"
          >
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">7 дней бесплатного доступа на каждом тарифе</p>
              <p className="text-sm text-muted-foreground">
                Попробуйте любой тариф без оплаты. Отмена в любой момент через Telegram-бот. Никаких скрытых платежей.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
