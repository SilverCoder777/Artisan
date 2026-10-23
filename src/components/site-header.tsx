"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Sun, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { BookingButton } from "@/components/booking-dialog";
import styles from "./site-header.module.css";

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/#accompagnements", label: "Mes accompagnements" },
  { href: "/a-propos", label: "À propos" },
  { href: "/tarifs", label: "Tarifs" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigationId = useId();
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape" || document.querySelector("dialog[open]")) return;
      setMenuOpen(false);
      menuButton.current?.focus();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setMenuOpen(false)} aria-label="Artisan de lumière — accueil">
          <Sun className={styles.brandSymbol} size={38} strokeWidth={1.15} aria-hidden="true" />
          <span>
            <span className={styles.brandName}>Artisan de lumière</span>
            <span className={styles.brandSubtitle}>Naserdine Benaïda</span>
          </span>
        </Link>

        <button
          ref={menuButton}
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-controls={navigationId}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <nav id={navigationId} className={`${styles.navigation} ${menuOpen ? styles.open : ""}`} aria-label="Navigation principale">
          <div className={styles.links}>
            {navigation.map((item) => {
              const active = item.href === pathname;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${active ? styles.active : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <BookingButton className={styles.booking}>
            Prendre rendez-vous <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </BookingButton>
        </nav>
      </div>
    </header>
  );
}
