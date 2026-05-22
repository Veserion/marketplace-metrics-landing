import React from 'react';
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
import FAQSection from '../components/landing/FAQSection';
import FooterCTA from '../components/landing/FooterCTA';
import SEOLinksBlock from '../components/landing/SEOLinksBlock';

export default function Landing() {
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
