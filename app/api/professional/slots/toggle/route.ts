import { NextResponse } from 'next/server';
import { serverSupabase } from '@/lib/serverSupabase';

export async function POST(req: Request) {
  const supabase = serverSupabase();
  const body = await req.json();

  const { agenda_id, day, hour, color, label } = body;

  if (!agenda_id || !day || !hour) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 });
  }

  const { data: existing } = await supabase
    .from('slots')
    .select('*')
    .eq('agenda_id', agenda_id)
    .eq('day', day)
    .eq('hour', hour)
    .maybeSingle();

  if (!existing) {
    const { data, error } = await supabase
      .from('slots')
      .insert({
        agenda_id,
        day,
        hour,
        status: 'available',
        color,
        label
      })
      .select()
      .single();

    if (error) return NextResponse.json({ error }, { status: 500 });
    return NextResponse.json(data);
  }

  const newStatus = existing.status === 'available' ? 'blocked' : 'available';

  const { data, error } = await supabase
    .from('slots')
    .update({
      status: newStatus,
      color,
      label
    })
    .eq('id', existing.id)
    .select()
    .single();

  if (error) return NextResponse.json({ error }, { status: 500 });

  return NextResponse.json(data);
}
