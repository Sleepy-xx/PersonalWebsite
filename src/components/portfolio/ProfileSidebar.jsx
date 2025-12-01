import React from 'react';
import { MapPin, Mail, Github, Linkedin, Phone } from 'lucide-react';
import IconBox from './IconBox'; // 1. 引入 IconBox 组件来复用样式

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
        <ContactItem 
          icon={MapPin}
          label="LOCATION"
          value="Hong Kong" 
        />
        <ContactItem 
          icon={Mail}
          label="EMAIL"
          value="khtsangal@gmail.com"
          href="mailto:khtsangal@gmail.com"
        />
        {/* 把 Github 和 Linkedin 加回列表，因为底部的删掉了 */}
        <ContactItem 
          icon={Github}
          label="GITHUB"
          value="View Profile"
          href="https://sleepy-xx.github.io/PersonalWebsite/"
        />
        <ContactItem 
          icon={Linkedin}
          label="LINKEDIN"
          value="Connect"
          href="#"
        />
        <ContactItem 
          icon={Phone}
          label="PHONE"
          value="(+852) 52662629"
          href="tel:+85252662629"
        />
      </div>

      <div className="h-px bg-[#2d2d2d] my-6 w-full" />

      {/* 4. 底部区域 */}
      {/* ⚠️ 已移除底部的 SocialLinks (红色框部分) */}

      <div className="text-center">
        <p className="text-xs text-gray-500">© 2025 TSANG KWOK HIN</p>
      </div>
    </div>
  );
}

// 辅助组件：列表项
function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 group">
      
      {/* ⚠️ 修改重点：这里直接使用 IconBox */}
      {/* 这样上面的图标就会拥有和原来底部图标一模一样的渐变边框效果 */}
      <IconBox icon={Icon} />

      <div className="overflow-hidden">
        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-semibold">{label}</p>
        <p className="text-gray-300 text-sm truncate w-full font-medium group-hover:text-white transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full transition-transform active:scale-[0.98]">
        {content}
      </a>
    );
  }
  return content;
}