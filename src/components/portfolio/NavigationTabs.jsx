import React from 'react';
import { cn } from '@/lib/utils';

// 1. 修改：去掉了 Blog 和 Gallery
const tabs = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'project', label: 'Project' },
];

export default function NavigationTabs({ activeTab, onTabChange }) {
  return (
    <nav
      className={cn(
        // --- 移动端样式 ---
        "fixed bottom-0 left-0 z-50 w-full",
        "bg-[#2b2b2c]/90 backdrop-blur-md",
        "border-t border-white/10 rounded-t-2xl",
        "shadow-lg transition-all duration-300 ease-in-out",

        // --- 桌面端样式 (保持之前的 Tab 形状) ---
        "lg:absolute lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto",
        "lg:w-max lg:h-auto",
        "lg:z-10",
        
        // 背景 & 边框
        "lg:bg-[#2b2b2c]/75 lg:backdrop-blur-md",
        "lg:border lg:border-white/10",
        
        // 核心圆角形状：右上角和左下角圆角
        "lg:rounded-tr-[20px] lg:rounded-bl-[20px] lg:rounded-tl-none lg:rounded-br-none"
      )}
    >
      <ul className={cn(
        "flex flex-wrap justify-center items-center px-4 py-3",
        "lg:px-6 lg:py-4 lg:gap-8" 
      )}>
        {tabs.map((tab) => (
          <li key={tab.id} className="relative group list-none">
            <button
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative block text-sm font-bold transition-colors duration-300",
                "text-[13px] md:text-[15px]",

                activeTab === tab.id
                  ? "text-amber-400" 
                  : "text-gray-400 hover:text-amber-400"
              )}
            >
              {tab.label}
              
              {/* 下划线动画 */}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[2px] bg-amber-400 transition-all duration-300 ease-out",
                activeTab === tab.id ? "w-full" : "w-0 group-hover:w-full"
              )}/>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}