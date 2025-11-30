import React from 'react';
import { GraduationCap, Briefcase, Award, Calendar, MapPin, Building2, School } from 'lucide-react';

const education = [
  {
    degree: 'B.Eng. Computer Science',
    school: 'Hong Kong University of Science and Technology',
    logo: '/images/hkust.svg', 
    college: 'School of Engineering',
    location: 'Hong Kong',
    period: '2023 - Present',
    description: 'Second Class Honors',
  },
  {
    degree: 'Higher Diploma in Information Technology',
    school: 'HKU SPACE Community College',
    logo: '/images/hkuspace.svg', 
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
      <div className="mb-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 flex items-center justify-center bg-[#2a2a2a] rounded-xl border border-white/5 shadow-sm relative z-10">
            <GraduationCap className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Education</h3>
        </div>

        {/* List */}
        <ol className="ml-[45px] md:ml-[65px]">
          {education.map((item, index) => (
            <li key={index} className="relative flex flex-col mb-5 last:mb-0">
              
              {/* --- 灰线 (The Line) --- */}
              {/* 仅在“非最后一个”元素显示长连接线，或者根据设计需要全部显示 */}
              {index !== education.length - 1 && (
                <div 
                  className="absolute w-[1px] bg-[#333]
                    left-[-30px] md:left-[-40px] 
                    top-[-25px] h-[calc(100%+50px)]" 
                />
              )}
              {/* 如果是最后一个元素，依然需要一小段向上的线连接到上一个 */}
              {index === education.length - 1 && (
                 <div 
                 className="absolute w-[1px] bg-[#333]
                   left-[-30px] md:left-[-40px] 
                   top-[-25px] h-[30px]" 
               />
              )}

              {/* --- 核心修改：实心光环圆点 (The Halo Dot) --- */}
              {/* 原理：
                 1. 外层 div (Blocker): 14px 大小，颜色 #1e1e1f (和背景一样)，负责遮挡灰线。
                 2. 内层 div (Dot): 6px 大小，黄色，居中。
                 这样一定能做出“镂空”效果。
              */}
              <div 
                className="absolute flex items-center justify-center
                  top-[5px]
                  /* 计算位置：线在 -30px，盒子宽 14px (半径7)。-30 - 7 = -37px */
                  left-[-37px] md:left-[-47px]
                  w-[14px] h-[14px]
                  bg-[#1e1e1f] rounded-full z-10"
              >
                <div className="w-[6px] h-[6px] bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.4)]" />
              </div>

              {/* --- Card Content --- */}
              <div className="group bg-[#2a2a2a] rounded-2xl p-5 md:p-6 border border-white/5 hover:border-amber-400/30 transition-colors shadow-sm">
                
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  {/* Logo Box */}
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg overflow-hidden">
                    {item.logo ? (
                      <img 
                        src={item.logo} 
                        alt={item.school} 
                        className="w-full h-full object-contain" 
                      />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center rounded-lg">
                        <Building2 className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-white leading-tight">{item.school}</h4>
                    <p className="text-gray-300 text-sm font-medium mt-1">{item.degree}</p>
                    <p className="text-gray-500 text-xs mt-1">{item.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1e1e1f] rounded-lg border border-white/5 text-xs text-gray-300">
                    <School className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.college}</span>
                  </div>
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
            </li>
          ))}
        </ol>
      </div>

      {/* 2. Experience Timeline */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 flex items-center justify-center bg-[#2a2a2a] rounded-xl border border-white/5 shadow-sm relative z-10">
            <Briefcase className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Experience</h3>
        </div>

        <ol className="ml-[45px] md:ml-[65px]">
          {experience.map((item, index) => (
            <li key={index} className="relative flex flex-col mb-5 last:mb-0">
              
              {/* Line */}
              {index !== experience.length - 1 && (
                <div className="absolute w-[1px] bg-[#333] left-[-30px] md:left-[-40px] top-[-25px] h-[calc(100%+50px)]" />
              )}
              {index === experience.length - 1 && (
                 <div className="absolute w-[1px] bg-[#333] left-[-30px] md:left-[-40px] top-[-25px] h-[30px]" />
              )}

              {/* Halo Dot */}
              <div 
                className="absolute flex items-center justify-center
                  top-[5px] left-[-37px] md:left-[-47px]
                  w-[14px] h-[14px]
                  bg-[#1e1e1f] rounded-full z-10"
              >
                <div className="w-[6px] h-[6px] bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.4)]" />
              </div>
              
              {/* Card */}
              <div className="group bg-[#2a2a2a] rounded-2xl p-5 md:p-6 border border-white/5 hover:border-amber-400/30 transition-colors shadow-sm">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
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
            </li>
          ))}
        </ol>
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