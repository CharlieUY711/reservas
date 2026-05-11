import { useTickets } from '@/hooks/useTickets';

export default function TicketsList() {
  const { tickets, loading } = useTickets();

  if (loading) {
    return <div className="text-sm text-[#9A9AA3]">Cargando reservas...</div>;
  }

  if (!tickets.length) {
    return <div className="text-sm text-[#9A9AA3]">Todavía no tenés reservas.</div>;
  }

  return (
    <div className="space-y-2">
      {tickets.map((t) => (
        <div
          key={t.id}
          className="flex items-center justify-between rounded-lg border border-[#1F1F23] bg-[#0D0D11] px-3 py-2 text-sm"
        >
          <div className="flex flex-col">
            <span className="text-white font-medium">Reserva</span>
            <span className="text-[11px] text-[#9A9AA3]">
              {new Date(t.created_at).toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-wide text-[#FF7A1A]">
              {t.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
