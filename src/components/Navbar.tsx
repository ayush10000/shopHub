import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-navy-900">LUXE</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-navy-900 hover:text-gold-600 transition-colors">New Arrivals</a>
            <a href="#" className="text-navy-900 hover:text-gold-600 transition-colors">Collections</a>
            <a href="#" className="text-navy-900 hover:text-gold-600 transition-colors">About</a>
            <a href="#" className="text-navy-900 hover:text-gold-600 transition-colors">Journal</a>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-navy-900 hover:text-gold-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-navy-900 hover:text-gold-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="text-navy-900 hover:text-gold-600 transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'h-64' : 'h-0'
      } overflow-hidden bg-white`}>
        <div className="px-4 py-2 space-y-4">
          <a href="#" className="block text-navy-900 hover:text-gold-600">New Arrivals</a>
          <a href="#" className="block text-navy-900 hover:text-gold-600">Collections</a>
          <a href="#" className="block text-navy-900 hover:text-gold-600">About</a>
          <a href="#" className="block text-navy-900 hover:text-gold-600">Journal</a>
        </div>
      </div>
    </nav>
  );
}