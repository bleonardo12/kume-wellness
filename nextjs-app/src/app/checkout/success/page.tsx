import Link from 'next/link';
import { CheckCircle, Home, Phone } from 'lucide-react';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <CheckCircle className="w-20 h-20 text-primary mx-auto" />
        </div>

        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          ¡Pedido Confirmado!
        </h1>

        <p className="text-gray-600 mb-8">
          Gracias por tu compra. Te enviaremos un email con los detalles de tu pedido
          y nos contactaremos contigo para coordinar fecha y horario.
        </p>

        <div className="bg-secondary/50 rounded-lg p-4 mb-8 text-left">
          <p className="text-sm text-gray-600">
            <strong>Próximos pasos:</strong>
          </p>
          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            <li>1. Revisá tu email para ver el resumen</li>
            <li>2. Te contactaremos por WhatsApp</li>
            <li>3. Confirmamos fecha y horario</li>
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
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
