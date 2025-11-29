import React from 'react';
import { MapPin, Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function ProfileSidebar() {
  return (
    // ❌ 删除了所有的 pt-[60px] pl-[30px] 等外围 Padding
    // ✅ 只保留卡片本身的样式：背景色、边框、圆角、内部间距
    <div className="bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] p-[30px] shadow-lg">
      
      <div className="flex flex-row lg:flex-col items-center gap-6">
        
        {/* 头像区域 */}
        <div className="bg-[#2b2b2c] rounded-[30px] overflow-hidden shrink-0 w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]">
          <img
            src="/PersonalWebsite/me.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 个人信息 */}
        <div className="text-left lg:text-center">
          <h1 className="text-white text-[26px] font-semibold tracking-tight mb-2 whitespace-nowrap">
            Tsang Kwok Hin
          </h1>
          <div className="bg-[#2b2b2c] text-white/70 text-[12px] font-light px-[12px] py-[4px] rounded-[8px] inline-block">
            CS Undergraduate @ HKUST
          </div>
        </div>
      </div>

      {/* 分割线 */}
      <div className="h-[1px] bg-[#2d2d2d] my-8" />

      {/* 联系方式列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        <ContactItem icon={MapPin} label="LOCATION" value="Hong Kong" />
        <ContactItem icon={Phone} label="PHONE" value="(+852) 52662629" href="tel:+85252662629" />
        <ContactItem icon={Mail} label="EMAIL" value="khtsangal@gmail.com" href="mailto:khtsangal@gmail.com" />
        <ContactItem icon={Github} label="GITHUB" value="View Profile" href="#" />
        <ContactItem icon={Linkedin} label="LINKEDIN" value="Connect" href="#" />
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4">
      {/* 图标背景色改为深色，图标颜色改为琥珀色 */}
      <div className="p-3 bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] rounded-[12px] border border-[#2d2d2d] shadow-sm text-[#ffdb70]">
        <Icon className="w-4 h-4" />
      </div>
      <div className="overflow-hidden">
        <p className="text-[11px] text-[#d6d6d6b3] uppercase mb-[2px]">{label}</p>
        <p className="text-[#fafafa] text-[14px] font-light truncate group-hover:text-[#ffdb70] transition-colors">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block group hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : content;
}