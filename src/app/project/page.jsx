import React from 'react';
import PortfolioLayout from '@/components/portfolio/PortfolioLayout';
import ProjectsSection from '@/components/portfolio/ProjectsSection';

export default function ProjectPage() {
  return (
    <PortfolioLayout title="Projects">
      <ProjectsSection />
    </PortfolioLayout>
  );
}