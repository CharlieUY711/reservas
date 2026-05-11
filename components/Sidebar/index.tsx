'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/professional/dashboard', label: 'Dashboard' },
  { href: '/professional/agenda', label: 'Agenda' },
  { href: '/professional/tickets', label: 'Reservas' },
  { href: '/professional/settings', label: 'Configuración' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={\h-screen border-r border-[#1F1F23] bg-[#050506] transition-all duration-200 flex flex-col
      \\}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#1F1F23]">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#FF7A1A] to-[#FFB347]" />
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide">Charlie</span>
              <span className="text-[11px] text-[#8A8A93] uppercase">Reservas</span>
            </div>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-[#8A8A93] hover:text-white text-xs"
        >
          {collapsed ? '›' : '‹'}
        </button>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={\
                flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium
                transition-colors
                \
              \}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-[#1F1F23] text-[11px] text-[#6F6F78]">
        {!collapsed && (
          <>
            <div className="font-medium text-[#D4D4DD]">Panel Charlie</div>
            <div>Optimizado para agenda, reservas y cobros.</div>
          </>
        )}
      </div>
    </aside>
  );
}
