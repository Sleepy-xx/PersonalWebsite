import React from 'react';
import { MapPin, Mail, Github, Linkedin, Phone } from 'lucide-react';
import IconBox from './IconBox';

export default function ProfileSidebar() {
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. 头像 */}
      <div className="flex justify-center mb-6">
        <div className="relative w-[100px] h-[100px] xl:w-[150px] xl:h-[150px] rounded-[20px] overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 transition-all duration-300 shadow-md">
          <img src="/PersonalWebsite/image0.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 2. 名字 */}
      <h1 className="text-2xl font-bold text-white text-center mb-2 tracking-tight">
        TSANG KWOK HIN (HENRY)
      </h1>

      <div className="flex justify-center mb-8">
        <span className="px-3 py-1 bg-[#2a2a2a] text-gray-300 text-xs font-medium rounded-lg border border-[#333]">
          CS Undergraduate @ HKUST
        </span>
      </div>

      <div className="h-px bg-[#2d2d2d] mb-6 w-full" />

      {/* 3. 联系信息列表 */}
      <div className="space-y-6 flex-1">
        
        {/* 无链接 (Location) */}
        <ContactItem 
          icon={MapPin}
          label="LOCATION"
          value="Hong Kong" 
        />
        
        {/* 有链接 (Email, Socials) */}
        <ContactItem 
          icon={Mail}
          label="EMAIL"
          value="khtsangal@gmail.com"
          href="mailto:khtsangal@gmail.com"
        />
        
        <ContactItem 
          icon={Github}
          label="GITHUB"
          value="View Profile"
          href="https://github.com/sleepy-xx"
        />
        
        <ContactItem 
          icon={Linkedin}
          label="LINKEDIN"
          value="Connect"
          href="https://www.linkedin.com/in/henry-tsang-810457300/"
        />
        
        <ContactItem 
          icon={Phone}
          label="PHONE"
          value="(+852) 52662629"
        />
      </div>

      <div className="h-px bg-[#2d2d2d] my-6 w-full" />

      <div className="text-center">
        <p className="text-xs text-gray-500">© 2025 TSANG KWOK HIN</p>
      </div>
    </div>
  );
}

// --- 辅助组件 ---
function ContactItem({ icon: Icon, label, value, href }) {
  return (
    <div className="flex items-center gap-4">
      
      {/* 1. 图标部分：完全静态，无交互 */}
      <IconBox icon={Icon} />

      {/* 2. 文字部分：根据是否有链接决定交互 */}
      <div className="flex-1 overflow-hidden">
        {href ? (
          // 情况 A: 有链接
          <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            // 关键：添加 group 类，用来控制内部子元素的变化
            className="group block cursor-pointer"
          >
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-semibold">
              {label}
            </p>
            {/* 关键：group-hover:text-blue-400
                添加 transition-colors duration-300 让变色更平滑
            */}
            <p className="text-gray-300 text-sm truncate w-full font-medium transition-colors duration-300 group-hover:text-blue-400">
              {value}
            </p>
          </a>
        ) : (
          // 情况 B: 无链接 (纯展示)
          <div className="cursor-default">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-semibold">
              {label}
            </p>
            <p className="text-gray-300 text-sm truncate w-full font-medium">
              {value}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}