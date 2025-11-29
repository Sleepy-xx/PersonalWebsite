"use client";
import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1580982324076-d95230549339?w=800&h=600&fit=crop',
    alt: 'USC Campus',
    category: 'campus',
  },
  {
    src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop',
    alt: 'Half Dome',
    category: 'nature',
  },
  {
    src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop',
    alt: 'Waterfall',
    category: 'nature',
  },
  {
    src: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=600&fit=crop',
    alt: 'UCLA',
    category: 'campus',
  },
  {
    src: 'https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?w=800&h=600&fit=crop',
    alt: 'San Diego',
    category: 'campus',
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Mountains',
    category: 'nature',
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop',
    alt: 'Snowy Peak',
    category: 'nature',
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop',
    alt: 'Lake View',
    category: 'nature',
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-2">Gallery</h2>
      <div className="w-10 h-1 bg-amber-400 rounded-full mb-8" />

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-8">
        {['all', 'campus', 'nature'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === category
                ? 'bg-amber-400 text-black'
                : 'bg-[#2a2a2a] text-gray-400 hover:text-white'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}