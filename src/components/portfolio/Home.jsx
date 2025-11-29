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
    // 1. 页面背景与基础外边距
    // 移动端默认外边距: 15px 12px (m-[15px_12px])
    <div className="min-h-screen bg-[#0d0d0d] overflow-x-hidden flex justify-center items-start pt-[15px] pb-[15px]">
      
      {/* 2. 主容器 (Main Container) */}
      <div className={`
        /* 基础设置 */
        relative mx-[12px] flex flex-col transition-all duration-300 ease-in-out
        
        /* < 580px: 宽度 100% (默认) */
        w-full
        
        /* 580px - 767px: 宽度 520px, 居中 */
        min-[580px]:w-[520px] min-[580px]:mx-auto
        
        /* 768px - 1023px: 宽度 700px */
        md:w-[700px]
        
        /* 1024px - 1249px: 宽度 950px */
        lg:w-[950px]
        
        /* ≥ 1250px: 双栏并排模式 */
        /* 宽度 auto (被 max-w-1200 限制), Gap 25px */
        min-[1250px]:w-full min-[1250px]:max-w-[1200px]
        min-[1250px]:flex-row min-[1250px]:items-stretch min-[1250px]:gap-[25px]
        
        /* 中间态垂直间距 30px (当不是双栏时) */
        gap-[30px] min-[1250px]:gap-[25px]
      `}>
        
        {/* 3. 左侧 Sidebar 区域 */}
        <aside className={`
          /* 移动端: 宽度 100% */
          w-full shrink-0
          
          /* ≥ 1250px: Sticky 定位, 宽度自适应 (auto), Top 60px */
          min-[1250px]:w-auto min-[1250px]:sticky min-[1250px]:top-[60px] 
          min-[1250px]:h-max min-[1250px]:z-10 min-[1250px]:self-start
        `}>
          <ProfileSidebar />
        </aside>

        {/* 4. 右侧内容区域 (Main Content) */}
        <main className={`
          /* 基础样式 */
          bg-[#1e1e1e] rounded-3xl border border-white/10 p-6 lg:p-10 shadow-2xl
          
          /* ≥ 1250px: 占据 75% 宽度 */
          w-full min-[1250px]:w-[75%] min-[1250px]:min-w-[75%]
        `}>
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {renderContent()}
        </main>
      </div>
    </div>
  );
}