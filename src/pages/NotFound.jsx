import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, Home, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="rounded-3xl border border-border bg-white shadow-xl p-8 sm:p-10">
          <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
            <AlertTriangle className="w-7 h-7" />
          </div>

          <p className="text-sm font-semibold text-muted-foreground mb-2">Ошибка навигации</p>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Страница не найдена (404)</h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Похоже, ссылка устарела, содержит опечатку или страница была перемещена.
            Ниже шаги, которые помогут быстро продолжить работу.
          </p>

          <div className="mt-8 rounded-2xl bg-secondary/40 border border-border p-5">
            <p className="text-sm font-semibold text-foreground mb-2">Что можно сделать:</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
              <li>Проверьте адрес в строке браузера и исправьте возможную опечатку.</li>
              <li>Вернитесь на главную и откройте нужный раздел из меню.</li>
              <li>Если ошибка повторяется, свяжитесь с нами и укажите этот адрес:</li>
            </ol>
            <code className="block mt-3 text-xs sm:text-sm bg-white border border-border rounded-lg px-3 py-2 break-all">
              {location.pathname}
            </code>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="gradient-bp text-white font-semibold rounded-full border-0">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                На главную
              </Link>
            </Button>

            <Button asChild variant="outline" className="rounded-full">
              <Link to="/analytics-marketplaces">
                <ArrowLeft className="w-4 h-4 mr-2" />
                К разделам аналитики
              </Link>
            </Button>

            <Button asChild variant="ghost" className="rounded-full">
              <Link to="/offer">
                <LifeBuoy className="w-4 h-4 mr-2" />
                Пользовательское соглашение
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
