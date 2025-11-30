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
        // --- 基础样式 (移动端默认: 对应 .navbar) ---
        "fixed bottom-0 left-0 z-50 w-full",
        "bg-[#2b2b2c]/75 backdrop-blur-md", // 背景色 + 毛玻璃
        "border border-white/10 rounded-t-xl", // 边框 + 顶部圆角
        "shadow-lg transition-all duration-300 ease-in-out",

        // --- 桌面端样式 (对应 @media min-width: 1024px) ---
        "lg:absolute lg:bottom-auto lg:top-0 lg:left-auto lg:right-0",
        "lg:w-max lg:rounded-none lg:rounded-bl-[20px] lg:rounded-tr-[20px]", // 对应 border-radius: 0 20px (CSS中2个值代表: TL/BR=0, TR/BL=20)
        "lg:px-5 lg:border-t-0 lg:border-r-0"
      )}
    >
      <ul className={cn(
        "flex flex-wrap justify-center items-center px-2.5 py-4", // 对应 .navbar-list
        "lg:gap-8 lg:p-0 lg:h-auto lg:py-5" // 桌面端间距调整
      )}>
        {tabs.map((tab) => (
          <li key={tab.id} className="list-none">
            <button
              onClick={() => onTabChange(tab.id)}
              className={cn(
                // --- 链接基础样式 (对应 .navbar-link) ---
                "block text-sm font-medium transition-colors duration-300",
                "hover:text-gray-300/80 focus:text-gray-300/80", // hover 效果
                
                // --- 字体大小响应式 (对应 media queries) ---
                "text-[13px] md:text-[14px] lg:text-[15px]", 

                // --- 激活状态 (对应 .active) ---
                activeTab === tab.id
                  ? "text-amber-400 font-bold" // 对应 var(--orange-yellow-crayola)
                  : "text-gray-300" // 对应普通颜色
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