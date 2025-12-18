'use client';

import { services, getServicesByCategory } from '@/data/services';
import ServiceCard from '@/components/services/ServiceCard';
import { useState } from 'react';

type Category = 'all' | 'facial' | 'premium' | 'masajes' | 'corporales' | 'especial';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'Todos' },
    { key: 'facial', label: 'Cosmetología' },
    { key: 'premium', label: 'Premium' },
    { key: 'masajes', label: 'Masajes' },
    { key: 'corporales', label: 'Corporales' },
    { key: 'especial', label: 'Programas Especiales' },
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : getServicesByCategory(activeCategory);

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tratamientos personalizados con productos de primera calidad y técnicas profesionales.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all shadow-md ${
                activeCategory === cat.key
                  ? 'bg-primary text-white scale-105 shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Tuesday Promo Banner */}
        <div className="mt-12 bg-gradient-to-r from-accent via-primary/20 to-accent rounded-2xl p-8 text-center shadow-lg border-2 border-primary/30">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
            ¡Todos los martes del mes valor promocional!
          </h3>
          <p className="text-lg text-gray-700 font-medium">
            Consultá por tu descuento especial
          </p>
        </div>

        {/* Cash Discount Disclaimer */}
        <div className="mt-6 bg-white/80 rounded-xl p-4 text-center border border-gray-200">
          <p className="text-sm text-gray-600">
            💰 <span className="font-semibold">15% de descuento</span> en efectivo o transferencia bancaria
          </p>
        </div>
      </div>
    </section>
  );
}
