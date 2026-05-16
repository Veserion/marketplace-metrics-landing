import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  website: '',
};

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? 'https://app.mmetrika.ru/api').replace(/\/$/, '');

function formatRussianPhone(value) {
  const digits = value.replace(/\D/g, '');
  const withoutCountryCode = digits.startsWith('7') || digits.startsWith('8')
    ? digits.slice(1)
    : digits;
  const phoneDigits = withoutCountryCode.slice(0, 10);

  if (!phoneDigits) return '';

  const parts = [
    phoneDigits.slice(0, 3),
    phoneDigits.slice(3, 6),
    phoneDigits.slice(6, 8),
    phoneDigits.slice(8, 10),
  ].filter(Boolean);

  return `+7 ${parts.join(' ')}`;
}

export default function BetaRequestDialog({ children }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const updatePhone = (event) => {
    const phone = formatRussianPhone(event.target.value);
    setForm((current) => ({ ...current, phone }));
  };

  const handleOpenChange = (nextOpen) => {
    setOpen(nextOpen);
    if (!nextOpen) return;
    setStatus('idle');
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/beta-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
          source: window.location.href,
          website: form.website,
        }),
      });

      if (!response.ok) {
        throw new Error('request_failed');
      }

      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
      setError('Не удалось отправить заявку. Проверьте данные и попробуйте ещё раз.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        {status === 'success' ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50">
              <CheckCircle2 className="h-7 w-7 text-green-600" />
            </div>
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl">Заявка отправлена</DialogTitle>
              <DialogDescription className="mx-auto max-w-sm">
                Мы рассмотрим её вручную и свяжемся с вами, если сможем открыть доступ на этапе бета-теста.
              </DialogDescription>
            </DialogHeader>
            <Button
              type="button"
              className="mt-8 rounded-full px-8"
              onClick={() => setOpen(false)}
            >
              Закрыть
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Заявка на бета-тест</DialogTitle>
              <DialogDescription>
                Одобренные участники получат 3 месяца бесплатного доступа к Маркетплейс Метрике.
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={updateField('website')}
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-2">
                <Label htmlFor="beta-name">Имя</Label>
                <Input
                  id="beta-name"
                  name="name"
                  value={form.name}
                  onChange={updateField('name')}
                  placeholder="Как к вам обращаться"
                  required
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="beta-email">Email</Label>
                  <Input
                    id="beta-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField('email')}
                    placeholder="Email для ответа"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="beta-phone">Телефон</Label>
                  <Input
                    id="beta-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={updatePhone}
                    placeholder="+7 000 000 00 00"
                    minLength={16}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="beta-company">Компания или магазин</Label>
                <Input
                  id="beta-company"
                  name="company"
                  value={form.company}
                  onChange={updateField('company')}
                  placeholder="Название магазина или компании"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="beta-message">Комментарий</Label>
                <Textarea
                  id="beta-message"
                  name="message"
                  value={form.message}
                  onChange={updateField('message')}
                  placeholder="На каких маркетплейсах продаёте и что заинтересовало"
                  rows={4}
                  required
                />
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 p-3 text-sm text-red-600">
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === 'loading'}
                className="w-full rounded-full gradient-bp py-6 font-bold text-white shadow-lg shadow-purple-300/30 border-0 hover:opacity-90"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Отправляем
                  </>
                ) : (
                  <>
                    Отправить заявку
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>

              <p className="text-center text-xs leading-relaxed text-muted-foreground">
                Нажимая «Отправить заявку», вы соглашаетесь с{' '}
                <Link
                  to="/personal-data"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  условиями обработки персональных данных
                </Link>
                {' '}и{' '}
                <Link
                  to="/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  политикой конфиденциальности
                </Link>
                .
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
