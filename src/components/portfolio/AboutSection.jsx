import React from 'react';

export default function AboutSection() {
  return (
    <section>
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
      <div className="w-10 h-1 bg-blue-500 rounded-full mb-8" />

      {/* Bio [cite: 4, 6, 7] */}
      <div className="text-gray-300 leading-relaxed space-y-4">
        <p>
          I am a self-motivated and energetic Computer Science undergraduate at{' '}
          <span className="text-blue-400 font-medium">Hong Kong University of Science and Technology (HKUST)</span>. 
          I possess a critical and analytical mindset, focused on various sectors including 
          Cloud Computing, Software Engineering, AI, and Web design.
        </p>
        <p>
          My recent work involves architecting scalable serverless solutions on AWS and building 
          Intelligent AI Assistants using RAG architecture. I am passionate about leveraging 
          cloud-native technologies to solve complex enterprise problems.
        </p>
      </div>
    </section>
  );
}