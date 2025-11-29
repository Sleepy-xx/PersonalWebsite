import React from 'react';
import BlogPostCard from './BlogPostCard';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const posts = [
  {
    title: 'Software Compound Interest',
    excerpt: "5,000+ contributions in 2024 — here's my stack and standards for clean, scalable code.",
    date: '2025-08-01',
    readTime: '5 min read',
    views: 198,
    href: '#',
  },
  {
    title: 'Who is Chun-Ho (Hugo) Lin 👨🏻‍💻',
    excerpt: "I'm Chun-Ho (Hugo) Lin, a graduate with a Bachelor's degree from National Central University (NCU) 🐿️, driven by a sincere passion for Software Engineering 💻.",
    date: '2025-07-17',
    readTime: '2 min read',
    views: 563,
    href: '#',
  },
  {
    title: "Hugo's Stack & Standards",
    excerpt: "5,000+ contributions in 2024 — here's my stack and standards for clean, scalable code.",
    date: '2025-01-09',
    readTime: '3 min read',
    views: 521,
    href: '#',
  },
];

export default function BlogSection() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-white mb-8">My Writings</h2>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <BlogPostCard key={post.title} {...post} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-full px-6"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          View All My Writings
        </Button>
      </div>
    </section>
  );
}