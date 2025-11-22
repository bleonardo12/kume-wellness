import Link from 'next/link';
import { Clock, Home, Phone } from 'lucide-react';

export default function CheckoutPendingPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <Clock className="w-20 h-20 text-yellow-500 mx-auto" />
        </div>

        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          Pago Pendiente
        </h1>

        <p className="text-gray-600 mb-8">
          Tu pago está siendo procesado. Te notificaremos por email cuando
          se confirme. También podés contactarnos si tenés dudas.
        </p>

        <div className="bg-secondary/50 rounded-lg p-4 mb-8 text-left">
          <p className="text-sm text-gray-600">
            <strong>¿Qué sigue?</strong>
          </p>
          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            <li>1. Esperá la confirmación por email</li>
            <li>2. Revisá tu cuenta de MercadoPago</li>
            <li>3. Si hay problemas, contactanos</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Volver al Inicio
          </Link>

          <a
            href="https://wa.me/5491112345678"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
}
