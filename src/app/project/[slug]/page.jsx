import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Book } from 'lucide-react';
import { projectsData } from '@/lib/projectsData'; // 确保你有这个数据文件
import ProfileSidebar from '@/components/portfolio/ProfileSidebar';
import DetailNavigation from './DetailNavigation'; // 引入刚才新建的组件

// ⚠️ Next.js 15 写法：params 是异步的
export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  
  // 查找数据
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    // 1. 外层容器：与 Home.jsx 保持一致
    <div className="min-h-screen bg-[#121212] flex flex-col items-center isolate">
      <div className="w-full max-w-[1200px] mt-[60px] mb-[15px] mx-auto flex flex-col lg:flex-row gap-6 px-4 lg:px-0">
        
        {/* 2. 左侧 Sidebar：直接复用 */}
        <aside className="w-full bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] lg:w-[350px] shrink-0 lg:sticky lg:top-[60px] lg:self-start z-10 pt-[60px] pl-[30px] pr-[30px] pb-[30px]">
          <ProfileSidebar />
        </aside>

        {/* 3. 右侧主内容区域 */}
        {/* 添加 relative，为了让里面的导航栏能绝对定位到右上角 */}
        <main className="flex-1 bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] p-[30px] shadow-lg min-w-0 relative animate-fade-in">
          
          {/* --- 核心：插入导航栏 --- */}
          {/* 它会自动应用 NavigationTabs.jsx 里的 absolute top-0 right-0 样式 */}
          <DetailNavigation />

          <article>
            {/* Header */}
            {/* pt-12: 在移动端留出顶部空间给导航栏 (桌面端导航栏在右上角，不占空间) */}
            <header className="mb-8 pt-12 lg:pt-0">
              
              {/* 返回按钮 */}
              <Link 
                href="/" 
                className="inline-flex items-center text-gray-300 hover:text-amber-400 transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                <span className="font-medium text-sm">Back To Project</span>
              </Link>

              <div className="space-y-4">
                <div className="text-amber-400 text-xs font-bold tracking-wider uppercase">
                  {project.category}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {project.title}
                </h1>

                {/* 作者与时间信息 */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                    {/* 显示作者首字母，如果没有作者名则显示 'H' */}
                    {project.author ? project.author[0] : 'H'}
                  </div>
                  <div className="text-sm">
                    <div className="text-white font-medium">{project.author || 'Hugo Lin'}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{project.period} · 3 min read</div>
                  </div>
                </div>

                {/* 操作按钮组 (Demo, Code, Docs) */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.demoUrl && <ActionLink href={project.demoUrl} icon={ExternalLink}>Demo</ActionLink>}
                  {project.codeUrl && <ActionLink href={project.codeUrl} icon={Github}>Code</ActionLink>}
                  {project.docsUrl && <ActionLink href={project.docsUrl} icon={Book}>Docs</ActionLink>}
                </div>
              </div>
            </header>

            {/* 主图 Banner */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/5 mb-10 bg-black/20 shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* 正文内容 */}
            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              {/* whitespace-pre-wrap 保留换行符 */}
              <div className="whitespace-pre-wrap leading-relaxed text-gray-400 text-[15px]">
                {project.content || project.description}
              </div>
            </div>

          </article>
        </main>
      </div>
    </div>
  );
}

// 辅助组件：操作按钮样式
function ActionLink({ href, icon: Icon, children }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] border border-white/10 rounded-lg text-xs font-bold text-gray-300 hover:text-white hover:border-amber-400/50 hover:bg-[#333] transition-all"
    >
      {children}
      <Icon className="w-3.5 h-3.5" />
    </a>
  );
}

// 静态参数生成 (SSG)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}