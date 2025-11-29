import React from 'react';
import { Zap, Database, Server, Layout } from 'lucide-react';

// 定义图标映射，让不同分类显示不同图标
const categoryIcons = {
  frontend: Layout,
  backend: Server,
  database: Database,
};

const techStack = {
  frontend: [
    { name: 'TypeScript', color: 'bg-blue-500' },
    { name: 'React', color: 'bg-cyan-400' },
    { name: 'Next.js', color: 'bg-white' }, // Next.js 通常是黑白的，这里用白色方块
    { name: 'Tailwind CSS', color: 'bg-teal-400' },
    { name: 'Vitest', color: 'bg-yellow-400' },
    { name: 'Shadcn UI', color: 'bg-zinc-400' },
    { name: 'Google Analytics', color: 'bg-orange-400' },
  ],
  backend: [
    { name: 'Python', color: 'bg-yellow-500' },
    { name: 'AWS', color: 'bg-orange-500' },
    { name: 'Django', color: 'bg-green-600' },
    { name: 'Golang', color: 'bg-cyan-500' },
    { name: 'Docker', color: 'bg-blue-500' },
    { name: 'FastAPI', color: 'bg-teal-500' },
    { name: 'GitHub', color: 'bg-gray-600' },
  ],
  database: [
    { name: 'Redis', color: 'bg-red-500' },
    { name: 'Supabase', color: 'bg-emerald-500' },
    { name: 'Firebase', color: 'bg-amber-500' },
    { name: 'DynamoDB', color: 'bg-blue-600' },
  ],
};

export default function TechStackSection() {
  return (
    <div className="space-y-4">
      {/* 这里的 mt-16 是为了和左边的 My Writings 标题对齐，视情况可调整 */}
      <div className="h-0 lg:h-16 hidden lg:block" /> 
      
      {Object.entries(techStack).map(([category, techs]) => {
        // 动态获取图标，默认为 Zap
        const IconComponent = categoryIcons[category] || Zap;

        return (
          <div 
            key={category} 
            className="bg-[#1e1e1e] rounded-3xl p-6 border border-white/5 hover:border-amber-400/30 transition-colors"
          >
            {/* 卡片标题 */}
            <div className="flex items-center gap-2 mb-4 text-gray-400">
              <IconComponent className="w-4 h-4" />
              <span className="text-sm font-mono lowercase font-bold">{category}</span>
            </div>

            {/* 技术列表 - 双列网格 */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-3">
              {techs.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2.5">
                  {/* 模拟 Logo 的彩色方块 */}
                  <div className={`w-2 h-2 rounded-sm shrink-0 ${tech.color}`} />
                  <span className="text-gray-300 text-xs font-medium truncate">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}