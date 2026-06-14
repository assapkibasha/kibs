import { Navigation } from "@/components/ui/navigation";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-x-clip bg-[var(--color-bg)] text-[var(--color-foreground)]">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-glow),_transparent_34%),radial-gradient(circle_at_85%_15%,_var(--color-accent-glow),_transparent_22%),linear-gradient(180deg,var(--color-bg),var(--color-bg))]" />
        <div className="absolute inset-0 bg-[linear-gradient(var(--color-grid)_1px,transparent_1px),linear-gradient(90deg,var(--color-grid)_1px,transparent_1px)] bg-[size:108px_108px] opacity-[0.35]" />
      </div>
      <Navigation />
      <main className="relative z-10">{children}</main>
    </div>
  );
}
