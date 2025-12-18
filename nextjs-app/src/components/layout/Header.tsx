'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, ChevronDown, ChevronRight } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { toggleCart, getItemCount } = useCartStore();
  const itemCount = getItemCount();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleWhatsApp = () => {
    const phone = '5491166269356';
    const message = encodeURIComponent('Hola Espacio Kume, quisiera reservar mi turno..');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  // Estructura simplificada del menú
  const servicios = [
    {
      id: 'cosmetologia',
      label: 'Cosmetología',
      items: [
        { label: 'Esenciales', href: '#servicios' },
        { label: 'Holly - Hidratación 4D', href: '#servicios' },
        { label: 'Crabapple - Anti-Acné', href: '#servicios' },
        { label: 'Olive - Rejuvenecimiento', href: '#servicios' },
        { label: 'Renovación Celular Facial', href: '#servicios' },
        { label: 'Peeling de Algas Vegano', href: '#servicios' },
        { label: 'Anti Age Wellness', href: '#servicios' },
      ],
    },
    {
      id: 'corporales',
      label: 'Corporales',
      items: [
        { label: 'Masaje Holístico', href: '#servicios' },
        { label: 'Masaje Descontracturante', href: '#servicios' },
        { label: 'Tratamiento para estrías', href: '#servicios' },
        { label: 'Podoestética', href: '#servicios' },
      ],
    },
    {
      id: 'programas',
      label: 'Programas Especiales',
      items: [
        { label: 'Mamá en Armonía', href: '#mama-armonia' },
      ],
    },
  ];

  const serviciosWellness = [
    { label: 'Spa Full Day', href: '#promociones' },
    { label: 'Flores de Bach', href: '#wellness' },
    { label: 'Depilación Láser', href: '#depilacion-laser' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/95 to-accent/95 backdrop-blur-sm shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-serif font-bold text-white hover:text-white/90 transition-colors"
          >
            Küme Wellness
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Servicios Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('servicios')}
              onMouseLeave={() => {
                setOpenDropdown(null);
                setOpenSubmenu(null);
              }}
            >
              <button className="flex items-center gap-1 text-white hover:text-white/80 transition-colors font-medium text-lg">
                Servicios
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'servicios' && (
                <div className="absolute top-full left-0 mt-0 w-72 bg-white shadow-2xl rounded-lg overflow-hidden">
                  {servicios.map((categoria) => (
                    <div key={categoria.id} className="border-b border-gray-100 last:border-0">
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === categoria.id ? null : categoria.id)}
                        onMouseEnter={() => setOpenSubmenu(categoria.id)}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                      >
                        <span className="font-semibold text-primary">{categoria.label}</span>
                        <ChevronRight className={`w-4 h-4 text-primary transition-transform ${openSubmenu === categoria.id ? 'rotate-90' : ''}`} />
                      </button>
                      {openSubmenu === categoria.id && (
                        <div className="bg-gray-50 px-4 py-2">
                          {categoria.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block text-sm text-gray-700 hover:text-primary py-2 hover:pl-2 transition-all"
                            >
                              • {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Servicios Wellness Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('wellness')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-white hover:text-white/80 transition-colors font-medium text-lg">
                Experiencias Wellness
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'wellness' && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-2xl rounded-lg py-2">
                  {serviciosWellness.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-secondary/50 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contacto */}
            <Link
              href="#contacto"
              className="text-white hover:text-white/80 transition-colors font-medium text-lg"
            >
              Contacto
            </Link>

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-white hover:text-white/80 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {mounted && itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-primary text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Reservar Turno */}
            <button
              onClick={handleWhatsApp}
              className="bg-white text-primary px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors font-bold text-lg shadow-lg"
            >
              RESERVAR TURNO
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleCart}
              className="relative p-2 text-white"
            >
              <ShoppingCart className="w-6 h-6" />
              {mounted && itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-primary text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4 max-h-[80vh] overflow-y-auto">
            {/* Servicios Mobile */}
            <div className="py-2">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'servicios' ? null : 'servicios')}
                className="flex items-center justify-between w-full text-white hover:text-white/80 font-bold text-lg"
              >
                Servicios
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === 'servicios' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown === 'servicios' && (
                <div className="mt-2 ml-4 space-y-2">
                  {servicios.map((categoria) => (
                    <div key={categoria.id}>
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === categoria.id ? null : categoria.id)}
                        className="flex items-center justify-between w-full text-white/90 font-semibold text-sm py-2"
                      >
                        {categoria.label}
                        <ChevronRight className={`w-4 h-4 transition-transform ${openSubmenu === categoria.id ? 'rotate-90' : ''}`} />
                      </button>
                      {openSubmenu === categoria.id && (
                        <div className="ml-4 space-y-1">
                          {categoria.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block text-sm text-white/80 hover:text-white py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              • {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Servicios Wellness Mobile */}
            <div className="py-2">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'wellness' ? null : 'wellness')}
                className="flex items-center justify-between w-full text-white hover:text-white/80 font-bold text-lg"
              >
                Experiencias Wellness
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === 'wellness' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown === 'wellness' && (
                <div className="mt-2 ml-4 space-y-2">
                  {serviciosWellness.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block text-white/80 hover:text-white text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      • {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contacto Mobile */}
            <Link
              href="#contacto"
              className="block py-2 text-white hover:text-white/80 font-bold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>

            {/* Reservar Turno Mobile */}
            <button
              onClick={() => {
                handleWhatsApp();
                setIsMenuOpen(false);
              }}
              className="block w-full mt-4 bg-white text-primary px-6 py-3 rounded-full text-center font-bold shadow-lg"
            >
              RESERVAR TURNO
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
