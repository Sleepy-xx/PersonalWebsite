import React from 'react';

const techStack = {
  frontend: [
    { name: 'TypeScript', color: 'bg-blue-500' },
    { name: 'React', color: 'bg-cyan-400' },
    { name: 'Next.js', color: 'bg-white text-black' },
    { name: 'Tailwind CSS', color: 'bg-teal-400' },
    { name: 'Vitest', color: 'bg-yellow-400 text-black' },
    { name: 'Shadcn UI', color: 'bg-gray-600' },
    { name: 'Google Analytics', color: 'bg-orange-400' },
  ],
  backend: [
    { name: 'Python', color: 'bg-yellow-500 text-black' },
    { name: 'AWS', color: 'bg-orange-500' },
    { name: 'Django', color: 'bg-green-700' },
    { name: 'Golang', color: 'bg-cyan-500' },
    { name: 'Docker', color: 'bg-blue-400' },
    { name: 'FastAPI', color: 'bg-teal-500' },
    { name: 'GitHub', color: 'bg-gray-700' },
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
    <div className="space-y-8 mt-16">
      {Object.entries(techStack).map(([category, techs]) => (
        <div key={category} className="flex items-start gap-6">
          <div className="w-24 shrink-0">
            <span className="text-gray-400 text-sm font-medium">{category}</span>
          </div>
          <div className="h-px bg-gray-700 w-16 mt-3 shrink-0" />
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech.name}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${tech.color} transition-transform hover:scale-105 cursor-default`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}