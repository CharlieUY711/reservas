import { useEffect, useState } from 'react';

export function useWeeklySlots(agendaId: string | null, currentDate: Date) {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    if (!agendaId) return;

    const load = async () => {
      const params = new URLSearchParams({
        agenda_id: agendaId,
        date: currentDate.toISOString(),
      });

      const res = await fetch(/api/slots?);
      const data = await res.json();
      setSlots(data);
    };

    load();
  }, [agendaId, currentDate]);

  return slots;
}
