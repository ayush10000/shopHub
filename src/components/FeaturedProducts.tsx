import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'The Manhattan Coat',
    price: 899,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'The Silk Evening Dress',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'The Classic Suit',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Featured Collection</h2>
            <p className="text-gray-600">Discover our most coveted pieces</p>
          </div>
          <button className="text-navy-900 font-medium inline-flex items-center group">
            View All
            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-navy-900">{product.name}</h3>
                <p className="text-gold-600">${product.price}</p>
              </div>
              <button className="absolute bottom-0 left-0 right-0 bg-navy-900 text-white py-4 opacity-0 translate-y-full transition-all group-hover:opacity-100 group-hover:translate-y-0">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}