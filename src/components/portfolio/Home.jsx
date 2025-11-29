import React, { useState } from 'react';
import ProfileSidebar from '@/components/portfolio/ProfileSidebar';
import NavigationTabs from '@/components/portfolio/NavigationTabs';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import BlogSection from '@/components/portfolio/BlogSection';
import TechStackSection from '@/components/portfolio/TechStackSection';
import ResumeSection from '@/components/portfolio/ResumeSection';
import GallerySection from '@/components/portfolio/GallerySection';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <>
            <AboutSection />
            <ProjectsSection />
            <BlogSection />
            <TechStackSection />
          </>
        );
      case 'resume':
        return <ResumeSection />;
      case 'project':
        return <ProjectsSection />;
      case 'blog':
        return <BlogSection />;
      case 'gallery':
        return <GallerySection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] p-4 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="lg:sticky lg:top-8 lg:self-start">
          <ProfileSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 bg-[#1a1a1a] rounded-3xl p-6 lg:p-10">
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {renderContent()}
        </main>
      </div>
    </div>
  );
}