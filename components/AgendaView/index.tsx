type Props = {
  children?: React.ReactNode;
};

export default function AgendaView({ children }: Props) {
  return (
    <div className="rounded-xl border border-[#1F1F23] bg-[#0D0D11] p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-medium text-white">Tu agenda</div>
        <div className="text-xs text-[#9A9AA3]">Vista semanal</div>
      </div>
      <div className="text-sm text-[#9A9AA3] mb-3">
        Acá va tu WeeklyGrid conectado a Supabase.
      </div>
      {children}
    </div>
  );
}
