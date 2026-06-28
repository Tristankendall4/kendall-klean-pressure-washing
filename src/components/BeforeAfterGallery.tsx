'use client';

import { useState } from 'react';

interface GalleryItem {
  id: string;
  title: string;
  service: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'House Washing - Transformation',
    service: 'House Washing',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop',
  },
  {
    id: '2',
    title: 'Driveway Cleaning',
    service: 'Driveway Cleaning',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop',
  },
  {
    id: '3',
    title: 'Roof Soft Wash',
    service: 'Roof Cleaning',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop',
  },
  {
    id: '4',
    title: 'Deck Restoration',
    service: 'Deck Cleaning',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop',
  },
  {
    id: '5',
    title: 'Gutter Cleaning',
    service: 'Gutter Cleaning',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop',
  },
  {
    id: '6',
    title: 'Commercial Storefront',
    service: 'Commercial',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop',
  },
];

export default function BeforeAfterGallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const services = ['All', ...new Set(galleryItems.map((item) => item.service))];

  const filteredItems =
    selectedFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.service === selectedFilter);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After Gallery</h2>
          <p className="text-xl text-gray-600">
            See the dramatic transformations we deliver to Peoria homes and businesses
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setSelectedFilter(service)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedFilter === service
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-end">
                <div className="bg-gradient-to-t from-black to-transparent w-full p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ready to see similar results for your property?
          </p>
          <a href="/contact" className="btn-primary">
            Get Your Free Estimate Today
          </a>
        </div>
      </div>
    </section>
  );
}
