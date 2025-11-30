import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description, image, href }) {
  return (
    <div className="group relative bg-[#2a2a2a] rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        {/* <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> */}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4">{description}</p>
        <div className="flex gap-3">
            {/* <a href={href} className="text-amber-400 hover:text-white transition-colors"><Github className="w-5 h-5"/></a>
            <a href={href} className="text-amber-400 hover:text-white transition-colors"><ExternalLink className="w-5 h-5"/></a> */}
        </div>
      </div>
    </div>
  );
}