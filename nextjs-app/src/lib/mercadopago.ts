import { MercadoPagoConfig, Preference } from 'mercadopago';

// Server-side only - use in API routes
export const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export const createPreference = async (items: any[], payer: any, orderId: string) => {
  const preference = new Preference(mercadopago);
  
  return preference.create({
    body: {
      items: items.map(item => ({
        id: item.id,
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
    },
  });
};
