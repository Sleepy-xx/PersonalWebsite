import React from 'react';

export default function PhotoGallery() {
  const photos = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop',
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {photos.map((src, i) => (
        <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-800">
          <img src={src} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform" />
        </div>
      ))}
    </div>
  );
}