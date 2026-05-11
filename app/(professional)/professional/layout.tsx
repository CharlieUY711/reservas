import Sidebar from '@/components/Sidebar';
import '@/app/globals.css';

export default function ProfessionalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white flex">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <div className="max-w-6xl w-full mx-auto px-6 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}
