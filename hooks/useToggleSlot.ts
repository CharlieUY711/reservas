export async function toggleSlot(agendaId: string, day: string, hour: string, color?: string, label?: string) {
  const res = await fetch('/api/professional/slots/toggle', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      agenda_id: agendaId,
      day,
      hour,
      color,
      label
    }),
  });

  if (!res.ok) throw new Error('Error toggling slot');

  return res.json();
}
