import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/landing/Logo';
import SiteFooter from '@/components/landing/SiteFooter';
import BetaRequestDialog from '@/components/landing/BetaRequestDialog';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { setPageSeo } from '@/lib/seo';

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

const chartData = [
  { m: 'Янв', p: 38000 }, { m: 'Фев', p: 52000 }, { m: 'Мар', p: 44000 },
  { m: 'Апр', p: 67000 }, { m: 'Май', p: 58000 }, { m: 'Июн', p: 81000 },
];

const reportProblems = [
  'Сложны для восприятия',
  'Разбиты на несколько файлов',
  'Требуют ручной обработки',
  'Не дают цельной картины бизнеса',
];

const sellerProblems = [
  'Сколько он реально зарабатывает',
  'Какие товары приносят прибыль',
  'Где он теряет деньги',
];

const toGetProfit = [
  'Объединить несколько отчётов',
  'Учесть комиссии',
  'Добавить логистику',
  'Учесть возвраты',
  'Посчитать налоги',
];

const analyticsGives = [
  'Видеть чистую прибыль',
  'Находить убыточные товары',
  'Контролировать расходы',
  'Принимать решения по ассортименту',
  'Оптимизировать бизнес',
];

const steps = [
  'Скачиваете отчёты',
  'Загружаете их',
  'Получаете готовую аналитику',
];

const results = [
  'Прибыль по каждому товару',
  'Общую прибыль',
  'Расходы по категориям',
  'Структуру затрат',
  'Динамику продаж',
];

export default function AnalyticsWildberries() {
  useEffect(() => {
    setPageSeo({
      title: 'Аналитика Wildberries — как понять прибыль магазина | Маркетплейс Метрика',
      description: 'Аналитика Wildberries без Excel. Узнайте прибыль, расходы и эффективность товаров за 1 минуту.',
      path: '/analytics-wildberries',
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
          <BetaRequestDialog>
            <Button className="gradient-bp hover:opacity-90 text-white font-semibold px-6 rounded-full shadow-sm border-0 text-sm">
              Подать заявку
            </Button>
          </BetaRequestDialog>
        </div>
      </nav>

      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-300/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px]" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 font-semibold text-sm mb-6">
                Wildberries
              </span>
              <h1 className="font-inter font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Аналитика Wildberries: почему большинство селлеров{' '}
                <span className="gradient-bp-text">не видят реальную прибыль</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                Wildberries предоставляет селлерам большое количество отчётов: по продажам, начислениям, возвратам, логистике и комиссиям. Но на практике работать с ними непросто.
              </p>
              <BetaRequestDialog>
                <Button size="lg" className="gradient-bp hover:opacity-90 text-white font-bold px-8 py-6 rounded-full shadow-lg border-0">
                  Подать заявку на бета-тест
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </BetaRequestDialog>
            </motion.div>
          </div>
        </section>

        {/* Chart */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-3xl bg-white border border-border shadow-xl p-8">
            <h3 className="font-bold text-foreground mb-1">Динамика чистой прибыли</h3>
            <p className="text-sm text-muted-foreground mb-6">Пример расчёта на тестовых данных магазина WB</p>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="wbGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(270, 70%, 55%)" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="hsl(270, 70%, 55%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 25%, 90%)" />
                <XAxis dataKey="m" stroke="hsl(220, 20%, 60%)" fontSize={12} />
                <YAxis stroke="hsl(220, 20%, 60%)" fontSize={12} tickFormatter={v => `${(v / 1000).toFixed(0)}к`} />
                <Tooltip
                  contentStyle={{ background: '#fff', border: '1px solid hsl(220,25%,88%)', borderRadius: '8px' }}
                  formatter={v => [`₽ ${v.toLocaleString()}`, 'Прибыль']}
                />
                <Area type="monotone" dataKey="p" stroke="hsl(270, 70%, 55%)" fill="url(#wbGrad)" strokeWidth={2.5} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </section>

        {/* Problems block */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden">
              <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #7C3AED, #DB2777)' }} />
              <div className="p-7">
                <h2 className="font-inter font-extrabold text-xl text-foreground mb-4">На практике эти отчёты:</h2>
                <div className="space-y-2.5">
                  {reportProblems.map((p, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden">
              <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #DB2777, #7C3AED)' }} />
              <div className="p-7">
                <h2 className="font-inter font-extrabold text-xl text-foreground mb-4">В результате селлер не понимает:</h2>
                <div className="space-y-2.5">
                  {sellerProblems.map((p, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main problem */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden">
            <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #3B82F6, #7C3AED)' }} />
            <div className="p-8 lg:p-10">
              <h2 className="font-inter font-extrabold text-2xl sm:text-3xl text-foreground mb-4">Главная проблема</h2>
              <p className="text-muted-foreground text-lg mb-5">
                Отчёты Wildberries — это данные, но не аналитика.<br />Чтобы получить реальную картину, нужно:
              </p>
              <div className="space-y-2.5">
                {toGetProfit.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-foreground font-semibold text-lg">Это сложно, долго и требует навыков.</p>
            </div>
          </motion.div>
        </section>

        {/* What analytics gives */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden">
              <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #3B82F6, #7C3AED)' }} />
              <div className="p-7">
                <h2 className="font-inter font-extrabold text-xl text-foreground mb-4">Что даёт аналитика Wildberries</h2>
                <p className="text-muted-foreground text-sm mb-4">Грамотная аналитика позволяет:</p>
                <div className="space-y-2.5">
                  {analyticsGives.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden">
              <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #7C3AED, #DB2777)' }} />
              <div className="p-7">
                <h2 className="font-inter font-extrabold text-xl text-foreground mb-4">Простое решение</h2>
                <p className="text-muted-foreground text-sm mb-4">Маркетплейс Метрика превращает отчёты Wildberries в понятную аналитику. Вы просто:</p>
                <div className="space-y-3">
                  {steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg gradient-bp flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">
                        {i + 1}
                      </div>
                      <span className="text-foreground font-medium text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden">
            <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #3B82F6 0%, #7C3AED 50%, #DB2777 100%)' }} />
            <div className="p-8 lg:p-10">
              <h2 className="font-inter font-extrabold text-2xl sm:text-3xl text-foreground mb-6">Что вы видите</h2>
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
            <p className="text-muted-foreground text-lg mb-2">Без аналитики Wildberries вы работаете вслепую.</p>
            <p className="text-foreground font-bold text-xl mb-8">С аналитикой — вы управляете бизнесом.</p>
            <BetaRequestDialog>
              <Button size="lg" className="gradient-bp hover:opacity-90 text-white font-bold px-10 py-6 rounded-full shadow-lg border-0">
                Подать заявку на бета-тест
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </BetaRequestDialog>
          </motion.div>
        </section>

        {/* Related */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/analytics-marketplaces" className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
              <span className="font-semibold text-foreground">Аналитика маркетплейсов</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link to="/analytics-ozon" className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
              <span className="font-semibold text-foreground">Аналитика Ozon</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
