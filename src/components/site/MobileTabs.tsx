"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOK } from "@/lib/site";
import { Icon, type IconName } from "./Icon";
const tabs: { label: string; href: string; icon: IconName }[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Treatments", href: "/services/", icon: "treatments" },
  { label: "Results", href: "/portfolio/", icon: "results" },
  { label: "Visit", href: "/contact/", icon: "pin" },
];
export function MobileTabs() {
  const pathname = usePathname();
  return (
    <div className="mobile-tabs">
      <nav className="mobile-destinations" aria-label="Quick navigation">
        {tabs.map((tab) => {
          const active =
            tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <Link
              href={tab.href}
              key={tab.href}
              className={active ? "mobile-tab active" : "mobile-tab"}
              aria-current={active ? "page" : undefined}
            >
              <Icon name={tab.icon} size={21} />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </nav>
      <a
        className="mobile-tab tab-book"
        href={BOOK}
        aria-label="Book an appointment on GlossGenius"
      >
        <Icon name="calendar" size={21} />
        <span>Book</span>
      </a>
    </div>
  );
}
