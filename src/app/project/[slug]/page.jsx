import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '@/lib/projectsData';

// 这是一个服务器组件
export default function ProjectDetail({ params }) {
  // 1. 获取 URL 中的 slug
  const { slug } = params;

  // 2. 根据 slug 查找对应的数据
  const project = projectsData.find((p) => p.slug === slug);

  // 3. 如果没找到，显示 404
  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#121212] flex justify-center py-20 px-4">
      <article className="w-full max-w-3xl animate-fade-in">
        
        {/* 返回按钮 */}
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-amber-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* 头部信息 */}
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="bg-[#2a2a2a] px-3 py-1 rounded-full border border-white/10 text-amber-400">
              {project.category}
            </span>
            <span>{project.period}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>

          {/* 技术栈 */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-[#1e1e1f] border border-white/10 rounded-md text-gray-300 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* 主图 */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 mb-12 bg-[#1e1e1f]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 内容区域 (模拟 Markdown 样式) */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          {/* 这里简单渲染描述，未来你可以接入 ReactMarkdown 来渲染 project.content */}
          <p className="text-xl leading-relaxed mb-8 text-gray-200">
            {project.description}
          </p>
          
          {/* 模拟渲染正文内容 */}
          <div className="whitespace-pre-wrap font-sans">
            {project.content}
          </div>
        </div>

      </article>
    </div>
  );
}

// 静态生成参数 (可选，用于提高性能)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}