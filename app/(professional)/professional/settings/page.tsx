import DashboardHeader from '@/components/DashboardHeader';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Configuración"
        subtitle="Datos del profesional, branding y métodos de cobro."
      />
      <div className="rounded-xl border border-[#1F1F23] bg-[#0D0D11] p-4 space-y-4">
        <div className="text-sm font-medium text-white">Perfil</div>
        <p className="text-sm text-[#9A9AA3]">
          Acá vas a poder editar tu nombre, descripción, foto de perfil y portada de tu agenda.
        </p>
        <div className="text-sm font-medium text-white mt-4">Cobros</div>
        <p className="text-sm text-[#9A9AA3]">
          Integración con Mercado Pago por profesional. (Próxima fase)
        </p>
      </div>
    </div>
  );
}
