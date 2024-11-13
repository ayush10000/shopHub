import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { SocialFeed } from './components/SocialFeed';
import { VideoFeed } from './components/VideoFeed';
import { Sidebar } from './components/Sidebar';
import { Store } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<'video' | 'main'>('video');

  return (
    <div className="min-h-screen bg-white">
      {currentView === 'main' && <Navbar />}
      
      {/* View Toggle */}
      <button 
        onClick={() => setCurrentView(current => current === 'main' ? 'video' : 'main')}
        className="fixed bottom-6 right-6 z-50 bg-navy-900 text-white p-4 rounded-full shadow-lg hover:bg-gold-600 transition-colors"
      >
        <Store className="h-6 w-6" />
      </button>

      {currentView === 'video' ? (
        <div className="flex">
          <Sidebar />
          <VideoFeed />
        </div>
      ) : (
        <>
          <Hero />
          <FeaturedProducts />
          <SocialFeed />
        </>
      )}
    </div>
  );
}

export default App;