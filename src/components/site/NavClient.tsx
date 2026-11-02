"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Dialog as D } from "radix-ui";
import { NAV, BOOK } from "@/lib/site";
import { cn } from "@/lib/utils";

const isCur = (path: string, u: string) => path === u || path.startsWith(u);

export function NavLinks() {
  const path = usePathname();
  return (
    <nav aria-label="Primary" className="hidden md:block">
      <ul className="menu" style={{ display: "flex" }}>
        {NAV.map(([n, u]) => (
          <li key={u}>
            <Link href={u} aria-current={isCur(path, u) ? "page" : undefined}>{n}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function MobileMenu() {
  const path = usePathname();
  return (
    <D.Root>
      <D.Trigger
        aria-label="Open menu"
        className="inline-flex items-center gap-2 border border-ink px-3 py-2 text-[13px] font-medium uppercase tracking-[.14em] md:hidden cursor-pointer"
      >
        <Menu className="size-4" aria-hidden /> Menu
      </D.Trigger>
      <D.Portal>
        <D.Overlay className="fixed inset-0 z-[90] bg-black/50 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <D.Content className="fixed inset-y-0 right-0 z-[91] flex w-[min(88vw,380px)] flex-col bg-[var(--bg)] p-6 shadow-2xl data-[state=open]:animate-in data-[state=open]:slide-in-from-right focus:outline-none">
          <D.Title className="font-serif text-2xl font-bold">Menu</D.Title>
          <D.Description className="sr-only">Site navigation</D.Description>
          <ul className="mt-6 flex flex-col" style={{ listStyle: "none", padding: 0 }}>
            {NAV.map(([n, u]) => (
              <li key={u} style={{ margin: 0 }}>
                <D.Close asChild>
                  <Link
                    href={u}
                    aria-current={isCur(path, u) ? "page" : undefined}
                    className={cn("block border-b border-[color-mix(in_srgb,var(--ink)_20%,transparent)] py-4 text-sm uppercase tracking-[.16em] no-underline", isCur(path, u) && "text-[var(--accent-text)]")}
                  >
                    {n}
                  </Link>
                </D.Close>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary mt-8 text-center" href={BOOK} rel="noopener">Book Online</a>
          <D.Close className="mt-auto cursor-pointer border border-ink py-3 text-xs uppercase tracking-[.2em]">Close</D.Close>
        </D.Content>
      </D.Portal>
    </D.Root>
  );
}
