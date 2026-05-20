"use client";
import React from 'react';
import NavigationTabs from '@/components/portfolio/NavigationTabs'; // 确保路径正确

export default function DetailNavigation({ className }) {
  return (
    <div className={className}>
      <NavigationTabs />
    </div>
  );
}
