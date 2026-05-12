import DashboardHeader from '@/components/DashboardHeader';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Dashboard"
        subtitle="Resumen de tu actividad, agenda y reservas."
      />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-[#1F1F23] bg-[#0D0D11] p-4">
          <div className="text-xs text-[#9A9AA3] mb-1">Próximas reservas</div>
          <div className="text-2xl font-semibold text-white">—</div>
        </div>
        <div className="rounded-xl border border-[#1F1F23] bg-[#0D0D11] p-4">
          <div className="text-xs text-[#9A9AA3] mb-1">Ingresos estimados</div>
          <div className="text-2xl font-semibold text-white">—</div>
        </div>
        <div className="rounded-xl border border-[#1F1F23] bg-[#0D0D11] p-4">
          <div className="text-xs text-[#9A9AA3] mb-1">Ocupación semanal</div>
          <div className="text-2xl font-semibold text-white">—</div>
        </div>
      </section>

      <section className="rounded-xl border border-[#1F1F23] bg-[#0D0D11] p-4">
        <div className="text-sm font-medium text-white mb-2">Actividad reciente</div>
        <p className="text-sm text-[#9A9AA3]">
          Acá vas a ver las últimas reservas, pagos y cambios en tu agenda.
        </p>
      </section>
    </div>
  );
}
