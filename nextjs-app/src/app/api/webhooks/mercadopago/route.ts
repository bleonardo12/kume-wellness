import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Verificar el tipo de notificación
    if (body.type !== 'payment') {
      return NextResponse.json({ received: true });
    }

    const paymentId = body.data.id;

    // Configurar MercadoPago
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
    });

    // Obtener información del pago
    const payment = new Payment(client);
    const paymentInfo = await payment.get({ id: paymentId });

    const orderId = paymentInfo.external_reference;
    const status = paymentInfo.status;

    // Mapear estado de MercadoPago a nuestro estado
    let orderStatus: string;
    switch (status) {
      case 'approved':
        orderStatus = 'paid';
        break;
      case 'pending':
      case 'in_process':
        orderStatus = 'pending';
        break;
      case 'rejected':
      case 'cancelled':
        orderStatus = 'cancelled';
        break;
      default:
        orderStatus = 'pending';
    }

    // Actualizar orden en base de datos
    const { error } = await supabase
      .from('orders')
      .update({
        status: orderStatus,
        payment_id: paymentId.toString(),
      })
      .eq('id', orderId);

    if (error) {
      console.error('Error updating order:', error);
      return NextResponse.json(
        { error: 'Error updating order' },
        { status: 500 }
      );
    }

    console.log(`Order ${orderId} updated to status: ${orderStatus}`);

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing error' },
      { status: 500 }
    );
  }
}
