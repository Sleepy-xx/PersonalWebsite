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
    // 1. 视口容器：flex justify-center 实现整体居中
    // pt-[60px] pb-[15px]: 保持上下的间距
    <div className="min-h-screen bg-[#121212] flex justify-center items-start pt-[60px] pb-[15px]">
      
      {/* 2. 核心布局容器：宽度死锁为 1200px */}
      {/* max-w-[1200px]: 限制最大宽度，配合 justify-center 自然形成左右约 400px+ 的留白 (Margin) */}
      {/* gap-[25px]: 强制拉开左栏和右栏的距离，解决"连在一起"的问题 */}
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-[25px] px-4 lg:px-0">
        
        {/* 3. 左侧 Sidebar：固定宽度 */}
        {/* w-full lg:w-auto: 移除之前的 width:25% 限制，让它由内容或固定值决定 */}
        {/* shrink-0: 防止被右侧挤压 */}
        <aside className="w-full lg:w-[280px] xl:w-[300px] shrink-0 lg:sticky lg:top-[60px] lg:self-start z-10">
          <ProfileSidebar />
        </aside>

        {/* 4. 右侧 Main Content：自动填满剩余空间 */}
        {/* flex-1: 占据除去 Sidebar 和 Gap 后的所有空间，不再强制 w-[75%] 导致溢出 */}
        <main className="flex-1 bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] p-[30px] shadow-lg min-w-0">
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {renderContent()}
        </main>
      </div>
    </div>
  );
}