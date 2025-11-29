import React from 'react';
import { Calendar, Eye, Clock } from 'lucide-react';

export default function BlogPostCard({ title, excerpt, date, readTime, views, href }) {
  return (
    <a href={href} className="block p-5 rounded-2xl bg-[#2a2a2a] hover:bg-[#333] transition-colors group">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{excerpt}</p>
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {date}</div>
        <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {readTime}</div>
        <div className="flex items-center gap-1"><Eye className="w-3 h-3" /> {views}</div>
      </div>
    </a>
  );
}