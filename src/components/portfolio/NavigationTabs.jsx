"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 使用路径钩子
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'about', label: 'About', path: '/' }, // 首页即 About
  { id: 'resume', label: 'Resume', path: '/resume' },
  { id: 'project', label: 'Project', path: '/project' },
];

export default function NavigationTabs() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 z-50 w-full bg-[#2b2b2c]/90 backdrop-blur-md border-t border-white/10 rounded-t-2xl shadow-lg transition-all duration-300 ease-in-out",
        "lg:absolute lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto lg:w-max lg:h-auto lg:z-10",
        "lg:bg-[#2b2b2c]/75 lg:backdrop-blur-md lg:border lg:border-white/10",
        "lg:rounded-tr-[20px] lg:rounded-bl-[20px] lg:rounded-tl-none lg:rounded-br-none"
      )}
    >
      <ul className={cn(
        "flex flex-wrap justify-center items-center px-4 py-3",
        "lg:px-6 lg:py-4 lg:gap-8" 
      )}>
        {tabs.map((tab) => {
          // 判断当前路径是否匹配
          // 首页 '/' 需要精确匹配，其他页面只需以路径开头即可（处理子路由）
          const isActive = tab.path === '/' 
            ? pathname === '/' 
            : pathname.startsWith(tab.path);

          return (
            <li key={tab.id} className="relative group list-none">
              <Link
                href={tab.path}
                className={cn(
                  "relative block text-sm font-bold transition-colors duration-300",
                  "text-[13px] md:text-[15px]",
                  isActive ? "text-amber-400" : "text-gray-400 hover:text-amber-400"
                )}
              >
                {tab.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-amber-400 transition-all duration-300 ease-out",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )}/>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}