import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UploadCloud, BarChart3, TrendingUp, Package, DollarSign, ArrowRight, CheckCircle2 } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  { day: '1', revenue: 12400 }, { day: '5', revenue: 18200 }, { day: '10', revenue: 15800 },
  { day: '15', revenue: 24500 }, { day: '20', revenue: 21300 }, { day: '25', revenue: 28900 },
  { day: '30', revenue: 32100 },
];

const productsData = [
  { name: 'Кроссовки Nike', profit: 4200, margin: 18 },
  { name: 'Футболка Polo', profit: 2800, margin: 22 },
  { name: 'Джинсы Levis', profit: -340, margin: -3 },
  { name: 'Рюкзак North', profit: 1560, margin: 15 },
  { name: 'Кепка Adidas', profit: -120, margin: -5 },
];

export default function DemoSection() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Попробуйте демо{' '}
            <span className="gradient-bp-text">прямо сейчас</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Посмотрите, как выглядит аналитика на реальных данных. Это только часть возможностей.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showDemo ? (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-xl mx-auto"
            >
              <div
                onClick={() => setShowDemo(true)}
                className="cursor-pointer border-2 border-dashed border-border rounded-2xl p-16 text-center hover:border-primary/50 hover:bg-primary/3 transition-all group bg-background"
              >
                <UploadCloud className="w-16 h-16 text-muted-foreground mx-auto mb-4 group-hover:text-primary transition-colors" />
                <p className="text-lg font-semibold text-foreground mb-2">Запустите демо в один клик</p>
                <p className="text-sm text-muted-foreground">Мы покажем аналитику на тестовых данных</p>
              </div>
              <div className="text-center mt-6">
                <Button
                  onClick={() => setShowDemo(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 shadow-md"
                >
                  Попробовать демо
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="demo"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Выручка', value: '₽ 842,300', icon: TrendingUp, change: '+12%' },
                  { label: 'Чистая прибыль', value: '₽ 168,460', icon: DollarSign, change: '+8%' },
                  { label: 'Заказов', value: '1,247', icon: Package, change: '+15%' },
                  { label: 'Средний чек', value: '₽ 675', icon: BarChart3, change: '+3%' },
                ].map((kpi, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-5 rounded-xl bg-background border border-border shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <kpi.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{kpi.change}</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{kpi.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Chart */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 rounded-xl bg-background border border-border shadow-sm"
                >
                  <h3 className="font-bold text-foreground mb-4">Динамика продаж</h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <AreaChart data={salesData}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(225, 80%, 55%)" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="hsl(225, 80%, 55%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 25%, 90%)" />
                      <XAxis dataKey="day" stroke="hsl(220, 20%, 60%)" fontSize={12} />
                      <YAxis stroke="hsl(220, 20%, 60%)" fontSize={12} />
                      <Tooltip
                        contentStyle={{ background: '#fff', border: '1px solid hsl(220, 25%, 88%)', borderRadius: '8px', color: 'hsl(222, 47%, 15%)' }}
                        formatter={(val) => [`₽ ${val.toLocaleString()}`, 'Выручка']}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="hsl(225, 80%, 55%)" fill="url(#colorRevenue)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </motion.div>

                {/* Products */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="p-6 rounded-xl bg-background border border-border shadow-sm"
                >
                  <h3 className="font-bold text-foreground mb-4">Прибыль по товарам</h3>
                  <div className="space-y-3">
                    {productsData.map((p, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                        <div className="flex items-center gap-2">
                          {p.profit > 0
                            ? <CheckCircle2 className="w-4 h-4 text-green-500" />
                            : <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                                <span className="text-red-500 text-xs font-bold">!</span>
                              </div>
                          }
                          <span className="text-sm text-foreground">{p.name}</span>
                        </div>
                        <div className="text-right">
                          <span className={`text-sm font-semibold ${p.profit > 0 ? 'text-green-600' : 'text-red-500'}`}>
                            {p.profit > 0 ? '+' : ''}{p.profit.toLocaleString()} ₽
                          </span>
                          <span className="text-xs text-muted-foreground ml-2">({p.margin}%)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground mb-4">Это только часть возможностей сервиса</p>
                <a href="#pricing">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 shadow-md">
                    Получить полный доступ
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}