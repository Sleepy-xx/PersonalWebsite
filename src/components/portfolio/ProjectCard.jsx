import React from 'react';

export default function ProjectCard({ 
  title, 
  category, // 新增：分类 (e.g., WEB)
  period,   // 新增：时间 (e.g., Jan 2024 - Present)
  image,    // 图片 URL
  techStack // 新增：技术栈数组 (e.g., ['Next.js', 'React'])
}) {
  
  // 复用 globals.css 中的渐变样式
  const borderGradient = 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)';
  const bgGradient = 'linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251), hsla(240, 2%, 11%, 0)), hsl(240, 2%, 13%)';
  const cardShadow = '0 16px 30px hsla(0, 0%, 0%, 0.25)';

  return (
    // 外层：渐变边框 + 阴影 + Hover 动画
    <div 
      className="group relative rounded-2xl p-[1px] h-full transition-transform duration-300 hover:-translate-y-1"
      style={{ 
        background: borderGradient,
        boxShadow: cardShadow 
      }}
    >
      {/* 内层：深色背景 + 内容 */}
      <div 
        className="rounded-2xl h-full w-full overflow-hidden flex flex-col"
        style={{ background: bgGradient }}
      >
        
        {/* 1. 图片区域 */}
        <div className="relative aspect-video w-full overflow-hidden bg-black/20">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>

        {/* 2. 内容区域 */}
        <div className="p-6 flex flex-col flex-1">
          
          {/* Meta Row: Date & Category */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-xs font-medium tracking-wide">
              {period}
            </span>
            <span className="text-gray-500 text-xs font-bold tracking-wider uppercase">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-6">
            {title}
          </h3>

          {/* Tech Stack Badges */}
          {/* mt-auto 确保无论标题多长，徽章都对齐到底部 */}
          <div className="mt-auto flex flex-wrap gap-2">
            {techStack && techStack.map((tech, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-gray-300 text-xs font-medium hover:bg-white/10 transition-colors cursor-default"
              >
                {/* 这里可以用 switch case 渲染图标，目前先只渲染文字 */}
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}