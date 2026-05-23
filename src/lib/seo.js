export const SITE_URL = 'https://mmetrika.ru';

export const DEFAULT_SEO = {
  title: 'Маркетплейс Метрика — аналитика Ozon и Wildberries для селлеров',
  description: 'Сервис аналитики для продавцов Ozon и Wildberries. Подайте заявку на бета-тест и получите 3 месяца бесплатного доступа после одобрения.',
  image: `${SITE_URL}/marketplace-metrics-logo.svg`,
};

function upsertMeta(attribute, key, content) {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export function setPageSeo({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  path = '/',
  image = DEFAULT_SEO.image,
  type = 'website',
  noindex = false,
}) {
  const url = `${SITE_URL}${path}`;

  document.documentElement.lang = 'ru';
  document.title = title;

  upsertMeta('name', 'description', description);
  upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
  upsertCanonical(url);

  upsertMeta('property', 'og:type', type);
  upsertMeta('property', 'og:site_name', 'Маркетплейс Метрика');
  upsertMeta('property', 'og:locale', 'ru_RU');
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:image', image);

  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  upsertMeta('name', 'twitter:image', image);
}

export function setJsonLd(id, data) {
  const elementId = `jsonld-${id}`;
  document.getElementById(elementId)?.remove();

  const script = document.createElement('script');
  script.id = elementId;
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
}
