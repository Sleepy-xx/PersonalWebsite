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
    // 1. 视口容器
    // 只设置上下的内边距 (pt-60, pb-15) 用于留出顶部和底部的空间
    // 自身不设左右 padding
    <div className="min-h-screen bg-[#121212] flex justify-center items-start pt-[60px] pb-[15px]">
      
      {/* 2. 核心布局容器 */}
      {/* 宽度强制为 1200px (max-w-[1200px]) */}
      {/* 关键点：这里没有 p-4 或 px-4，完全靠 gap-[25px] 来控制间距 */}
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-[25px] px-4 lg:px-0">
        
        {/* 3. 左侧 Sidebar */}
        <aside className="w-full lg:w-auto shrink-0 lg:sticky lg:top-[60px] lg:self-start z-10">
          <ProfileSidebar />
        </aside>

        {/* 4. 右侧 Main Content */}
        {/* 只有在具体的卡片内部，才会有 padding (p-[30px]) */}
        <main className="flex-1 bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] p-[30px] shadow-lg min-w-0">
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {renderContent()}
        </main>
      </div>
    </div>
  );
}