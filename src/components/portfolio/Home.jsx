"use client";
import React, { useState } from 'react';
import ProfileSidebar from '@/components/portfolio/ProfileSidebar';
import NavigationTabs from '@/components/portfolio/NavigationTabs';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import TechStackSection from '@/components/portfolio/TechStackSection';
import ResumeSection from '@/components/portfolio/ResumeSection';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-10">
            <AboutSection />
            <TechStackSection />
          </div>
        );
      case 'resume':
        return <ResumeSection />;
      case 'project':
        return <ProjectsSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex justify-center items-start pt-[60px] pb-[15px]">
      
      {/* 主布局容器 - 强制 1200px 宽度并居中 */}
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-6 px-4 lg:px-0">
        
        {/* 左侧 Sidebar - 固定宽度 280px */}
        <aside className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-[60px] lg:self-start z-10">
          <ProfileSidebar />
        </aside>

        {/* 右侧 Main Content - 自动填满剩余空间 */}
        <main className="flex-1 bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] p-[30px] shadow-lg min-w-0">
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {renderContent()}
        </main>
      </div>
    </div>
  );
}