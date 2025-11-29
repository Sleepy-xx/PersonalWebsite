import React from 'react';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

// [cite: 13, 15, 16, 19, 22, 23]
const projects = [
  {
    title: 'AWS Native Enterprise AI Assistant',
    description: "A RAG-based AI assistant using AWS Lambda, API Gateway, and Amazon Bedrock. Features streamed responses and enterprise-grade security via AWS WAF.",
    image: 'https://images.unsplash.com/photo-1667372393119-c85c020799a3?w=800&h=600&fit=crop', // 使用通用云/AI图片
    href: '#',
  },
  {
    title: 'WhatsApp Intelligent Assistant',
    description: 'Hybrid Stateful-Stateless architecture using Go (WhatsMeow) on EC2 and Bedrock Agents. Includes Function Calling for real-time automation.',
    image: 'https://images.unsplash.com/photo-1611746347169-e6e5fbb315e6?w=800&h=600&fit=crop', // 使用通用社交/通讯图片
    href: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-white mb-8">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}