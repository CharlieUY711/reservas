"use client";
import { useEffect, useState } from 'react';
import { getAgendaId } from '@/lib/getAgenda';

export function useAgenda() {
  const [agendaId, setAgendaId] = useState<string | null>(null);

  useEffect(() => {
    getAgendaId().then(setAgendaId).catch(console.error);
  }, []);

  return agendaId;
}
