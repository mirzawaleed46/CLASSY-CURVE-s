
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CollectionsPreview from './CollectionsPreview';
import WhyChooseUs from './WhyChooseUs';
import DisclaimerSection from './DisclaimerSection';
import CTASection from './CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CollectionsPreview />
      <WhyChooseUs />
      <DisclaimerSection />
      <CTASection />
      <Footer />
    </div>
  );
}
