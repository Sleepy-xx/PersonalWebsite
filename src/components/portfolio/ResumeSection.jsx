import React from 'react';
import { GraduationCap, Briefcase, Award, Calendar, MapPin, Building2, School } from 'lucide-react';

const education = [
  {
    degree: 'B.Eng. Computer Science',
    school: 'Hong Kong University of Science and Technology',
    // ⚠️ 确保路径正确
    logo: '/PersonalWebsite/HKUST_symbol.svg', 
    college: 'School of Engineering',
    location: 'Hong Kong',
    period: '2023 - Present',
    description: 'Second Class Honors',
  },
  {
    degree: 'Higher Diploma in Information Technology',
    school: 'HKU SPACE Community College',
    logo: '/PersonalWebsite/hkuspace.jpg', 
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
        
        {/* Header Title */}
        <div className="flex items-center gap-4 mb-6">
          {/* 顶部图标盒子: w-10 (40px)。中心点在 20px 处 */}
          <div className="w-10 h-10 flex items-center justify-center bg-[#2a2a2a] rounded-xl border border-white/5 shadow-sm relative z-10">
            <GraduationCap className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Education</h3>
        </div>

        {/* Timeline List */}
        {/* 核心调整：ml-14 (56px) 留出足够左边距 */}
        <ol className="ml-14">
          {education.map((item, index) => (
            <li key={index} className="relative flex flex-col mb-5 last:mb-0">
              
              {/* --- 灰线 (The Line) --- */}
              {/* 计算逻辑：
                 1. 顶部图标宽 40px，中心线在 20px。
                 2. 当前容器左边距是 56px (ml-14)。
                 3. 为了让线回到 20px 的位置，left 需要设为 -(56 - 20) = -36px。
              */}
              {index !== education.length - 1 && (
                <div 
                  className="absolute w-[1px] bg-[#333]
                    left-[-36px] 
                    top-[-24px] h-[calc(100%+50px)]" 
                />
              )}
              {/* 最后一个元素只需要一小段向上的线 */}
              {index === education.length - 1 && (
                 <div 
                 className="absolute w-[1px] bg-[#333]
                   left-[-36px] 
                   top-[-24px] h-[30px]" 
               />
              )}

              {/* --- 圆点 (The Dot) --- */}
              {/* 1. w-2 h-2 (8px) 的黄色圆点。
                 2. shadow-[0_0_0_4px_#1e1e1f]：这就在圆点周围加了一圈 4px 宽的“背景色边框”。
                    这层边框会遮挡住背后的线，从而实现你想要的那种“镂空/光环”效果。
                 3. 位置微调：为了让8px的点居中于1px的线，left 需要比线的 -36px 再往左移 (8-1)/2 ≈ 3.5px。
                    取整使用 -39.5px 或者用 transform 居中。
              */}
              <div 
                className="absolute 
                  top-[6px] 
                  left-[-39.5px]
                  w-2 h-2 rounded-full 
                  bg-amber-400 
                  z-10 
                  shadow-[0_0_0_4px_#353535]"
              />

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

      {/* 2. Experience Timeline (Same logic applied) */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 flex items-center justify-center bg-[#2a2a2a] rounded-xl border border-white/5 shadow-sm relative z-10">
            <Briefcase className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Experience</h3>
        </div>

        <ol className="ml-14">
          {experience.map((item, index) => (
            <li key={index} className="relative flex flex-col mb-5 last:mb-0">
              
              {/* Line */}
              {index !== experience.length - 1 && (
                <div className="absolute w-[1px] bg-[#333] left-[-36px] top-[-24px] h-[calc(100%+50px)]" />
              )}
              {index === experience.length - 1 && (
                 <div className="absolute w-[1px] bg-[#333] left-[-36px] top-[-24px] h-[30px]" />
              )}

              {/* Dot with Shadow Ring */}
              <div 
                className="absolute top-[6px] left-[-39.5px]
                  w-2 h-2 rounded-full bg-amber-400 z-10 
                  shadow-[0_0_0_4px_#353535]"
              />
              
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