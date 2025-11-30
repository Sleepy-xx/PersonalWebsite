"use client";
import React, { useState, useEffect } from 'react'; 
import { useSearchParams } from 'next/navigation';
import ProfileSidebar from '@/components/portfolio/ProfileSidebar';
import NavigationTabs from '@/components/portfolio/NavigationTabs';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import TechStackSection from '@/components/portfolio/TechStackSection';
import ResumeSection from '@/components/portfolio/ResumeSection';

export default function Home() {
  const searchParams = useSearchParams();
  
  // --- 修改开始：直接在初始化时读取 URL ---
  const [activeTab, setActiveTab] = useState(() => {
    // 1. 尝试获取 URL 里的 tab 参数
    const tabParam = searchParams.get('tab');
    // 2. 如果参数有效（是 about/resume/project 之一），就直接用它做初始值
    // 3. 否则默认回退到 'about'
    if (tabParam && ['about', 'resume', 'project'].includes(tabParam)) {
      return tabParam;
    }
    return 'about';
  });
  // --- 修改结束 ---

  // 保留 useEffect 以处理浏览器的“后退/前进”按钮
  useEffect(() => {
    const tab = searchParams.get('tab');
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
        
        <aside className="w-full bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] lg:w-[350px] shrink-0 lg:sticky lg:top-[60px] lg:self-start z-10 pt-[60px] pl-[30px] pr-[30px] pb-[30px]">
          <ProfileSidebar />
        </aside>

        <main className="flex-1 bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] p-[30px] shadow-lg min-w-0 relative">
          
          {/* Header 区域 */}
          <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            
            <h2 className="text-3xl font-bold text-white relative pl-5">
              <span className="absolute left-0 top-1 h-7 w-1.5 bg-amber-400 rounded-sm"></span>
              {getPageTitle()}
            </h2>

            <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          
          </header>

          <div className="animate-fade-in">
            {renderContent()}
          </div>
          
        </main>
      </div>
    </div>
  );
}