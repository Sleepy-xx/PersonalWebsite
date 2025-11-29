import React from 'react';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const projects = [
  {
    title: '1chooo.com',
    description: "Personal portfolio website showcasing my work and thoughts",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    href: '#',
  },
  {
    title: 'Jian Theme',
    description: 'A static website with near-perfect page load speeds',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    href: '#',
  },
  {
    title: 'Tools',
    description: "Hugo's free online tools collection",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    href: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-white mb-8">Selected Project</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-full px-6"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          See More Projects
        </Button>
      </div>
    </section>
  );
}