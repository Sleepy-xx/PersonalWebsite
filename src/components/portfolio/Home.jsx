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
    // 页面背景色: var(--smoky-black) -> #121212
    <div className="min-h-screen bg-[#121212] flex justify-center items-start pt-[15px] pb-[15px]">
      
      {/* 主布局容器 */}
      {/* 对应 globals.css 中 main 和 article 的响应式宽度逻辑 */}
      <div className={`
        relative mx-[12px] transition-all duration-300 ease-in-out
        
        /* < 580px: 宽度 100% */
        w-full
        
        /* ≥ 580px: 宽度 520px, 居中 */
        min-[580px]:w-[520px] min-[580px]:mx-auto
        
        /* ≥ 768px: 宽度 700px */
        md:w-[700px]
        
        /* ≥ 1024px: 宽度 950px */
        lg:w-[950px]
        
        /* ≥ 1250px: 双栏布局的核心断点 */
        /* max-width: 1200px, flex布局, stretch对齐, gap 25px */
        min-[1250px]:w-full min-[1250px]:max-w-[1200px]
        min-[1250px]:flex min-[1250px]:justify-center min-[1250px]:items-stretch min-[1250px]:gap-[25px]
        
        /* 非双栏模式下的垂直间距 */
        flex flex-col gap-[30px] min-[1250px]:flex-row
      `}>
        
        {/* 左侧 Sidebar */}
        <aside className={`
          w-full shrink-0
          
          /* ≥ 1250px Sidebar 样式 */
          /* position: sticky, top: 60px, padding-top: 60px */
          min-[1250px]:w-auto min-[1250px]:sticky min-[1250px]:top-[60px] 
          min-[1250px]:pt-[60px] min-[1250px]:h-max min-[1250px]:z-10
        `}>
          <ProfileSidebar />
        </aside>

        {/* 右侧 Main Content */}
        <main className={`
          bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] p-[15px] shadow-lg
          
          /* ≥ 580px: padding: 30px */
          min-[580px]:p-[30px]
          
          /* ≥ 1250px: 宽度 75% */
          w-full min-[1250px]:w-[75%] min-[1250px]:min-w-[75%] min-[1250px]:m-0
        `}>
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {renderContent()}
        </main>
      </div>
    </div>
  );
}