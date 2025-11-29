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
    // 1. 页面容器
    // pt-[60px]: 对应 sidebar 的 padding-top: 60px 预留空间
    <div className="min-h-screen bg-[#0d0d0d] pt-[60px] pb-[15px]">
      
      {/* 2. 主布局容器 (Main) */}
      {/* max-w-[1200px]: 对应 max-width: 1200px */}
      {/* gap-[25px]: 对应 gap: 25px */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[25px] px-4 lg:px-0">
        
        {/* 3. 左侧 Sidebar 区域 */}
        {/* lg:sticky: 对应 position: sticky (仅在大屏生效) */}
        {/* lg:top-[60px]: 对应 top: 60px */}
        {/* z-10: 对应 z-index: 1 */}
        {/* lg:self-start: 关键！防止 flex stretch 导致 sticky 失效 */}
        <div className="lg:sticky lg:top-[60px] lg:self-start z-10 lg:w-[320px] shrink-0">
          <ProfileSidebar />
        </div>

        {/* 4. 右侧内容区域 (Main Content) */}
        {/* flex-1: 占据剩余空间 */}
        <main className="flex-1 bg-[#1a1a1a] rounded-3xl p-6 lg:p-10 min-w-0">
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {renderContent()}
        </main>
      </div>
    </div>
  );
}