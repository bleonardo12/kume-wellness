import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Küme Wellness</h3>
            <p className="text-gray-400 text-sm">
              Bienestar integral con Flores de Bach y tratamientos faciales profesionales.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#sobre-nosotros" className="hover:text-white">Sobre Nosotros</Link></li>
              <li><Link href="#servicios" className="hover:text-white">Servicios</Link></li>
              <li><Link href="#sesiones-premium" className="hover:text-white">Sesiones Premium</Link></li>
              <li><Link href="#contacto" className="hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Ubicaciones</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Villa Luro - CABA<br />Jue 13-20hs, Sáb 10-17hs</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Cid Campeador - CABA</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="https://wa.me/5491112345678" className="flex items-center gap-2 hover:text-white">
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:info@kumewellness.com" className="flex items-center gap-2 hover:text-white">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
              <li>
                <a href="https://instagram.com/kumewellness" className="flex items-center gap-2 hover:text-white">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Küme Wellness. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
