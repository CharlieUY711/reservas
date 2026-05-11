'use client';

import { useAgenda } from '@/hooks/useAgenda';
import { useWeeklySlots } from '@/hooks/useWeeklySlots';
import { toggleSlot } from '@/hooks/useToggleSlot';
import { useState } from 'react';

export default function WeeklyGrid() {
  const agendaId = useAgenda();
  const [currentDate] = useState(new Date());
  const slots = useWeeklySlots(agendaId, currentDate);

  if (!agendaId) return <div>Cargando agenda...</div>;

  const handleToggle = async (day: string, hour: string) => {
    await toggleSlot(agendaId, day, hour);
  };

  return (
    <div>
      <h2>Weekly Grid</h2>
      <pre>{JSON.stringify(slots, null, 2)}</pre>

      {/* Ejemplo de toggle */}
      <button onClick={() => handleToggle('2025-05-10', '14:00')}>
        Toggle 14:00
      </button>
    </div>
  );
}
