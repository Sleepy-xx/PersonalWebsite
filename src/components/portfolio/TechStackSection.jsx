import React from 'react';
import { Zap, Cloud, Brain, Code, Terminal } from 'lucide-react'; // 引入 Zap 图标

// 图标映射
const categoryIcons = {
  cloud: Cloud,
  ai: Brain,
  dev: Code,
};

// 数据 (保持不变)
const techStack = {
  cloud: [ 
    { name: 'AWS Lambda', color: 'bg-orange-500' },
    { name: 'API Gateway', color: 'bg-red-400' },
    { name: 'Amazon Bedrock', color: 'bg-blue-600' },
    { name: 'S3', color: 'bg-green-600' },
    { name: 'CloudWatch', color: 'bg-pink-600' },
    { name: 'Linux', color: 'bg-yellow-600' },
    { name: 'Git', color: 'bg-gray-600' },
  ],
  ai: [ 
    { name: 'RAG Architecture', color: 'bg-purple-500' },
    { name: 'Prompt Eng.', color: 'bg-indigo-500' },
    { name: 'Vector Embeddings', color: 'bg-teal-500' },
    { name: 'Python (Boto3)', color: 'bg-yellow-500 text-black' },
    { name: 'Pandas', color: 'bg-blue-900' },
  ],
  dev: [ 
    { name: 'React.js', color: 'bg-cyan-400' },
    { name: 'Node.js', color: 'bg-green-500' },
    { name: 'Go (Golang)', color: 'bg-cyan-600' },
    { name: 'Java', color: 'bg-red-600' },
    { name: 'C++', color: 'bg-blue-700' },
    { name: 'SQL', color: 'bg-gray-500' },
  ],
};

export default function TechStackSection() {
  
  // 1. 定义来自 globals.css 的渐变变量
  const borderGradient = 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)';
  const bgGradient = 'linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251), hsla(240, 2%, 11%, 0)), hsl(240, 2%, 13%)';
  const cardShadow = '0 16px 30px hsla(0, 0%, 0%, 0.25)';

  return (
    <div className="space-y-6">
      {/* 这是一个占位符，调整顶部间距 */}
      <div className="h-0 lg:h-10 hidden lg:block" /> 
      
      {Object.entries(techStack).map(([category, techs]) => {
        // 映射标题，这里你可以自定义
        const titles = { cloud: 'cloud & devops', ai: 'ai & data', dev: 'frontend & backend' };
        
        return (
          // --- 卡片外层：渐变边框 ---
          <div 
            key={category} 
            className="relative rounded-2xl p-[1px] group transition-transform duration-300 hover:-translate-y-1"
            style={{ 
              background: borderGradient,
              boxShadow: cardShadow
            }}
          >
            {/* --- 卡片内层：深色背景 + 内容 --- */}
            <div 
              className="rounded-2xl p-6 h-full w-full"
              style={{ background: bgGradient }}
            >
              
              {/* 1. 标题区域 (参考图片: 闪电图标 + 小写标题) */}
              <div className="flex items-center gap-3 mb-6">
                {/* 闪电图标 */}
                <Zap className="w-5 h-5 text-white" />
                <h3 className="text-base font-bold text-white tracking-wide">
                  {titles[category] || category}
                </h3>
              </div>

              {/* 2. 徽章区域 (参考图片: Flex 布局 + 胶囊样式) */}
              <div className="flex flex-wrap gap-2.5">
                {techs.map((tech) => (
                  <div 
                    key={tech.name} 
                    // 胶囊样式：深色背景 + 细边框 + 圆角
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-default"
                  >
                    {/* 保留你原来的颜色点，作为一个小装饰 */}
                    <div className={`w-1.5 h-1.5 rounded-full ${tech.color.split(' ')[0]}`} />
                    
                    <span className="text-gray-200 text-xs font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}