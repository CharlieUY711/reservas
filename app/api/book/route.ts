import { NextResponse } from 'next/server';
import { serverSupabase } from '@/lib/serverSupabase';

export async function POST(req: Request) {
  const supabase = serverSupabase();
  const body = await req.json();

  const { slot_id, client_id } = body;

  if (!slot_id || !client_id) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 });
  }

  const { data: slot } = await supabase
    .from('slots')
    .select('*, agendas(professional_id)')
    .eq('id', slot_id)
    .single();

  if (!slot || slot.status !== 'available') {
    return NextResponse.json({ error: 'Slot not available' }, { status: 400 });
  }

  const professionalId = slot.agendas.professional_id;

  const { data: ticket, error: ticketError } = await supabase
    .from('tickets')
    .insert({
      professional_id: professionalId,
      client_id,
      slot_id,
      status: 'pending'
    })
    .select()
    .single();

  if (ticketError) return NextResponse.json({ error: ticketError }, { status: 500 });

  return NextResponse.json({
    ticket_id: ticket.id,
    message: 'Ticket created. Now generate payment preference.'
  });
}
