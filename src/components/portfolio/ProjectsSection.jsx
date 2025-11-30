import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'AWS Native Enterprise AI Assistant',
    category: 'CLOUD', // 分类
    period: 'Sep 2025 - Oct 2025',
    description: "A RAG-based AI assistant using AWS Lambda, API Gateway, and Amazon Bedrock. Features streamed responses and enterprise-grade security via AWS WAF.",
    // 这里使用你之前提供的通用云图片，如果有项目截图请替换
    image: '/PersonalWebsite/frontend_Website.png', 
    techStack: ['AWS Lambda', 'Amazon Bedrock', 'API Gateway', 'RAG', 'Python'],
    href: '#',
  },
  {
    title: 'WhatsApp Intelligent Assistant',
    category: 'APP', // 分类
    period: 'Sep 2025 - Oct 2025',
    description: 'Hybrid Stateful-Stateless architecture using Go (WhatsMeow) on EC2 and Bedrock Agents. Includes Function Calling for real-time automation.',
    image: '/PersonalWebsite/whatsapp.png',
    techStack: ['Go (Golang)', 'EC2', 'Bedrock Agents', 'Function Calling'],
    href: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section>
      {/* 顶部筛选栏 (根据你的项目数量动态调整了数字) */}
      <div className="flex gap-6 mb-8 text-sm font-medium">
        <button className="text-amber-400 relative">
          All ({projects.length})
          {/* 激活状态下划线 */}
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-amber-400 rounded-full" />
        </button>
        
        {/* 这里的分类按钮目前是静态展示，如需筛选功能后续可加 */}
        <button className="text-gray-400 hover:text-gray-200 transition-colors">
          Cloud (1)
        </button>
        <button className="text-gray-400 hover:text-gray-200 transition-colors">
          App (1)
        </button>
      </div>
      
      {/* Grid 布局 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          // 这里的高度 h-[400px] 确保卡片高度一致，看起来更整齐
          <div key={project.title} className="h-[400px]">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}