'use client';

import { Service } from '@/types';
import { useCartStore } from '@/store/cart-store';
import { ShoppingCart, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = () => {
    addItem(service, 'villa-luro');
    toast.success(`${service.name} agregado al carrito`);
    openCart();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
          {service.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          {service.shortDescription}
        </p>

        {service.duration && (
          <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
            <Clock className="w-4 h-4" />
            {service.duration}
          </div>
        )}

        <ul className="space-y-1 mb-4">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <span className="text-2xl font-bold text-primary">
              {formatPrice(service.price)}
            </span>
            {service.discountPrice && (
              <div className="text-xs text-accent">
                Martes: {formatPrice(service.discountPrice)}
              </div>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
