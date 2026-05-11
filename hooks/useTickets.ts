import { useEffect, useState } from 'react';

export type Ticket = {
  id: string;
  status: string;
  created_at: string;
  mp_payment_id: string | null;
};

export function useTickets() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const res = await fetch('/api/professional/tickets');
      const data = await res.json();
      setTickets(data || []);
      setLoading(false);
    };
    load();
  }, []);

  return { tickets, loading };
}
