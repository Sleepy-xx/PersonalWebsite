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
    // 1. 最外层视口容器
    // 使用 flex-col + items-center 替代简单的 block 布局
    // 这样内部元素使用 margin-top 时，不会导致"外边距合并"产生的顶部白条
    <div className="min-h-screen bg-[#121212] flex flex-col items-center isolate">
      
      {/* 2. 核心布局容器 */}
      {/* mt-[60px]: 真正的 Margin，不再是 Padding */}
      {/* w-full max-w-[1200px]: 严格控制宽度 */}
      <div className="w-full max-w-[1200px] mt-[60px] mb-[15px] ml-[414px] mr-[414px] flex flex-col lg:flex-row gap-6 px-4 lg:px-0">
        
        {/* 3. 左侧 Sidebar */}
        <aside className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-[60px] lg:self-start z-10 pt-[60px] pl-[30px] pr-[30px] pb-[30px]">
          <ProfileSidebar />
        </aside>

        {/* 4. 右侧 Main Content */}
        {/* flex-1: 自动填满剩余宽度 */}
        {/* min-w-0: 防止 Flex 子元素溢出 */}
        <main className="flex-1 bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] p-[30px] shadow-lg min-w-0">
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {renderContent()}
        </main>
      </div>
    </div>
  );
}