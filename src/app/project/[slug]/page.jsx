import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '@/lib/projectsData';

// ⚠️ 1. 必须声明为 async 组件
export default async function ProjectDetail({ params }) {
  
  // ⚠️ 2. 必须先 await params，才能解构 slug
  // 这是 Next.js 15 的新要求
  const { slug } = await params;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#121212] flex justify-center py-20 px-4">
      {/* ... 其余 JSX 代码保持不变 ... */}
      <article className="w-full max-w-3xl animate-fade-in">
        
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-amber-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

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

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-[#1e1e1f] border border-white/10 rounded-md text-gray-300 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </header>

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 mb-12 bg-[#1e1e1f]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          <p className="text-xl leading-relaxed mb-8 text-gray-200">
            {project.description}
          </p>
          
          <div className="whitespace-pre-wrap font-sans">
            {project.content}
          </div>
        </div>

      </article>
    </div>
  );
}

// 静态生成部分保持不变
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}