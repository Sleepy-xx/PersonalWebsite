import React from 'react';
import Link from 'next/link'; // 引入 Link

export default function ProjectCard({ 
  title, 
  category, 
  period, 
  image, 
  techStack,
  slug // 接收 slug 参数
}) {
  
  const borderGradient = 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)';
  const bgGradient = 'linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251), hsla(240, 2%, 11%, 0)), hsl(240, 2%, 13%)';
  const cardShadow = '0 16px 30px hsla(0, 0%, 0%, 0.25)';

  return (
    // 使用 Link 包裹，href 指向详情页路由
    <Link href={`/project/${slug}`} className="block h-full">
      <div 
        className="group relative rounded-2xl p-[1px] h-full transition-transform duration-300 hover:-translate-y-1"
        style={{ 
          background: borderGradient,
          boxShadow: cardShadow 
        }}
      >
        <div 
          className="rounded-2xl h-full w-full overflow-hidden flex flex-col"
          style={{ background: bgGradient }}
        >
          
          {/* 1. 图片区域 */}
          <div className="relative h-48 w-full overflow-hidden shrink-0 bg-black/20">
            <img 
              src={image} 
              alt={title} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

          {/* 2. 内容区域 */}
          <div className="p-6 flex flex-col flex-1">
            
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                {period}
              </span>
              <span className="text-gray-500 text-xs font-bold tracking-wider uppercase">
                {category}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-6 line-clamp-1" title={title}>
              {title}
            </h3>

            <div className="mt-auto flex flex-wrap gap-2">
              {techStack && techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-gray-300 text-xs font-medium hover:bg-white/10 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
}