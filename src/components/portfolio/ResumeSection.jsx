import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'USC Viterbi School of Engineering',
    period: '2024 - Present',
    description: 'Focus on Software Engineering and Large-Scale Systems',
  },
  {
    degree: 'B.S. Computer Science',
    school: 'National Central University',
    period: '2019 - 2023',
    description: 'Dean\'s List, Software Engineering Club President',
  },
];

const experience = [
  {
    title: 'Software Engineer Intern',
    company: 'Tech Company',
    period: 'Summer 2024',
    description: 'Worked on distributed systems and microservices architecture.',
  },
  {
    title: 'Teaching Assistant',
    company: 'USC Viterbi',
    period: '2024 - Present',
    description: 'TA for Software Engineering and Data Structures courses.',
  },
  {
    title: 'Open Source Contributor',
    company: 'Various Projects',
    period: '2020 - Present',
    description: '5,000+ contributions in 2024. Active contributor to React ecosystem.',
  },
];

const skills = [
  'TypeScript', 'React', 'Next.js', 'Python', 'Go', 'AWS', 
  'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'GraphQL', 'REST APIs'
];

export default function ResumeSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-2">Resume</h2>
      <div className="w-10 h-1 bg-amber-400 rounded-full mb-10" />

      {/* Education */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-amber-400/20 rounded-lg">
            <GraduationCap className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Education</h3>
        </div>
        <div className="space-y-6 ml-2 border-l-2 border-gray-700 pl-6">
          {education.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[29px] w-3 h-3 bg-amber-400 rounded-full" />
              <h4 className="text-white font-medium">{item.degree}</h4>
              <p className="text-amber-400 text-sm">{item.school}</p>
              <p className="text-gray-500 text-xs mt-1">{item.period}</p>
              <p className="text-gray-400 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-amber-400/20 rounded-lg">
            <Briefcase className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Experience</h3>
        </div>
        <div className="space-y-6 ml-2 border-l-2 border-gray-700 pl-6">
          {experience.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[29px] w-3 h-3 bg-amber-400 rounded-full" />
              <h4 className="text-white font-medium">{item.title}</h4>
              <p className="text-amber-400 text-sm">{item.company}</p>
              <p className="text-gray-500 text-xs mt-1">{item.period}</p>
              <p className="text-gray-400 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-amber-400/20 rounded-lg">
            <Award className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-[#2a2a2a] text-gray-300 rounded-lg text-sm hover:bg-amber-400/20 hover:text-amber-400 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}