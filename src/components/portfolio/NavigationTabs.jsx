import React from 'react';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'project', label: 'Project' }, // ✅ 加回 Project
  // gallery 已删除
];

export default function NavigationTabs({ activeTab, onTabChange }) {
  return (
    <nav className="flex justify-end mb-10">
      <div className="flex gap-1 bg-[#1e1e1e] rounded-xl p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300",
              activeTab === tab.id
                ? "text-white border-b-2 border-amber-400"
                : "text-gray-400 hover:text-white"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}