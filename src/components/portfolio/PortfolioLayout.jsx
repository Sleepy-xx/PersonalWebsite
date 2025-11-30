import React from 'react';
import ProfileSidebar from '@/components/portfolio/ProfileSidebar';
import NavigationTabs from '@/components/portfolio/NavigationTabs';
import PageTitle from '@/components/PageTitle'; // 1. 引入新组件

export default function PortfolioLayout({ children, title }) {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center isolate">
      <div className="w-full max-w-[1200px] mt-[60px] mb-[15px] mx-auto flex flex-col lg:flex-row gap-6 px-4 lg:px-0">
        
        {/* 左侧 Sidebar */}
        <aside className="w-full bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] lg:w-[350px] shrink-0 lg:sticky lg:top-[60px] lg:self-start z-10 pt-[60px] pl-[30px] pr-[30px] pb-[30px]">
          <ProfileSidebar />
        </aside>

        {/* 右侧 Main Content */}
        <main className="flex-1 bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] p-[30px] shadow-lg min-w-0 relative">
          
          <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 pt-12 lg:pt-0">
            
            {/* 2. 使用 PageTitle 组件替代原来的 h2 */}
            <PageTitle title={title} />

            <NavigationTabs />
          </header>

          <div className="animate-fade-in">
            {children}
          </div>
          
        </main>
      </div>
    </div>
  );
}