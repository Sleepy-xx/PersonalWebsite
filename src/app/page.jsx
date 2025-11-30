import React from 'react';
import PortfolioLayout from '@/components/portfolio/PortfolioLayout';
import AboutSection from '@/components/portfolio/AboutSection';
import TechStackSection from '@/components/portfolio/TechStackSection';

export default function Page() {
  return (
    <PortfolioLayout title="About Me">
      <div className="space-y-10">
        <AboutSection />
        <TechStackSection />
      </div>
    </PortfolioLayout>
  );
}