import React from 'react';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'project', label: 'Project' },
  // 你可以根据需要添加 Blog 和 Gallery
];

export default function NavigationTabs({ activeTab, onTabChange }) {
  return (
    <nav
      className={cn(
        // --- 1. 移动端样式 (保持不变: 底部固定) ---
        "fixed bottom-0 left-0 z-50 w-full",
        "bg-[#2b2b2c]/90 backdrop-blur-md", //稍微加深一点背景，提高对比度
        "border-t border-white/10 rounded-t-xl",
        "shadow-[0_-4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out",

        // --- 2. 桌面端样式 (完全复刻参考效果) ---
        // 关键点：absolute top-0 right-0
        "lg:absolute lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto",
        "lg:w-max lg:h-auto",
        "lg:bg-transparent lg:border-none lg:shadow-none lg:rounded-none",
        "lg:z-10" // 确保在内容之上
      )}
    >
      <ul className={cn(
        "flex flex-wrap justify-center items-center px-4 py-3",
        // 桌面端布局调整
        "lg:p-6 lg:gap-8" 
      )}>
        {tabs.map((tab) => (
          <li key={tab.id} className="relative group list-none">
            <button
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative block px-2 py-1 text-sm font-bold transition-colors duration-300",
                "text-[13px] md:text-[15px]", // 参考网站的字号

                activeTab === tab.id
                  ? "text-amber-400" // 激活状态颜色
                  : "text-gray-400 hover:text-amber-400" // 未激活状态
              )}
            >
              {tab.label}
              
              {/* --- 新增：复刻参考网站的下划线动画效果 --- */}
              {/* 如果当前是激活状态，显示下划线 */}
              <span className={cn(
                "absolute bottom-0 left-0 h-[2px] bg-amber-400 transition-all duration-300 ease-out",
                activeTab === tab.id ? "w-full" : "w-0 group-hover:w-full"
              )}/>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}