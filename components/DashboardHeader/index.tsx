type Props = {
  title: string;
  subtitle?: string;
};

export default function DashboardHeader({ title, subtitle }: Props) {
  return (
    <header className="mb-6 flex items-center justify-between gap-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-white">{title}</h1>
        {subtitle && (
          <p className="text-sm text-[#9A9AA3] mt-1">
            {subtitle}
          </p>
        )}
      </div>
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-[#1F1F23] border border-[#2A2A30]" />
        <div className="text-right">
          <div className="text-xs text-[#9A9AA3]">Profesional</div>
          <div className="text-sm font-medium text-white">Tu cuenta Charlie</div>
        </div>
      </div>
    </header>
  );
}
