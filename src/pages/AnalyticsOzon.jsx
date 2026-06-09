import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/landing/Logo';
import SiteFooter from '@/components/landing/SiteFooter';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { APP_URL } from '@/lib/links';
import { setPageSeo } from '@/lib/seo';

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

const chartData = [
  { name: 'Кроссовки', profit: 4200 }, { name: 'Футболка', profit: 2800 },
  { name: 'Джинсы', profit: -340 }, { name: 'Рюкзак', profit: 1560 },
  { name: 'Кепка', profit: -120 }, { name: 'Куртка', profit: 5100 },
];

const ozonCosts = [
  'Комиссии', 'Логистику', 'Эквайринг', 'Возвраты', 'Акции', 'Дополнительные расходы',
];

const toGetRealProfit = [
  'Собрать данные из разных файлов',
  'Правильно их объединить',
  'Учитывать все расходы',
  'Не допустить ошибок',
];

const withoutAnalytics = [
  'Невозможно оценить эффективность товаров',
  'Сложно масштабировать бизнес',
  'Легко терять прибыль',
];

const results = [
  'Чистую прибыль', 'Выручку', 'Расходы', 'Прибыль по товарам', 'Убыточные позиции', 'Динамику',
];

export default function AnalyticsOzon() {
  useEffect(() => {
    setPageSeo({
      title: 'Аналитика Ozon — контроль прибыли и продаж | Маркетплейс Метрика',
      description: 'Аналитика Ozon для селлеров. Поймите прибыль и расходы без сложных отчётов и Excel.',
      path: '/analytics-ozon',
      type: 'article',
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <Logo className="w-8 h-8" />
            <span className="font-inter font-bold text-base text-foreground">Маркетплейс Метрика</span>
          </Link>
          <Button asChild className="gradient-bp hover:opacity-90 text-white font-semibold px-6 rounded-full shadow-sm border-0 text-sm">
            <a href={APP_URL}>Войти в сервис</a>
          </Button>
        </div>
      </nav>

      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-300/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px]" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-sm mb-6">
                Ozon
              </span>
              <h1 className="font-inter font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Аналитика Ozon: как понять{' '}
                <span className="gradient-bp-text">реальные цифры бизнеса</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                Ozon предоставляет селлерам подробные отчёты, но работать с ними сложно. Все данные находятся в разных отчётах и не дают единой картины.
              </p>
              <Button asChild size="lg" className="gradient-bp hover:opacity-90 text-white font-bold px-8 py-6 rounded-full shadow-lg border-0">
                <a href={APP_URL}>
                  Перейти в сервис
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Chart */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-3xl bg-white border border-border shadow-xl p-8">
            <h3 className="font-bold text-foreground mb-1">Прибыль по товарам</h3>
            <p className="text-sm text-muted-foreground mb-6">Пример расчёта на тестовых данных магазина Ozon</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 25%, 90%)" />
                <XAxis dataKey="name" stroke="hsl(220, 20%, 60%)" fontSize={11} />
                <YAxis stroke="hsl(220, 20%, 60%)" fontSize={12} />
                <Tooltip
                  contentStyle={{ background: '#fff', border: '1px solid hsl(220,25%,88%)', borderRadius: '8px' }}
                  formatter={v => [`₽ ${v.toLocaleString()}`, 'Прибыль']}
                />
                <Bar dataKey="profit" radius={[6, 6, 0, 0]}>
                  {chartData.map((entry, i) => (
                    <Cell key={i} fill={entry.profit >= 0 ? 'hsl(225, 80%, 55%)' : 'hsl(0, 80%, 60%)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </section>

        {/* What seller must account for */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden">
            <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #3B82F6, #7C3AED)' }} />
            <div className="p-8 lg:p-10">
              <h2 className="font-inter font-extrabold text-2xl sm:text-3xl text-foreground mb-4">
                Что нужно учитывать селлеру Ozon
              </h2>
              <p className="text-muted-foreground text-lg mb-5">Селлеру нужно учитывать:</p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {ozonCosts.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Difficulty + Why important */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden">
              <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #7C3AED, #DB2777)' }} />
              <div className="p-7">
                <h2 className="font-inter font-extrabold text-xl text-foreground mb-4">В чём сложность</h2>
                <p className="text-muted-foreground text-sm mb-4">Чтобы получить реальную прибыль, нужно:</p>
                <div className="space-y-2.5">
                  {toGetRealProfit.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-foreground font-semibold text-sm">Это занимает много времени и требует навыков.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden">
              <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #DB2777, #7C3AED)' }} />
              <div className="p-7">
                <h2 className="font-inter font-extrabold text-xl text-foreground mb-4">Почему это важно</h2>
                <p className="text-muted-foreground text-sm mb-4">Без точной аналитики:</p>
                <div className="space-y-2.5">
                  {withoutAnalytics.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution + results */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden">
            <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #3B82F6 0%, #7C3AED 50%, #DB2777 100%)' }} />
            <div className="p-8 lg:p-10">
              <h2 className="font-inter font-extrabold text-2xl sm:text-3xl text-foreground mb-4">Решение</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Маркетплейс Метрика упрощает аналитику Ozon. Вы загружаете отчёты — и получаете:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {results.map((r, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground font-medium">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-muted-foreground text-lg mb-2">Аналитика Ozon — это основа роста.</p>
            <p className="text-foreground font-bold text-xl mb-8">
              Чем быстрее вы начнёте видеть реальные цифры, тем быстрее начнёте зарабатывать больше.
            </p>
            <Button asChild size="lg" className="gradient-bp hover:opacity-90 text-white font-bold px-10 py-6 rounded-full shadow-lg border-0">
              <a href={APP_URL}>
                Перейти в сервис
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </section>

        {/* Related */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/analytics-marketplaces" className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
              <span className="font-semibold text-foreground">Аналитика маркетплейсов</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link to="/analytics-wildberries" className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
              <span className="font-semibold text-foreground">Аналитика Wildberries</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
