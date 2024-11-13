import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const socialPosts = [
  {
    id: 1,
    type: 'instagram',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800',
    likes: '2.4k',
  },
  {
    id: 2,
    type: 'instagram',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
    likes: '3.1k',
  },
  {
    id: 3,
    type: 'instagram',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    likes: '1.8k',
  },
  {
    id: 4,
    type: 'instagram',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
    likes: '4.2k',
  },
];

export function SocialFeed() {
  return (
    <section className="py-24 bg-black-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Follow Our Story</h2>
          <p className="text-gray-600 mb-8">Join our community and stay inspired</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-navy-900 hover:text-gold-600 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-navy-900 hover:text-gold-600 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-navy-900 hover:text-gold-600 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialPosts.map((post) => (
            <div key={post.id} className="group relative">
              <div className="aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt="Social post"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                <p className="text-white font-medium">{post.likes} likes</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}