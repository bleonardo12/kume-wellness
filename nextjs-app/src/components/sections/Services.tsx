'use client';

import { services, getServicesByCategory } from '@/data/services';
import ServiceCard from '@/components/services/ServiceCard';
import { useState } from 'react';

type Category = 'all' | 'premium' | 'facial' | 'masajes' | 'especial';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'Todos' },
    { key: 'premium', label: 'Sesiones Premium' },
    { key: 'facial', label: 'Faciales' },
    { key: 'masajes', label: 'Masajes' },
    { key: 'especial', label: 'Especiales' },
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : getServicesByCategory(activeCategory);

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tratamientos personalizados con productos de primera calidad y técnicas profesionales.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === cat.key
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
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
        <div className="mt-12 bg-accent/20 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Promoción Martes
          </h3>
          <p className="text-gray-600">
            Todos los martes disfrutá de descuentos especiales en nuestras sesiones premium.
          </p>
        </div>
      </div>
    </section>
  );
}
