"use client";

import DashboardHeader from '@/components/DashboardHeader';
import TicketsList from '@/components/TicketsList';

export default function TicketsPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Reservas"
        subtitle="Listado de reservas y estado de pago."
      />
      <div className="rounded-xl border border-[#1F1F23] bg-[#0D0D11] p-4">
        <TicketsList />
      </div>
    </div>
  );
}
