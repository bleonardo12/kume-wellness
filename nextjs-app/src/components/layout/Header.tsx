'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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

  const menuItems = [
    {
      label: 'Servicios',
      dropdown: true,
      items: [
        {
          label: 'Cosmetología',
          items: [
            { label: 'Esenciales', href: '#servicios' },
            {
              label: 'Premium',
              submenu: [
                { label: 'Holly - Hidratación 4D', href: '#servicios' },
                { label: 'Crabapple - Anti-Acné', href: '#servicios' },
                { label: 'Olive - Rejuvenecimiento', href: '#servicios' },
                { label: 'Renovación Celular Facial', href: '#servicios' },
                { label: 'Peeling de Algas Vegano', href: '#servicios' },
                { label: 'Anti Age Wellness', href: '#servicios' },
              ],
            },
          ],
        },
        {
          label: 'Corporales',
          items: [
            {
              label: 'Masajes',
              submenu: [
                { label: 'Holístico', href: '#servicios' },
                { label: 'Descontracturante', href: '#servicios' },
              ],
            },
            { label: 'Tratamiento para estrías', href: '#servicios' },
            { label: 'Podoestética', href: '#servicios' },
          ],
        },
        {
          label: 'Programas Especiales',
          items: [
            { label: 'Mamá en Armonía', href: '#mama-armonia' },
          ],
        },
      ],
    },
    { label: 'Wellness', href: '#wellness' },
    { label: 'Promociones', href: '#promociones' },
    { label: 'Spa Day', href: '#spa-day' },
    { label: 'Flores de Bach', href: '#wellness' },
    { label: 'Jornada de Depilación Láser', href: '#depilacion-laser' },
    { label: 'Contacto / Ubicaciones', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-primary">
            Küme Wellness
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                        {item.items?.map((subItem) => (
                          <div key={subItem.label} className="px-4 py-2">
                            <div className="font-semibold text-primary mb-1">{subItem.label}</div>
                            {subItem.items?.map((service) => {
                              if ('submenu' in service && service.submenu) {
                                return (
                                  <div key={service.label} className="ml-2 mb-2">
                                    <div className="text-sm font-medium text-gray-700 mb-1">{service.label}</div>
                                    {service.submenu.map((sub) => (
                                      <Link
                                        key={sub.label}
                                        href={sub.href}
                                        className="block text-sm text-gray-600 hover:text-primary py-1 ml-2"
                                      >
                                        • {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                );
                              }
                              return (
                                <Link
                                  key={service.label}
                                  href={service.href}
                                  className="block text-sm text-gray-600 hover:text-primary py-1 ml-2"
                                >
                                  • {service.label}
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {mounted && itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-medium"
            >
              RESERVAR TURNO
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700"
            >
              <ShoppingCart className="w-6 h-6" />
              {mounted && itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 max-h-[80vh] overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.label} className="py-2">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="flex items-center justify-between w-full text-gray-700 hover:text-primary font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.items?.map((subItem) => (
                          <div key={subItem.label}>
                            <div className="font-semibold text-primary text-sm">{subItem.label}</div>
                            {subItem.items?.map((service) => {
                              if ('submenu' in service && service.submenu) {
                                return (
                                  <div key={service.label} className="ml-2 mt-1">
                                    <div className="text-sm font-medium text-gray-700">{service.label}</div>
                                    {service.submenu.map((sub) => (
                                      <Link
                                        key={sub.label}
                                        href={sub.href}
                                        className="block text-sm text-gray-600 hover:text-primary py-1 ml-2"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        • {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                );
                              }
                              return (
                                <Link
                                  key={service.label}
                                  href={service.href}
                                  className="block text-sm text-gray-600 hover:text-primary py-1 ml-2"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  • {service.label}
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="block text-gray-700 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                handleWhatsApp();
                setIsMenuOpen(false);
              }}
              className="block w-full mt-4 bg-primary text-white px-6 py-2 rounded-full text-center font-medium"
            >
              RESERVAR TURNO
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
