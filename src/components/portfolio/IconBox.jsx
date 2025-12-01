import React from 'react';
import { cn } from '@/lib/utils';

const IconBox = ({ icon: Icon, className }) => {
  
  // 1. 定义样式变量 (复用 globals.css 的渐变逻辑)
  const borderGradient = 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)';
  const bgGradient = 'linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251), hsla(240, 2%, 11%, 0)), hsl(240, 2%, 13%)';
  const shadow = '-4px 8px 24px hsla(0, 0%, 0%, 0.25)';

  return (
    // 外层：渐变边框 + 阴影
    <div 
      className={cn(
        "relative rounded-xl p-[1px] flex items-center justify-center shrink-0", 
        // 响应式大小：手机端 40px (w-10)，电脑端 48px (w-12)
        "w-10 h-10 md:w-12 md:h-12",
        className
      )}
      style={{ 
        background: borderGradient,
        boxShadow: shadow
      }}
    >
      {/* 内层：深色背景 + 图标 */}
      <div 
        className="w-full h-full rounded-xl flex items-center justify-center text-amber-400"
        style={{ background: bgGradient }}
      >
        {/* 如果传入了图标组件就渲染 */}
        {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6" />}
      </div>
    </div>
  );
};

export default IconBox;