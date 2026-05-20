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

export default function NavigationTabs({ className }) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "w-full bg-[#2b2b2c]/75 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg transition-all duration-300 ease-in-out",
        "sm:w-max",
        className
      )}
    >
      <ul className={cn(
        "flex flex-nowrap items-center justify-center gap-4 px-4 py-3",
        "sm:gap-6",
        "lg:px-6 lg:gap-8"
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
                  "relative inline-flex min-h-11 min-w-[4.5rem] items-center justify-center px-2 py-2 text-center text-sm font-bold transition-colors duration-300",
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
