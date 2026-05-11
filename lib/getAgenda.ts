import { serverSupabase } from "@/lib/serverSupabase";

export async function getAgenda() {
  const supabase = serverSupabase();
  const { data } = await supabase.from("agenda").select("*");
  return data;
}
