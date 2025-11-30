import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '@/lib/projectsData'; // 引入数据

export default function ProjectsSection() {
  return (
    <section>
      <div className="flex gap-6 mb-8 text-sm font-medium">
        <button className="text-amber-400 relative">
          All ({projectsData.length})
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-amber-400 rounded-full" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div key={project.slug} className="h-[400px]">
            {/* 传递所有属性，包括 slug */}
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}