import React from 'react';
import { MapPin, Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function ProfileSidebar() {
  return (
    <div className={`
      bg-[#1e1e1f] border border-[#2d2d2d] rounded-[20px] p-[15px] shadow-lg mb-[15px] z-10
      
      /* ≥ 580px: padding: 30px, mb: 30px */
      min-[580px]:p-[30px] min-[580px]:mb-[30px]
      
      /* ≥ 1250px: mb: 0, shadow-none (因为 sticky 处理了) */
      min-[1250px]:mb-0 min-[1250px]:shadow-none min-[1250px]:border-none min-[1250px]:bg-transparent
    `}>
      <div className="flex flex-row min-[1250px]:flex-col items-center gap-[15px] min-[580px]:gap-[25px]">
        
        {/* 头像区域：严格响应式尺寸 */}
        <div className={`
          bg-gradient-to-br from-[#3f3f40] to-[#1e1e1f] rounded-[20px] overflow-hidden shrink-0
          
          /* 默认: 80px */
          w-[80px] h-[80px]
          
          /* ≥ 375px: radius 30px */
          min-[375px]:rounded-[30px]
          
          /* ≥ 580px: 120px */
          min-[580px]:w-[120px] min-[580px]:h-[120px]
          
          /* ≥ 1250px: 150px */
          min-[1250px]:w-[150px] min-[1250px]:h-[150px]
        `}>
          <img
            src="/PersonalWebsite/me.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 个人信息 */}
        <div className="text-left min-[1250px]:text-center">
          <h1 className="text-white text-[24px] font-semibold tracking-tight min-[580px]:mb-[15px] min-[1250px]:whitespace-nowrap">
            Tsang Kwok Hin
          </h1>
          <div className="bg-[#2b2b2c] text-white/70 text-[12px] font-light px-[12px] py-[3px] rounded-[8px] inline-block">
            CS Undergraduate @ HKUST
          </div>
        </div>
      </div>

      {/* 分割线 */}
      <div className="h-[1px] bg-[#2d2d2d] my-[16px] min-[580px]:my-[32px]" />

      {/* 联系方式列表 */}
      <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1250px]:grid-cols-1 gap-[16px] min-[580px]:gap-[20px]">
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
      <div className="p-3 bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] rounded-[12px] border border-[#2d2d2d] shadow-sm text-[#ffdb70]">
        <Icon className="w-4 h-4" />
      </div>
      <div className="overflow-hidden">
        <p className="text-[11px] text-[#d6d6d6b3] uppercase mb-[2px]">{label}</p>
        <p className="text-[#fafafa] text-[14px] font-light truncate">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : content;
}