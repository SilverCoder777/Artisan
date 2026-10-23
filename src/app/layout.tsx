import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Sun } from "lucide-react";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource-variable/dm-sans";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Artisan de lumière — Naserdine Benaïda, magnétiseur", template: "%s · Artisan de lumière" },
  description: "Un accompagnement de bien-être centré sur l’écoute et la détente. Magnétisme et coupeur de feu à Saint-Maur-des-Fossés ou à distance, avec Naserdine Benaïda.",
  applicationName: "Artisan de lumière",
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#faf9f5" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <a href="#contenu" className="skip-link">Aller au contenu</a>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <footer className="site-footer">
          <div className="container footer-grid">
            <div className="footer-brand">
              <Link href="/" className="brand-name"><Sun size={28} strokeWidth={1.2} /> Artisan de lumière</Link>
              <p>Naserdine Benaïda<br />Magnétiseur & coupeur de feu</p>
              <span className="footer-tagline">L’humain au cœur de chaque séance.</span>
            </div>
            <div><h3>Se rencontrer</h3><a href="https://www.google.com/maps/search/?api=1&query=118+avenue+du+G%C3%A9n%C3%A9ral+Leclerc+94100+Saint-Maur-des-Foss%C3%A9s" target="_blank" rel="noreferrer" className="footer-contact"><MapPin size={17} /><span>118 avenue du Général Leclerc<br />94100 Saint-Maur-des-Fossés</span></a><p className="footer-small">Du lundi au samedi, sur rendez-vous.<br />Cabinet accessible PMR.</p></div>
            <div><h3>Restons en lien</h3><a href="tel:+33766288088" className="footer-contact"><Phone size={16} />07 66 28 80 88</a><a href="mailto:contact@artisandelumiere.com" className="footer-contact"><Mail size={16} />contact@artisandelumiere.com</a><Link href="/contact" className="footer-link">Toutes les informations <ArrowUpRight size={15} /></Link></div>
          </div>
          <div className="container footer-bottom"><span>© {new Date().getFullYear()} Artisan de lumière</span><div><a href="https://artisandelumiere.com/mentions-legales/" target="_blank" rel="noreferrer">Mentions légales</a><a href="https://artisandelumiere.com/politique-de-confidentialite/" target="_blank" rel="noreferrer">Confidentialité</a><a href="https://artisandelumiere.com/charte-de-deontologie/" target="_blank" rel="noreferrer">Déontologie</a></div></div>
        </footer>
      </body>
    </html>
  );
}
