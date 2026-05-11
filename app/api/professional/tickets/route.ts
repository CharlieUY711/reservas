import { NextResponse } from 'next/server';
import { serverSupabase } from '@/lib/serverSupabase';

export async function GET() {
  const supabase = serverSupabase();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json([], { status: 200 });
  }

  const { data, error } = await supabase
    .from('tickets')
    .select('*')
    .eq('professional_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json([], { status: 200 });
  }

  return NextResponse.json(data || []);
}
