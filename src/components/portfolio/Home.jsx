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
    <div className="min-h-screen bg-[#0d0d0d] flex justify-center items-start pt-[60px] pb-[15px]">
  
  {/* 核心容器：没有 p-4 或 p-8，完全靠 max-w 和 gap */}
  <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-[25px]">
    
    {/* 左侧 Sidebar */}
    {/* 内部才有 padding (p-6) 来撑开文字和边框的距离 */}
    <aside className="lg:w-auto lg:sticky lg:top-[60px] shrink-0">
      <div className="bg-[#1e1e1f] rounded-[20px] p-[30px]"> 
         {/* Sidebar 内容 */}
      </div>
    </aside>

    {/* 右侧 Content */}
    {/* 同样，内部才有 padding */}
    <main className="flex-1 bg-[#1e1e1f] rounded-[20px] p-[30px]">
      {/* Main 内容 */}
    </main>
    
  </div>
</div>
  );
}