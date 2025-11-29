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
    // 1. 外层容器：设置为 Flex 布局
    // 作用：防止内部的 margin-top 穿透导致顶部白条，同时铺满黑色背景
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center">
      
      {/* 2. 主布局容器：严格还原截图参数 */}
      {/* w-full max-w-[1200px]: 对应宽度 1200 */}
      {/* mt-[60px]: 对应 margin-top 60 */}
      {/* mb-[15px]: 对应 margin-bottom 15 */}
      {/* padding 为 0 (默认就是0，不加 px 类即可) */}
      <div className="w-full max-w-[1200px] mt-[60px] mb-[15px] flex flex-col lg:flex-row gap-[25px]">
        
        {/* 3. 左侧 Sidebar */}
        {/* 保持 sticky 定位，top-8 或 top-[60px] 可根据视觉微调，这里设为 0 或 60 均可，配合 margin 60 使用 */}
        <div className="lg:sticky lg:top-0 lg:self-start z-10 lg:w-[320px] shrink-0">
          <ProfileSidebar />
        </div>

        {/* 4. 右侧 Content */}
        <main className="flex-1 bg-[#1a1a1a] rounded-3xl p-6 lg:p-10 min-w-0">
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {renderContent()}
        </main>
      </div>
    </div>
  );
}