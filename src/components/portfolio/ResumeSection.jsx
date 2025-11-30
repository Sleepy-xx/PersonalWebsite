import React from 'react';
// ⚠️ 修复点：添加了 School 图标的引用
import { GraduationCap, Briefcase, Award, Calendar, MapPin, Building2, School } from 'lucide-react';

const education = [
  {
    degree: 'B.Eng. Computer Science',
    school: 'Hong Kong University of Science and Technology',
    logo: '/PersonalWebsite/UST_C3.jpg', 
    college: 'School of Engineering', 
    location: 'Hong Kong', 
    period: '2023 - Present',
    description: 'Second Class Honors',
  },
  {
    degree: 'Higher Diploma in Information Technology',
    school: 'HKU SPACE Community College',
    logo: '/PersonalWebsite/HKUST_symbol.svg', 
    college: 'College of Life Science', 
    location: 'Hong Kong',
    period: '2021 - 2023',
    description: 'First Class Honours',
  },
];

const experience = [
  {
    title: 'AWS Native Enterprise AI Assistant',
    company: 'Serverless RAG Architecture',
    location: 'Project',
    period: 'Sep 2025 - Oct 2025',
    description: 'Architected an event-driven backend using AWS Lambda and API Gateway. Orchestrated Bedrock Flows for complex prompts.',
  },
  {
    title: 'WhatsApp Intelligent Assistant',
    company: 'Hybrid Cloud Architecture',
    location: 'Project',
    period: 'Sep 2025 - Oct 2025',
    description: 'Designed a hybrid stateful-stateless system with Go and Bedrock Agents. Engineered a zero-cost ETL pipeline.',
  },
];

const skills = [
  'AWS Lambda', 'Amazon Bedrock', 'API Gateway', 'RAG', 'React.js', 
  'Go', 'Python', 'Node.js', 'Java', 'C++', 'SQL', 'Git'
];

export default function ResumeSection() {
  return (
    <section>
      {/* 1. Education Timeline */}
      <div className="mb-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 flex items-center justify-center bg-[#2a2a2a] rounded-xl border border-white/5 shadow-sm relative z-10">
            <GraduationCap className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Education</h3>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-5">
          {/* 垂直连接线 (Vertical Line) */}
          <div className="absolute left-[19px] top-[-20px] bottom-0 w-[2px] bg-[#333]" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-10">
                
                {/* 时间轴节点 (Dot) */}
                <div className="absolute left-[15px] top-8 w-2.5 h-2.5 bg-amber-400 rounded-full shadow-[0_0_0_4px_#1e1e1f] z-10 box-content" />

                {/* --- 核心卡片样式 --- */}
                <div className="group bg-[#2a2a2a] rounded-2xl p-5 md:p-6 border border-white/5 hover:border-amber-400/30 transition-colors shadow-sm">
                  
                  {/* Top Part: Logo & Title */}
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    {/* School Logo Box */}
                    <div className="w-12 h-12 shrink-0 bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                      {item.logo ? (
                        <img src={item.logo} alt={item.school} className="w-full h-full object-contain rounded-lg" />
                      ) : (
                        <Building2 className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    
                    {/* Text Content */}
                    <div>
                      <h4 className="text-lg font-bold text-white leading-tight">{item.school}</h4>
                      <p className="text-gray-300 text-sm font-medium mt-1">{item.degree}</p>
                      <p className="text-gray-500 text-xs mt-1">{item.description}</p>
                    </div>
                  </div>

                  {/* Bottom Part: Badges (Pills) */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {/* Badge 1: College/Dept */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1e1e1f] rounded-lg border border-white/5 text-xs text-gray-300">
                      <School className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.college}</span>
                    </div>
                    {/* Badge 2: Location */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1e1e1f] rounded-lg border border-white/5 text-xs text-gray-300">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.location}</span>
                    </div>
                    {/* Badge 3: Date */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1e1e1f] rounded-lg border border-white/5 text-xs text-gray-300">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Experience Timeline */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 flex items-center justify-center bg-[#2a2a2a] rounded-xl border border-white/5 shadow-sm relative z-10">
            <Briefcase className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Experience</h3>
        </div>

        <div className="relative pl-5">
          <div className="absolute left-[19px] top-[-20px] bottom-0 w-[2px] bg-[#333]" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-10">
                <div className="absolute left-[15px] top-8 w-2.5 h-2.5 bg-amber-400 rounded-full shadow-[0_0_0_4px_#1e1e1f] z-10 box-content" />
                
                <div className="group bg-[#2a2a2a] rounded-2xl p-5 md:p-6 border border-white/5 hover:border-amber-400/30 transition-colors shadow-sm">
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                     {/* Icon Box */}
                     <div className="w-12 h-12 shrink-0 bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                        <Briefcase className="w-6 h-6 text-gray-400" />
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-white leading-tight">{item.title}</h4>
                        <p className="text-gray-300 text-sm font-medium mt-1">{item.company}</p>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.description}</p>
                     </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1e1e1f] rounded-lg border border-white/5 text-xs text-gray-300">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.location}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1e1e1f] rounded-lg border border-white/5 text-xs text-gray-300">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Skills */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 flex items-center justify-center bg-[#2a2a2a] rounded-xl border border-white/5 shadow-sm">
            <Award className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2 pl-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-[#2a2a2a] text-gray-300 rounded-lg text-sm border border-white/5 hover:border-amber-400/30 hover:text-amber-400 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}