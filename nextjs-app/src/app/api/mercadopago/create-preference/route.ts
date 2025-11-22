import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, items, payer, total } = body;

    // Verificar que tenemos el access token
    if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: 'MercadoPago no está configurado' },
        { status: 500 }
      );
    }

    // Configurar MercadoPago
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
    });

    const preference = new Preference(client);

    // Crear preferencia de pago
    const result = await preference.create({
      body: {
        items: items.map((item: any) => ({
          id: item.serviceId,
          title: item.name,
          quantity: item.quantity,
          unit_price: item.price,
          currency_id: 'ARS',
        })),
        payer: {
          name: payer.name,
          email: payer.email,
          phone: {
            number: payer.phone,
          },
        },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?order=${orderId}`,
          failure: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/failure?order=${orderId}`,
          pending: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/pending?order=${orderId}`,
        },
        auto_return: 'approved',
        external_reference: orderId,
        notification_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/mercadopago`,
        statement_descriptor: 'KUME WELLNESS',
      },
    });

    return NextResponse.json({
      success: true,
      preferenceId: result.id,
      initPoint: result.init_point,
      sandboxInitPoint: result.sandbox_init_point,
    });
  } catch (error) {
    console.error('MercadoPago error:', error);
    return NextResponse.json(
      { error: 'Error al crear preferencia de pago' },
      { status: 500 }
    );
  }
}
