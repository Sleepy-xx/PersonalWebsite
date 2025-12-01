import React from 'react';
import { MapPin, Mail, Github, Linkedin, Phone } from 'lucide-react';
import IconBox from './IconBox';

export default function ProfileSidebar() {
  return (
    <div className="w-full flex flex-col">
      
      {/* 头像区域 */}
      <div className="flex justify-center mb-6">
        <div className="relative w-[100px] h-[100px] xl:w-[150px] xl:h-[150px] rounded-[20px] overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 transition-all duration-300 shadow-md">
          <img src="/PersonalWebsite/image0.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 名字与头衔 */}
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
        {/* ⚠️ 修改重点：
           我已经删除了所有 ContactItem 里的 href="..." 属性。
           现在它们只是纯文本展示，鼠标放上去不会有链接效果。
        */}
        
        <ContactItem 
          icon={MapPin}
          label="LOCATION"
          value="Hong Kong" 
        />
        
        <ContactItem 
          icon={Mail}
          label="EMAIL"
          value="khtsangal@gmail.com"
        />
        
        <ContactItem 
          icon={Github}
          label="GITHUB"
          value="View Profile"
        />
        
        <ContactItem 
          icon={Linkedin}
          label="LINKEDIN"
          value="Connect"
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

// 辅助组件
function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4"> 
      
      {/* 图标：保持静态 */}
      <IconBox icon={Icon} />

      {/* 文字区域：根据是否有链接来决定是否有交互效果 */}
      <div 
        className={`overflow-hidden transition-all ${
          href ? 'group cursor-pointer' : 'cursor-default'
        }`}
      >
        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-semibold">
          {label}
        </p>
        
        <p 
          className={`text-gray-300 text-sm truncate w-full font-medium transition-colors ${
            href ? 'group-hover:text-blue-400' : ''
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );

  // 如果有链接，包裹 a 标签
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full active:scale-[0.98] transition-transform">
        {content}
      </a>
    );
  }
  
  // 如果没有链接 (如 Location)，直接返回内容，不带 a 标签
  return content;
}