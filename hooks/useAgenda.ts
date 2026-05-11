"use client";

import { useEffect, useState } from "react";
import { getAgenda } from "@/lib/getAgenda";

export function useAgenda() {
  const [agenda, setAgenda] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getAgenda();
      setAgenda(data);
    }
    load();
  }, []);

  return { agenda };
}
