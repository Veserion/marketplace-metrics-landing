import React, { useEffect } from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import PainSection from '../components/landing/PainSection';
import HowItWorks from '../components/landing/HowItWorks';
import InterfaceShowcase from '../components/landing/InterfaceShowcase';
import FeaturesGrid from '../components/landing/FeaturesGrid';
import ComparisonTable from '../components/landing/ComparisonTable';
import MarketplaceComparisonSection from '../components/landing/MarketplaceComparisonSection';
import WildberriesSection from '../components/landing/WildberriesSection';
import StorySection from '../components/landing/StorySection';
import PricingSection from '../components/landing/PricingSection';
import GuaranteeSection from '../components/landing/GuaranteeSection';
import FAQSection, { faqQuestions } from '../components/landing/FAQSection';
import FooterCTA from '../components/landing/FooterCTA';
import SEOLinksBlock from '../components/landing/SEOLinksBlock';
import { DEFAULT_SEO, SITE_URL, setJsonLd, setPageSeo } from '@/lib/seo';

export default function Landing() {
  useEffect(() => {
    setPageSeo({
      title: DEFAULT_SEO.title,
      description: DEFAULT_SEO.description,
      path: '/',
    });

    setJsonLd('home', [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Маркетплейс Метрика',
        url: SITE_URL,
        logo: `${SITE_URL}/marketplace-metrics-logo.svg`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Маркетплейс Метрика',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: SITE_URL,
        description: DEFAULT_SEO.description,
        inLanguage: 'ru-RU',
        audience: {
          '@type': 'Audience',
          audienceType: 'Продавцы Ozon и Wildberries',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqQuestions.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <HeroSection />
      <PainSection />
      <HowItWorks />
      <InterfaceShowcase />
      <FeaturesGrid />
      <WildberriesSection />
      <ComparisonTable />
      <MarketplaceComparisonSection />
      <StorySection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <SEOLinksBlock />
      <FooterCTA />
    </div>
  );
}
