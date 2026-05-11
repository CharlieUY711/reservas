"use client";

import { useState } from "react";
import { useAgenda } from "@/hooks/useAgenda";
import { useWeeklySlots } from "@/hooks/useWeeklySlots";

export default function WeeklyGrid() {
  const agendaId = useAgenda();
  const [currentDate] = useState(new Date());

  if (!agendaId) return <div>Cargando agenda...</div>;

  const slots = useWeeklySlots(agendaId, currentDate);

  return (
    <div>
      {/* render slots */}
    </div>
  );
}
