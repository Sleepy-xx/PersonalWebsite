import React, { Suspense } from 'react'; // 1. 引入 Suspense
import Home from '@/components/portfolio/Home';

export default function Page() {
  return (
    // 2. 用 Suspense 包裹 Home 组件
    // fallback 是加载时的占位符，通常一闪而过
    <Suspense fallback={<div className="min-h-screen bg-[#121212]" />}>
      <Home />
    </Suspense>
  );
}