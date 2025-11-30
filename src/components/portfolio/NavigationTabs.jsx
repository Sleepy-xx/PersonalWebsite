import React from 'react';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'project', label: 'Project' },
];

export default function NavigationTabs({ activeTab, onTabChange }) {
  return (
    <nav
      className={cn(
        // --- 1. 移动端样式 (保持不变：固定在底部) ---
        "fixed bottom-0 left-0 z-50 w-full",
        "bg-[#2b2b2c]/75 backdrop-blur-md",
        "border-t border-white/10 rounded-t-xl",
        "shadow-lg transition-all duration-300 ease-in-out",

        // --- 2. 桌面端样式 (关键修改) ---
        // 重置定位属性，取消 fixed
        "lg:static lg:w-auto lg:bg-transparent lg:shadow-none lg:border-none lg:rounded-none",
        
        // 核心魔法：使用 float-right 让它浮动到父容器的右侧
        // 这样它下方的 "About Me" 标题会自动流向左侧，形成并排效果
        "lg:float-right lg:clear-none",
        
        // 微调位置，确保视觉上与标题对齐
        "lg:mt-1" 
      )}
    >
      <ul className={cn(
        "flex flex-wrap justify-center items-center px-2.5 py-4",
        // 桌面端：消除内边距，让它紧贴右上角
        "lg:p-0 lg:gap-6"
      )}>
        {tabs.map((tab) => (
          <li key={tab.id} className="list-none">
            <button
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "block text-sm font-medium transition-colors duration-300",
                "hover:text-amber-400/80 focus:text-amber-400/80",
                "text-[13px] md:text-[14px] lg:text-[15px]",

                activeTab === tab.id
                  ? "text-amber-400 font-bold"
                  : "text-gray-300"
              )}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}