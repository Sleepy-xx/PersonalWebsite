"use client";
import React, { useState, useEffect } from 'react';
import ProfileSidebar from '@/components/portfolio/ProfileSidebar';
import NavigationTabs from '@/components/portfolio/NavigationTabs';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import TechStackSection from '@/components/portfolio/TechStackSection';
import ResumeSection from '@/components/portfolio/ResumeSection';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const searchParams = useSearchParams(); // 3. 获取 URL 参数钩子
  

  // 4. 新增：监听 URL 参数变化，自动切换 Tab
  useEffect(() => {
    const tab = searchParams.get('tab');
    // 如果 URL 里有 tab 参数 (比如 ?tab=project)，就切换过去
    if (tab && ['about', 'resume', 'project'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const getPageTitle = () => {
    switch (activeTab) {
      case 'about': return 'About Me';
      case 'resume': return 'Resume';
      case 'project': return 'Projects';
      default: return 'About Me';
    }
  };

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
    <div className="min-h-screen bg-[#121212] flex flex-col items-center isolate">
      <div className="w-full max-w-[1200px] mt-[60px] mb-[15px] mx-auto flex flex-col lg:flex-row gap-6 px-4 lg:px-0">
        
        {/* Sidebar */}
        <aside className="w-full bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] lg:w-[350px] shrink-0 lg:sticky lg:top-[60px] lg:self-start z-10 pt-[60px] pl-[30px] pr-[30px] pb-[30px]">
          <ProfileSidebar />
        </aside>

        {/* Main Content Container - 对应参考代码的 .main-content */}
        {/* 关键点：relative (为内部的 absolute 导航栏提供定位基准) */}
        <main className="relative flex-1 bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] p-[30px] shadow-lg min-w-0">
          
          {/* 1. Navbar - 对应参考代码的 .navbar */}
          {/* 在桌面端，它会自动飞到 main 的右上角 */}
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          
          {/* 2. Article/Content - 对应参考代码的 <article> */}
          <article className="animate-fade-in pt-2 lg:pt-0"> 
            
            {/* 页面标题 */}
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-white relative inline-block">
                 {getPageTitle()}
                 {/* 参考网站的标题下划线风格 */}
                 <span className="block h-1.5 w-12 bg-amber-400 rounded-sm mt-2"></span>
              </h2>
            </header>

            {/* 内容主体 */}
            {renderContent()}
          </article>
          
        </main>
      </div>
    </div>
  );
}