"use client";
import React, { useState } from 'react';
import ProfileSidebar from '@/components/portfolio/ProfileSidebar';
import NavigationTabs from '@/components/portfolio/NavigationTabs';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import BlogSection from '@/components/portfolio/BlogSection';
import TechStackSection from '@/components/portfolio/TechStackSection';
import ResumeSection from '@/components/portfolio/ResumeSection';
import GallerySection from '@/components/portfolio/GallerySection';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-16">
            {/* 1. 个人简介 (全宽) */}
            <AboutSection />
            
            {/* 2. 精选项目 (全宽) */}
            <ProjectsSection />
            
            {/* 3. 左右布局区域：左边是博客，右边是技术栈 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 左侧：文章列表 (占据 2/3 宽度) */}
              <div className="lg:col-span-2">
                <BlogSection />
              </div>

              {/* 右侧：技术栈卡片 (占据 1/3 宽度) */}
              <div className="lg:col-span-1">
                <TechStackSection />
              </div>
            </div>
          </div>
        );
      case 'resume':
        return <ResumeSection />;
      case 'project':
        return <ProjectsSection />;
      case 'blog':
        return <BlogSection />;
      case 'gallery':
        return <GallerySection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] p-4 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
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