import React from 'react';
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    q: 'Нужно ли разбираться в Excel?',
    a: 'Нет, совсем не нужно. Вы просто загружаете отчёты из маркетплейса, а сервис автоматически строит аналитику. Никаких формул и таблиц.',
  },
  {
    q: 'Нужно ли подключать API?',
    a: 'Нет, на этапе бета-тестирования API-интеграция не обязательна. Достаточно скачать стандартные отчёты из личного кабинета маркетплейса и загрузить их в сервис.',
  },
  {
    q: 'Подходит ли сервис новичкам?',
    a: 'Да, сервис подходит всем — от начинающих селлеров до опытных продавцов. Интерфейс максимально простой и понятный.',
  },
  {
    q: 'Какие маркетплейсы поддерживаются?',
    a: 'Сейчас поддерживаются Ozon и Wildberries. В ближайшем будущем планируется добавить Яндекс Маркет.',
  },
  {
    q: 'Как часто обновляются оцифровки?',
    a: 'Оцифровки обновляются каждые 1.5 месяца. Мы постоянно улучшаем алгоритмы аналитики.',
  },
  {
    q: 'Сколько стоит участие в бета-тесте?',
    a: 'Пока идёт бета-тест, сервисом можно пользоваться бесплатно. После публичного релиза условия подписки объявим отдельно.',
  },
  {
    q: 'Нужно ли ждать одобрения?',
    a: 'Нет, доступ открыт для всех пользователей на время бета-теста. Просто переходите в сервис, загружайте отчёты и проверяйте аналитику.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Частые вопросы
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {questions.map((item, i) => (
              <AccordionItem
                key={i}
                value={`q-${i}`}
                className="border border-border rounded-xl px-6 bg-white data-[state=open]:border-primary/30 transition-colors shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
