import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/landing/Logo';
import SiteFooter from '@/components/landing/SiteFooter';
import BetaRequestDialog from '@/components/landing/BetaRequestDialog';

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

const problems = [
  'Отчёты в Excel перегружены и неудобны',
  'Данные разбросаны по разным файлам',
  'Сложно понять реальную прибыль',
  'Уходит много времени на расчёты',
  'Легко допустить ошибку',
];

const withoutAnalytics = [
  'Понимать реальную прибыль',
  'Выявлять убыточные товары',
  'Контролировать расходы',
  'Принимать решения по закупкам',
  'Масштабировать бизнес',
];

const advantages = [
  { num: '1', title: 'Бета-доступ', text: 'Одобренные участники получат 3 месяца бесплатного доступа и смогут повлиять на развитие продукта.' },
  { num: '2', title: 'Только нужные данные', text: 'Мы убрали всё лишнее. Только ключевые показатели, которые реально влияют на прибыль.' },
  { num: '3', title: 'Простота использования', text: 'Не нужно разбираться в Excel, формулах и сложных системах.' },
  { num: '4', title: 'Интуитивный интерфейс', text: 'Понятно с первого взгляда — даже если вы новичок.' },
  { num: '5', title: 'Работа сразу с двумя маркетплейсами', text: 'Аналитика для Wildberries и Ozon в одном месте.' },
];

const results = [
  'Чистую прибыль', 'Выручку', 'Расходы', 'Прибыль по каждому товару',
  'Убыточные позиции', 'Структуру затрат', 'Динамику продаж',
];

export default function AnalyticsMarketplaces() {
  useEffect(() => {
    document.title = 'Аналитика маркетплейсов — контроль прибыли и продаж | Маркетплейс Метрика';
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) { desc = document.createElement('meta'); desc.name = 'description'; document.head.appendChild(desc); }
    desc.setAttribute('content', 'Аналитика маркетплейсов для Ozon и Wildberries. Поймите прибыль, расходы и эффективность товаров без сложных Excel-таблиц.');
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
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-300/10 blur-[100px]" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6">
                Аналитика маркетплейсов
              </span>
              <h1 className="font-inter font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Аналитика маркетплейсов: как перестать терять прибыль{' '}
                <span className="gradient-bp-text">и начать управлять цифрами</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                В современном рынке маркетплейсов выигрывает не тот, у кого больше товаров, а тот, кто лучше понимает цифры.
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

        {/* Abstract chart illustration */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-white p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-100/30" />
            <div className="relative flex flex-col items-center gap-4">
              <div className="flex items-end gap-3 h-32">
                {[40, 65, 50, 80, 60, 95, 75, 88, 70, 100, 85, 92].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="w-5 rounded-t-md"
                    style={{ background: `linear-gradient(180deg, hsl(${225 - i * 3}, 80%, 55%) 0%, hsl(${270 - i * 2}, 70%, 55%) 100%)` }}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Динамика прибыли по месяцам</p>
            </div>
          </motion.div>
        </section>

        {/* Problem */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden">
            <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #3B82F6 0%, #7C3AED 100%)' }} />
            <div className="p-8 lg:p-10">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Wildberries и Ozon предоставляют огромные массивы данных: отчёты по продажам, начислениям, логистике, комиссиям, возвратам. Но проблема в том, что эти данные сложно анализировать.
              </p>
              <p className="font-bold text-foreground mb-4">Большинство селлеров сталкиваются с одними и теми же проблемами:</p>
              <div className="space-y-2.5">
                {problems.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{p}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground text-lg">
                В результате бизнес управляется <span className="font-semibold text-foreground">«на ощущениях»</span>, а не на основе цифр.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Why analytics critical */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden">
            <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #7C3AED 0%, #DB2777 100%)' }} />
            <div className="p-8 lg:p-10">
              <h2 className="font-inter font-extrabold text-2xl sm:text-3xl text-foreground mb-4">
                Почему аналитика маркетплейсов критически важна
              </h2>
              <p className="text-muted-foreground mb-5">Без системной аналитики невозможно:</p>
              <div className="space-y-2.5 mb-6">
                {withoutAnalytics.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-red-500 text-xs font-bold">✕</span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-foreground font-bold text-lg">
                Если вы не видите точные цифры по каждому товару — вы не управляете бизнесом.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Advantages */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-inter font-extrabold text-3xl sm:text-4xl text-foreground">
              Решение: простая аналитика без лишнего
            </h2>
            <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
              Маркетплейс Метрика — это инструмент, который превращает сложные отчёты маркетплейсов в понятную аналитику. Наш подход отличается от большинства решений на рынке.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((a, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-xl gradient-bp flex items-center justify-center mb-4 text-white font-bold text-sm">
                  {a.num}
                </div>
                <h3 className="font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-3xl bg-white border border-border shadow-sm overflow-hidden">
            <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #3B82F6 0%, #7C3AED 50%, #DB2777 100%)' }} />
            <div className="p-8 lg:p-10">
              <h2 className="font-inter font-extrabold text-2xl sm:text-3xl text-foreground mb-6">Что вы получаете</h2>
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

        {/* Conclusion + CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Аналитика маркетплейсов — это не дополнительный инструмент. Это основа управления бизнесом.
            </p>
            <p className="text-foreground font-bold text-xl mb-8">
              Чем раньше вы начнёте видеть реальные цифры — тем быстрее начнёте зарабатывать больше.
            </p>
            <BetaRequestDialog>
              <Button size="lg" className="gradient-bp hover:opacity-90 text-white font-bold px-10 py-6 rounded-full shadow-lg border-0">
                Подать заявку на бета-тест
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </BetaRequestDialog>
          </motion.div>
        </section>

        {/* Related links */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/analytics-wildberries" className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
              <span className="font-semibold text-foreground">Аналитика Wildberries</span>
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
