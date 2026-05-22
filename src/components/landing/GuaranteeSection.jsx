import React from 'react';
import { motion } from "framer-motion";
import { ShieldCheck, Lock } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl bg-white border border-border shadow-sm"
          >
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground mb-2">Ранний доступ без оплаты</h3>
              <p className="text-muted-foreground leading-relaxed">
                Сейчас сервис проходит бета-тест на реальных сценариях продавцов.
                Мы отбираем участников вручную, чтобы собрать обратную связь про работу сервиса и сделать его максимально комфортным и функциональным для вас!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl bg-white border border-border shadow-sm"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground mb-2">Ваши данные в безопасности</h3>
              <p className="text-muted-foreground leading-relaxed">
                Все данные пользователей хранятся на защищённом сервере и остаются
                абсолютно конфиденциальными. Мы не передаём и не продаём информацию третьим лицам.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
