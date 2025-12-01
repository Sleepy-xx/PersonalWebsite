import React from 'react';
import PortfolioLayout from '@/components/portfolio/PortfolioLayout';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { getAllProjects } from '@/lib/mdx'; // Import the function

export default function ProjectPage() {
  // Fetch projects from MDX files
  const projects = getAllProjects();

  return (
    <PortfolioLayout title="Projects">
      <section>
        <div className="flex gap-6 mb-8 text-sm font-medium">
            <button className="text-amber-400 relative">
            All ({projects.length})
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-amber-400 rounded-full" />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
            <div key={project.slug} className="h-[400px]">
                <ProjectCard 
                    slug={project.slug}
                    title={project.frontmatter.title}
                    category={project.frontmatter.category}
                    period={`${project.frontmatter.startDate} - ${project.frontmatter.endDate}`}
                    image={project.frontmatter.image}
                    techStack={project.frontmatter.techStack}
                />
            </div>
            ))}
        </div>
      </section>
    </PortfolioLayout>
  );
}