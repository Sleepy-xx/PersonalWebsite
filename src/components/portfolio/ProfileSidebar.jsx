import React from 'react';
import { MapPin, Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function ProfileSidebar() {
  return (
    // 修改 1: 将 aside 改为 div，因为 Home.jsx 外部已经包裹了 aside
    // 修改 2: 添加 border-[#2d2d2d] 和 rounded-[20px] 以匹配 Home.jsx 中右侧 Main 的风格
    // 修改 3: 添加 p-6 (内边距)，确保内容不紧贴边缘
    <div className="w-full bg-[#1e1e1e] border border-[#2d2d2d] rounded-[20px] p-6 flex flex-col shadow-lg">
      
      {/* Profile Image - 保持了你的响应式逻辑，但由父容器控制最大宽度 */}
      <div className="flex justify-center mb-6">
        <div className={`
          relative
          w-[100px] h-[100px]          /* 移动端默认大小 */
          xl:w-[150px] xl:h-[150px]    /* 大屏断点调整 */
          rounded-[20px] overflow-hidden 
          bg-gradient-to-br from-blue-500 to-purple-600 
          transition-all duration-300
          shadow-md
        `}>
          <img
            src="/PersonalWebsite/image0.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold text-white text-center mb-2 tracking-tight">
        TSANG KWOK HIN (HENRY)
      </h1>

      {/* Tagline Badge */}
      <div className="flex justify-center mb-8">
        <span className="px-3 py-1 bg-[#2a2a2a] text-gray-300 text-xs font-medium rounded-lg border border-[#333]">
          CS Undergraduate @ HKUST
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#2d2d2d] mb-6 w-full" />

      {/* Contact Info */}
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

      {/* Divider - 只有在内容很长需要底部copyright时才需要分割，这里可以保留或简化 */}
      <div className="h-px bg-[#2d2d2d] my-6 w-full" />

      {/* Footer */}
      <div className="text-center">
        <p className="text-xs text-gray-500">© 2025 TSANG KWOK HIN</p>
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="p-2.5 bg-[#2a2a2a] rounded-xl border border-[#333] group-hover:border-blue-500/30 group-hover:bg-[#333] transition-colors">
        <Icon className="w-4 h-4 text-blue-400" />
      </div>
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
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block w-full transition-transform active:scale-[0.98]"
      >
        {content}
      </a>
    );
  }

  return content;
}