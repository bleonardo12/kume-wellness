import Link from 'next/link';
import { XCircle, Home, RefreshCw } from 'lucide-react';

export default function CheckoutFailurePage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <XCircle className="w-20 h-20 text-red-500 mx-auto" />
        </div>

        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          Pago no procesado
        </h1>

        <p className="text-gray-600 mb-8">
          Hubo un problema al procesar tu pago. Por favor intentá nuevamente
          o elegí otro método de pago.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/checkout"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Intentar de nuevo
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <Home className="w-4 h-4" />
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
