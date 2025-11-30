import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

// [cite: 6, 7, 8, 9]
const education = [
  {
    degree: 'B.Eng. Computer Science',
    school: 'Hong Kong University of Science and Technology',
    period: '2023 - Present',
    description: 'Second Class Honors',
  },
  {
    degree: 'Higher Diploma in Information Technology',
    school: 'HKU SPACE Community College',
    period: '2021 - 2023',
    description: 'First Class Honours',
  },
];

// [cite: 13, 15, 16, 19, 22, 26]
const experience = [
  {
    title: 'AWS Native Enterprise AI Assistant (Project)',
    company: 'Serverless RAG Architecture',
    period: 'Sep 2025 - Oct 2025',
    description: 'Architected an event-driven backend using AWS Lambda and API Gateway. Orchestrated Bedrock Flows for complex prompts and implemented AWS WAF for security.',
  },
  {
    title: 'WhatsApp Intelligent Assistant (Project)',
    company: 'Hybrid Cloud Architecture',
    period: 'Sep 2025 - Oct 2025',
    description: 'Designed a hybrid stateful-stateless system with Go and Bedrock Agents. Engineered a zero-cost ETL pipeline syncing Google Sheets to S3.',
  },
];

// 
const skills = [
  'AWS Lambda', 'Amazon Bedrock', 'API Gateway', 'RAG', 'React.js', 
  'Go', 'Python', 'Node.js', 'Java', 'C++', 'SQL', 'Git'
];

export default function ResumeSection() {
  return (
    <section>
      

      {/* Education */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <GraduationCap className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Education</h3>
        </div>
        <div className="space-y-6 ml-2 border-l-2 border-gray-700 pl-6">
          {education.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[29px] w-3 h-3 bg-blue-500 rounded-full" />
              <h4 className="text-white font-medium">{item.degree}</h4>
              <p className="text-blue-400 text-sm">{item.school}</p>
              <p className="text-gray-500 text-xs mt-1">{item.period}</p>
              <p className="text-gray-400 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Briefcase className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Project Experience</h3>
        </div>
        <div className="space-y-6 ml-2 border-l-2 border-gray-700 pl-6">
          {experience.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[29px] w-3 h-3 bg-blue-500 rounded-full" />
              <h4 className="text-white font-medium">{item.title}</h4>
              <p className="text-blue-400 text-sm">{item.company}</p>
              <p className="text-gray-500 text-xs mt-1">{item.period}</p>
              <p className="text-gray-400 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Award className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-[#2a2a2a] text-gray-300 rounded-lg text-sm hover:bg-blue-500/20 hover:text-blue-400 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}