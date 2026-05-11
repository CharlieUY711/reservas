import { NextResponse } from 'next/server';
import { serverSupabase } from '@/lib/serverSupabase';
import { startOfWeek, addDays } from 'date-fns';

export async function GET(req: Request) {
  const supabase = serverSupabase();
  const { searchParams } = new URL(req.url);

  const agendaId = searchParams.get('agenda_id');
  const date = searchParams.get('date');

  if (!agendaId || !date) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 });
  }

  const weekStart = startOfWeek(new Date(date), { weekStartsOn: 1 });
  const weekEnd = addDays(weekStart, 6);

  const { data, error } = await supabase
    .from('slots')
    .select('*')
    .eq('agenda_id', agendaId)
    .gte('day', weekStart.toISOString().slice(0, 10))
    .lte('day', weekEnd.toISOString().slice(0, 10));

  if (error) return NextResponse.json({ error }, { status: 500 });

  return NextResponse.json(data);
}
