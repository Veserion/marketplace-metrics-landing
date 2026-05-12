export default function Logo({ className = "w-8 h-8" }) {
  const logoSrc = `${import.meta.env.BASE_URL}marketplace-metrics-logo.svg`;

  return (
    <img
      src={logoSrc}
      alt="Маркетплейс Метрика"
      className={className}
    />
  );
}
