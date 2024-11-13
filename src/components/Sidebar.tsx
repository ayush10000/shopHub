import React from 'react';
import { Sparkles, TrendingUp, UserPlus, Share2 } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-black/90 backdrop-blur-md z-40 flex flex-col items-center pt-8 space-y-8">
      <button className="text-white hover:text-gold-600 transition-all group">
        <Sparkles className="h-6 w-6" />
        <span className="text-xs mt-1 block">New</span>
      </button>

      <button className="text-white hover:text-gold-600 transition-all group">
        <TrendingUp className="h-6 w-6" />
        <span className="text-xs mt-1 block">Trending</span>
      </button>

      <button className="text-white hover:text-gold-600 transition-all group">
        <UserPlus className="h-6 w-6" />
        <span className="text-xs mt-1 block">For You</span>
      </button>

      <button className="text-white hover:text-gold-600 transition-all group">
        <Share2 className="h-6 w-6" />
        <span className="text-xs mt-1 block">Share</span>
      </button>
    </div>
  );
}