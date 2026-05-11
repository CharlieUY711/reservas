import { NextResponse } from 'next/server';
import { serverSupabase } from '@/lib/serverSupabase';

export async function POST(req: Request) {
  const supabase = serverSupabase();
  const body = await req.json();

  const paymentId = body.data?.id;

  if (!paymentId) return NextResponse.json({ received: true });

  const mpRes = await fetch("https://api.mercadopago.com/v1/payments/", {
    headers: {
      Authorization: "Bearer TU_TOKEN_AQUI"
    }
  });

  const payment = await mpRes.json();
  const ticketId = payment.external_reference;

  if (payment.status === 'approved') {
    await supabase
      .from('tickets')
      .update({ status: 'paid', mp_payment_id: paymentId })
      .eq('id', ticketId);

    await supabase
      .from('slots')
      .update({ status: 'booked' })
      .eq('id', payment.metadata.slot_id);
  }

  return NextResponse.json({ received: true });
}
