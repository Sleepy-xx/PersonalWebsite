import React from 'react';
import { MapPin, Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function ProfileSidebar() {
  return (
    <aside className="w-full lg:w-80 bg-[#1e1e1e] rounded-3xl p-8 flex flex-col">
      {/* Profile Image - 你可以之后替换成自己的照片 */}
      <div className="flex justify-center mb-6">
        <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
          <img
            src="/PersonalWebsite/image0.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name [cite: 1] */}
      <h1 className="text-2xl font-bold text-white text-center mb-2">
        TSANG KWOK HIN (HENRY)
      </h1>

      {/* Tagline Badge [cite: 7] */}
      <div className="flex justify-center mb-8">
        <span className="px-4 py-1.5 bg-[#2a2a2a] text-gray-300 text-sm rounded-full">
          CS Undergraduate @ HKUST
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-700 mb-6" />

      {/* Contact Info */}
      <div className="space-y-5 flex-1">
        <ContactItem 
          icon={MapPin}
          label="LOCATION"
          value="Hong Kong" 
        />
        {/* [cite: 2] */}
        <ContactItem 
          icon={Mail}
          label="EMAIL"
          value="khtsangal@gmail.com"
          href="mailto:khtsangal@gmail.com"
        />
        {/* Github 链接如果你有的话可以填写真实的，暂时保留占位符 */}
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
        {/* 新增的电话部分 */}
        <ContactItem 
          icon={Phone}
          label="PHONE"
          value="(+852) 52662629"
          href="tel:+85252662629"
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-700 my-6" />

      {/* Footer */}
      <div className="text-center text-sm text-gray-400">
        <p>© 2025 TSANG KWOK HIN</p>
      </div>
    </aside>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-[#2a2a2a] rounded-xl">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-gray-300 text-sm">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
}