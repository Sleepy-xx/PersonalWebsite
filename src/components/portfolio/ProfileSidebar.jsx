import React from 'react';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';

export default function ProfileSidebar() {
  return (
    <aside className="w-full lg:w-80 bg-[#1e1e1e] rounded-3xl p-8 flex flex-col">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-400 to-orange-500">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold text-white text-center mb-2">
        Chun-Ho (Hugo) Lin
      </h1>

      {/* Tagline Badge */}
      <div className="flex justify-center mb-8">
        <span className="px-4 py-1.5 bg-[#2a2a2a] text-gray-300 text-sm rounded-full">
          Fight on ✌️
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-700 mb-6" />

      {/* Contact Info */}
      <div className="space-y-5 flex-1">
        <ContactItem 
          icon={MapPin}
          label="LOCATION"
          value="Los Angeles, CA 🇺🇸"
        />
        <ContactItem 
          icon={Mail}
          label="EMAIL"
          value="hugo@1chooo.com"
          href="mailto:hugo@1chooo.com"
        />
        <ContactItem 
          icon={Github}
          label="GITHUB"
          value="@1chooo"
          href="https://github.com/1chooo"
        />
        <ContactItem 
          icon={Linkedin}
          label="LINKEDIN"
          value="in/1chooo"
          href="https://linkedin.com/in/1chooo"
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-700 my-6" />

      {/* Footer */}
      <div className="text-center text-sm text-gray-400">
        <p>© 2025 <a href="#" className="text-amber-400 hover:underline">1chooo</a></p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-white transition-colors">RSS</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Docs</a>
        </div>
      </div>
    </aside>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-[#2a2a2a] rounded-xl">
        <Icon className="w-5 h-5 text-amber-400" />
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