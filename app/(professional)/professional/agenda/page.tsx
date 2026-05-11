import DashboardHeader from '@/components/DashboardHeader';
import AgendaView from '@/components/AgendaView';
import WeeklyGrid from '@/components/WeeklyGrid';

export default function AgendaPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Agenda"
        subtitle="Gestioná tu disponibilidad y horarios."
      />
      <AgendaView>
        <WeeklyGrid />
      </AgendaView>
    </div>
  );
}
