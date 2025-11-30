"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import NavigationTabs from '@/components/portfolio/NavigationTabs'; // 确保路径正确

export default function DetailNavigation() {
  const router = useRouter();

  const handleTabChange = (tabId) => {
    // 逻辑：在详情页点击导航栏时
    // 1. 如果点击的是 project，什么都不做（或者跳转回项目列表）
    // 2. 如果点击 about/resume，跳转回主页
    if (tabId !== 'project') {
      router.push('/'); 
    } else {
      router.push('/#project'); // 可选：跳回列表页
    }
  };

  return (
    <NavigationTabs 
      activeTab="project" // 强制高亮 "Project"
      onTabChange={handleTabChange} 
    />
  );
}