import React from 'react';
import PortfolioLayout from '@/components/portfolio/PortfolioLayout';
import ResumeSection from '@/components/portfolio/ResumeSection';

export default function ResumePage() {
  return (
    <PortfolioLayout title="Resume">
      <ResumeSection />
    </PortfolioLayout>
  );
}