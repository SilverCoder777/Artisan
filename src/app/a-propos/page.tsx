import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";

export const metadata: Metadata = {
  title: "À propos de Naserdine Benaïda",
  description: "Faites connaissance avec Naserdine Benaïda, magnétiseur et coupeur de feu à Saint-Maur-des-Fossés. Une approche fondée sur l’écoute et la bienveillance.",
};

export default function AboutPage() {
  return (
    <section className="inner-page">
      <div className="container">
        <p className="eyebrow">FAISONS CONNAISSANCE</p>
        <h1 className="page-title">L’écoute, au cœur<br />de chaque rencontre.</h1>
        <div className="detail-grid" style={{ marginTop: 48 }}>
          <Image src="/images/cabinet.webp" alt="L’Espace de Lumière à Saint-Maur-des-Fossés, avec ses pierres et minéraux" width={900} height={1000} className="detail-image" priority sizes="(max-width: 800px) 100vw, 50vw" />
          <div className="prose">
            <p className="eyebrow">NASERDINE BENAÏDA</p>
            <h2>Un parcours humain.<br />Une présence sincère.</h2>
            <p>Je m’appelle Naserdine Benaïda, magnétiseur et coupeur de feu. Depuis l’enfance, je ressens une sensibilité particulière aux énergies et à ce qui nous relie. Cette sensibilité m’a naturellement orienté vers la spiritualité et le magnétisme.</p>
            <p>En 1987, je suis devenu chauffeur de taxi. Au fil des trajets et des rencontres, j’ai appris combien une écoute attentive peut compter. Chaque personne porte son histoire ; prendre le temps de l’accueillir est devenu essentiel dans mon parcours.</p>
            <p>En 2019, j’ai ouvert mon Espace de Lumière à Saint-Maur-des-Fossés. Un lieu calme, où les pierres et les minéraux occupent une place particulière, et où je vous accueille aujourd’hui pour un temps de bien-être.</p>
            <p>Au cabinet comme à distance, mon approche est guidée par la bienveillance, la confidentialité et le respect de votre rythme. Mes séances viennent toujours en complément de votre suivi médical, sans le modifier ni le remplacer.</p>
            <p>Si nos chemins se croisent, prenons simplement le temps de faire connaissance.</p>
            <p style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: 32, fontStyle: "italic" }}>Naserdine</p>
            <BookingButton className="button button-primary" service="Magnétisme">Faire le premier pas <ArrowUpRight size={18} aria-hidden="true" /></BookingButton>
          </div>
        </div>
        <section className="info-panel prose" style={{ marginTop: 64 }}>
          <p className="eyebrow">UNE APPROCHE RESPECTUEUSE</p>
          <h2>Un accompagnement, à votre rythme.</h2>
          <p>Chaque séance commence par un échange, sans jugement ni promesse de résultat. Vous restez libre de poser vos questions, d’exprimer vos limites et de choisir ce qui vous convient. Aucun diagnostic n’est posé et aucune prescription médicale n’est modifiée.</p>
          <Link href="/contact" className="text-link">Échangeons ensemble <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </section>
      </div>
    </section>
  );
}
