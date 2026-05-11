import { supabase } from './supabaseClient';

export async function getAgendaId() {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) throw new Error('User not logged in');

  const { data, error } = await supabase
    .from('agendas')
    .select('id')
    .eq('professional_id', user.id)
    .eq('is_default', true)
    .single();

  if (error) throw error;

  return data.id;
}
