import React from 'react';
import { cn } from '@/lib/utils';

export default function PageTitle({ title, className }) {
  return (
    <h2 
      className={cn(
        // --- 1. 基础文字样式 (对应 .pageTitle) ---
        "relative text-white font-semibold capitalize",
        "text-2xl md:text-3xl", // var(--fs-1) 对应的大小
        "mb-[30px]",            // margin-bottom: 30px
        
        // --- 2. 响应式内边距 (对应 padding-bottom) ---
        "pb-[7px]",             // 默认 padding-bottom: 7px
        "md:pb-[15px]",         // @media 580px: padding-bottom: 15px
        "lg:pb-[20px]",         // @media 768px: padding-bottom: 20px
        
        className
      )}
    >
      {title}

      {/* --- 3. 底部装饰线 (对应 .pageTitle::after) --- */}
      <span 
        className={cn(
          "absolute bottom-0 left-0 rounded-[3px]",
          
          // 颜色 (对应 var(--text-gradient-yellow))
          // 这里使用近似的黄橙渐变
          "bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c]",
          
          // 响应式尺寸 (对应 width/height)
          "w-[30px] h-[3px]",   // 默认大小
          "md:w-[40px] md:h-[5px]" // @media 580px 大小
        )}
      />
    </h2>
  );
}