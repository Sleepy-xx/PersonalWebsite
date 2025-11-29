import React from 'react';
import PhotoGallery from './PhotoGallery';

export default function AboutSection() {
  return (
    <section>
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
      <div className="w-10 h-1 bg-amber-400 rounded-full mb-8" />

      {/* Bio */}
      <div className="text-gray-300 leading-relaxed space-y-4">
        <p>
          I am a developer and writer studying Computer Science at{' '}
          <a href="#" className="text-amber-400 hover:underline">
            USC Viterbi School of Engineering
          </a>{' '}
          ✌️. My interests span a broad spectrum of subjects, encompassing web development 
          and improving the quality, reliability, and efficiency of large-scale software systems.
        </p>
        <p>
          You can learn more about my work and interests through my{' '}
          <a href="#" className="text-amber-400 hover:underline">projects</a>,{' '}
          <a href="#" className="text-amber-400 hover:underline">thoughts</a>, and{' '}
          <a href="#" className="text-amber-400 hover:underline">Hugo Lin Dev</a>, or find me on{' '}
          <a href="#" className="text-amber-400 hover:underline">GitHub</a> and{' '}
          <a href="#" className="text-amber-400 hover:underline">LinkedIn</a>.
        </p>
      </div>

      {/* Photo Gallery */}
      <PhotoGallery />
    </section>
  );
}