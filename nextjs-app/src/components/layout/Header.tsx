'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart, getItemCount } = useCartStore();
  const itemCount = getItemCount();

  const navLinks = [
    { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#sesiones-premium', label: 'Sesiones Premium' },
    { href: '#contacto', label: 'Contacto' },
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
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            <Link
              href="#reservas"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Reservar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
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
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#reservas"
              className="block mt-4 bg-primary text-white px-6 py-2 rounded-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservar
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
