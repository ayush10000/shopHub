import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-with-a-black-and-white-outfit-39884-large.mp4"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Discover Timeless Elegance
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explore our curated collection of luxury fashion pieces designed for the modern connoisseur.
            </p>
            <button className="group bg-white text-navy-900 px-8 py-4 rounded-full font-medium inline-flex items-center transition-all hover:bg-gold-600 hover:text-white">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}