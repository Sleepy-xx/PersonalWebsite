import React from 'react';
import { Cloud, Brain, Code } from 'lucide-react';

const categoryIcons = {
  cloud: Cloud,
  ai: Brain,
  dev: Code,
};

// 
const techStack = {
  cloud: [ // Cloud & DevOps
    { name: 'AWS Lambda', color: 'bg-orange-500' },
    { name: 'API Gateway', color: 'bg-red-400' },
    { name: 'Amazon Bedrock', color: 'bg-blue-600' },
    { name: 'S3', color: 'bg-green-600' },
    { name: 'CloudWatch', color: 'bg-pink-600' },
    { name: 'Linux', color: 'bg-yellow-600' },
    { name: 'Git', color: 'bg-gray-600' },
  ],
  ai: [ // AI & Data
    { name: 'RAG Architecture', color: 'bg-purple-500' },
    { name: 'Prompt Eng.', color: 'bg-indigo-500' },
    { name: 'Vector Embeddings', color: 'bg-teal-500' },
    { name: 'Python (Boto3)', color: 'bg-yellow-500 text-black' },
    { name: 'Pandas', color: 'bg-blue-900' },
  ],
  dev: [ // Development
    { name: 'React.js', color: 'bg-cyan-400' },
    { name: 'Node.js', color: 'bg-green-500' },
    { name: 'Go (Golang)', color: 'bg-cyan-600' },
    { name: 'Java', color: 'bg-red-600' },
    { name: 'C++', color: 'bg-blue-700' },
    { name: 'SQL', color: 'bg-gray-500' },
  ],
};

export default function TechStackSection() {
  return (
    <div className="space-y-4">
      <div className="h-0 lg:h-16 hidden lg:block" /> 
      
      {Object.entries(techStack).map(([category, techs]) => {
        const IconComponent = categoryIcons[category] || Code;
        // 简单的标题映射
        const titles = { cloud: 'Cloud & DevOps', ai: 'AI & Data', dev: 'Development' };

        return (
          <div 
            key={category} 
            className="bg-[#1e1e1e] rounded-3xl p-6 border border-white/5 hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4 text-gray-400">
              <IconComponent className="w-4 h-4" />
              <span className="text-sm font-mono font-bold">{titles[category]}</span>
            </div>

            <div className="grid grid-cols-2 gap-x-2 gap-y-3">
              {techs.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2.5">
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