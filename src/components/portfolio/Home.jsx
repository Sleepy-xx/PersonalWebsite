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
          <div className="space-y-16">
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
    // 1. 外层：移除 overflow-hidden，将 mt/mb 改为 pt/pb
    // pt-[60px] 替代了原来的 margin-top，pb-[15px] 替代了 margin-bottom
    <div className="min-h-screen bg-[#0d0d0d] pt-[60px] pb-[15px]">
      
      {/* 2. 主容器：移除 mt/mb，保留 max-w 和 mx-auto */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar */}
        {/* 3. 侧边栏：lg:sticky 启用固定，top-8 设置吸顶距离 */}
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