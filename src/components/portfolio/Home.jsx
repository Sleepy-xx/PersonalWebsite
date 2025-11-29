"use client";
import React, { useState } from 'react';
import ProfileSidebar from '@/components/portfolio/ProfileSidebar';
import NavigationTabs from '@/components/portfolio/NavigationTabs';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection'; // ✅ 确保引入 Project
import TechStackSection from '@/components/portfolio/TechStackSection';
import ResumeSection from '@/components/portfolio/ResumeSection';
// ❌ GallerySection 的引入已删除

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-16">
            <AboutSection />
            {/* ✅ About 页面只留简介和技术栈，不显示 Project */}
            <TechStackSection />
          </div>
        );
      case 'resume':
        return <ResumeSection />;
      case 'project':
        return <ProjectsSection />; // ✅ 恢复 Project 独立页面
      default:
        return <AboutSection />;
    }
  };

  return (
    // 1. 外层：去掉默认的 p-4 lg:p-8，确保背景铺满
    <div className="min-h-screen bg-[#0d0d0d]">
      
      {/* 2. 主容器：严格按照图片参数设置 */}
      <div className="max-w-[1200px] mx-auto mt-[60px] mb-[15px] flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar */}
        <div className="lg:sticky lg:top-8 lg:self-start">
          <ProfileSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 bg-[#1a1a1a] rounded-3xl p-6 lg:p-10">
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {renderContent()}
        </main>
      </div>
    </div>
  );
}