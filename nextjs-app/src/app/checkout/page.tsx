'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCartStore } from '@/store/cart-store';
import { ArrowLeft, CreditCard, Banknote, Building2, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

type PaymentMethod = 'mercadopago' | 'transfer' | 'cash';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal, clearCart, removeItem } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'villa-luro' as 'villa-luro' | 'cid-campeador',
    paymentMethod: 'mercadopago' as PaymentMethod,
    comments: '',
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const subtotal = getTotal();
  const cardSurcharge = formData.paymentMethod === 'mercadopago' ? subtotal * 0.20 : 0;
  const total = subtotal + cardSurcharge;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      toast.error('Tu carrito está vacío');
      return;
    }

    setIsLoading(true);

    try {
      const orderData = {
        items: items.map(item => ({
          serviceId: item.service.id,
          name: item.service.name,
          price: item.service.price,
          quantity: item.quantity,
        })),
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        location: formData.location,
        paymentMethod: formData.paymentMethod,
        subtotal,
        surcharge: cardSurcharge,
        total,
        comments: formData.comments,
      };

      // Crear orden en base de datos
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al crear la orden');
      }

      const orderId = result.orderId;

      if (formData.paymentMethod === 'mercadopago') {
        // Crear preferencia de pago en MercadoPago
        const mpResponse = await fetch('/api/mercadopago/create-preference', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderId,
            items: orderData.items,
            payer: orderData.customer,
            total,
          }),
        });

        const mpResult = await mpResponse.json();

        if (!mpResponse.ok) {
          throw new Error(mpResult.error || 'Error al crear pago');
        }

        toast.success('Redirigiendo a MercadoPago...');
        clearCart();

        // Redirigir a MercadoPago
        window.location.href = mpResult.initPoint;
        return;
      } else {
        // Transferencia o efectivo
        toast.success('Pedido confirmado! Te contactaremos pronto.');
        clearCart();
        router.push(`/checkout/success?order=${orderId}`);
      }
    } catch (error) {
      toast.error('Error al procesar el pedido');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-2xl font-serif font-bold mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">Agregá servicios para continuar con tu compra.</p>
          <Link
            href="/#servicios"
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Ver Servicios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="text-3xl font-serif font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Tus Datos</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="11-1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ubicación *
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value as any })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="villa-luro">Villa Luro - CABA</option>
                  <option value="cid-campeador">Cid Campeador - CABA</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Método de pago *
                </label>
                <div className="space-y-2">
                  <label className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                    formData.paymentMethod === 'mercadopago' ? 'border-primary bg-primary/5' : 'hover:bg-gray-50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mercadopago"
                      checked={formData.paymentMethod === 'mercadopago'}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as PaymentMethod })}
                      className="text-primary"
                    />
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <div>
                      <span className="font-medium">MercadoPago</span>
                      <span className="text-xs text-accent ml-2">(+20% recargo)</span>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                    formData.paymentMethod === 'transfer' ? 'border-primary bg-primary/5' : 'hover:bg-gray-50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="transfer"
                      checked={formData.paymentMethod === 'transfer'}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as PaymentMethod })}
                      className="text-primary"
                    />
                    <Building2 className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">Transferencia bancaria</span>
                  </label>

                  <label className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                    formData.paymentMethod === 'cash' ? 'border-primary bg-primary/5' : 'hover:bg-gray-50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as PaymentMethod })}
                      className="text-primary"
                    />
                    <Banknote className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">Efectivo en el local</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Comentarios adicionales
                </label>
                <textarea
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={3}
                  placeholder="Alguna preferencia o información adicional..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white py-3 rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Procesando...' : `Confirmar Pedido - ${formatPrice(total)}`}
              </button>
            </form>
          </div>

          {/* Resumen del carrito */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Resumen del Pedido</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.service.id} className="flex justify-between items-start pb-4 border-b">
                    <div className="flex-1">
                      <h3 className="font-medium">{item.service.name}</h3>
                      <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                    </div>
                    <div className="text-right flex items-center gap-2">
                      <span className="font-semibold">
                        {formatPrice(item.service.price * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeItem(item.service.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                {cardSurcharge > 0 && (
                  <div className="flex justify-between text-accent">
                    <span>Recargo tarjeta (20%)</span>
                    <span>{formatPrice(cardSurcharge)}</span>
                  </div>
                )}

                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-secondary/50 rounded-lg text-sm text-gray-600">
              <p className="font-medium mb-2">Información importante:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Te contactaremos para confirmar fecha y horario</li>
                <li>Cancelaciones con 24hs de anticipación</li>
                <li>Promociones martes no acumulables</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
