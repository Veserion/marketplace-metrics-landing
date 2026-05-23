export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer?.push?.({
    event: eventName,
    ...params,
  });

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  if (typeof window.ym === 'function' && window.YA_METRIKA_ID) {
    window.ym(window.YA_METRIKA_ID, 'reachGoal', eventName, params);
  }
}
