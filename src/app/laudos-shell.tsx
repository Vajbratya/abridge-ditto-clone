import type { ReactNode } from "react";
import { footerGroups, groupCounts, navLinks } from "./laudos-page-utils";

export function LaudosHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-clr-7 bg-background">
      <div className="mx-auto flex h-15 max-w-400 items-center justify-between px-6 lg:px-[4.9375rem] 2xl:px-24">
        <a href="/" className="flex items-center gap-3" aria-label="Laudos.AI">
          <img src="/assets/laudos/icon.svg" alt="" className="h-7 w-7 rounded-sm" />
          <span className="text-[15px] font-semibold tracking-[0.02em] text-foreground">LAUDOS.AI</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-color-004 transition hover:bg-clr-8 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/laudo"
            className="hidden rounded-sm border border-foreground px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-clr-8 sm:inline-flex"
          >
            Abrir editor
          </a>
          <a
            href="/contato"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-background transition hover:bg-clr-9"
          >
            Agendar demo
          </a>
        </div>
      </div>
    </header>
  );
}

export function LaudosFooter() {
  return (
    <footer className="border-t border-clr-7 bg-background text-foreground">
      <div className="mx-auto grid max-w-400 gap-12 px-6 py-14 lg:grid-cols-[1.2fr_2fr] lg:px-[4.9375rem] 2xl:px-24">
        <div>
          <a href="/" className="inline-flex items-center gap-3">
            <img src="/assets/laudos/icon.svg" alt="" className="h-8 w-8 rounded-sm" />
            <span className="text-sm font-semibold tracking-[0.02em] text-foreground">LAUDOS.AI</span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
            Camada assistiva para laudos médicos em radiologia. Não somos telerradiologia:
            a IA estrutura o texto, o radiologista revisa, edita e assina.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-primary">
            <span className="rounded-full border border-clr-4 px-3 py-1">LGPD</span>
            <span className="rounded-full border border-clr-4 px-3 py-1">Dados no Brasil</span>
            <span className="rounded-full border border-clr-4 px-3 py-1">Revisão médica obrigatória</span>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-muted-foreground transition hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-400 flex-col gap-3 border-t border-clr-7 px-6 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-[4.9375rem] 2xl:px-24">
        <span>Laudos.AI © 2026</span>
        <div className="flex gap-4">
          <a href="/privacidade" className="hover:text-primary">Privacidade</a>
          <a href="/termos" className="hover:text-primary">Termos</a>
          <a href="/lgpd" className="hover:text-primary">LGPD</a>
        </div>
      </div>
    </footer>
  );
}

export function InterfacePanel({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-clr-4 bg-surface shadow-[var(--shadow-001)]">
      <div className="relative border-b border-clr-4 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="h-2.5 w-2.5 rounded-full bg-clr-4" />
          <span className="ml-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Interface real</span>
        </div>
      </div>
      <div className="relative bg-[#f8f6f2]">
        <img
          src="/assets/laudos/laudos-interface.png"
          alt="Interface real do editor Laudos.AI para ditado e seleção de máscaras de laudo"
          className={`w-full object-cover object-left-top ${compact ? "max-h-[340px]" : "max-h-[560px]"}`}
        />
      </div>
    </div>
  );
}

export function SitemapCoverage() {
  const stats = [
    ["URLs", "352"],
    ["Templates", String(groupCounts.Templates ?? 0)],
    ["Blogs", String(groupCounts.Blog ?? 0)],
    ["Glossário", String(groupCounts["Glossário"] ?? 0)],
  ];

  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-clr-4 bg-clr-4 lg:grid-cols-4">
      {stats.map(([label, value]) => (
        <div key={label} className="bg-surface px-5 py-5">
          <div className="text-2xl font-semibold text-primary">{value}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#9f9689]">{label}</div>
        </div>
      ))}
    </div>
  );
}

export function SectionBand({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`border-t border-clr-7 px-6 py-20 lg:px-10 ${className}`}>
      <div className="mx-auto max-w-[1440px]">{children}</div>
    </section>
  );
}
