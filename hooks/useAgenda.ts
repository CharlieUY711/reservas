"use client";

import { useEffect, useState } from "react";
import { getAgenda } from "@/lib/getAgenda";

export function useAgenda() {
  const [agendaId, setAgendaId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const data = await getAgenda();

      // Si tu tabla agenda tiene un campo id:
      if (data && data.length > 0) {
        setAgendaId(data[0].id);
      }
    }

    load();
  }, []);

  return agendaId;
}
