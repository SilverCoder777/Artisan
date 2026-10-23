import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tarifs",
  description: "Les tarifs des séances de Naserdine Benaïda, au cabinet à Saint-Maur-des-Fossés ou à distance. Adulte 50 €, enfant de 8 à 15 ans 35 €.",
};

const prices = [
  { title: "Séance adulte", price: "50 €", detail: "Un temps d’écoute et d’accompagnement, au cabinet ou à distance.", service: "Magnétisme" },
  { title: "Séance enfant", price: "35 €", detail: "Pour les enfants de 8 à 15 ans, au cabinet ou à distance.", service: "Séance enfant" },
  { title: "Moins de 8 ans", price: "Offert", detail: "Un accompagnement adapté aux plus jeunes, en échange avec leur parent.", service: "Séance enfant" },
  { title: "Pour les animaux", price: "Offert", detail: "De préférence à distance, pour respecter la tranquillité de votre compagnon.", service: "Pour les animaux" },
  { title: "Coupeur de feu", price: "Participation libre", detail: "Un accompagnement complémentaire face aux sensations de brûlure.", service: "Coupeur de feu" },
  { title: "Radiothérapie et chimiothérapie", price: "Offert", detail: "Un accompagnement de bien-être offert pendant toute la durée du traitement.", service: "Coupeur de feu" },
];

export default function PricingPage() {
  return (
    <section className="inner-page">
      <div className="container">
        <p className="eyebrow">EN TOUTE TRANSPARENCE</p>
        <h1 className="page-title">Un temps pour vous.<br />Des tarifs simples.</h1>
        <p className="page-intro">Les mêmes tarifs au cabinet et à distance. Chaque séance est un moment d’écoute, adapté à votre demande et à votre rythme.</p>
        <div className="price-grid" style={{ marginTop: 48 }}>
          {prices.map((item) => (
            <article className="price-card" key={item.title}>
              <p className="eyebrow">{item.title}</p>
              <h2>{item.price}</h2>
              <p>{item.detail}</p>
              <BookingButton className="text-link" service={item.service}>Prendre rendez-vous <ArrowUpRight size={16} aria-hidden="true" /></BookingButton>
            </article>
          ))}
        </div>
        <div className="detail-grid" style={{ marginTop: 48 }}>
          <section className="info-panel prose">
            <h2>Chaque situation mérite de l’écoute.</h2>
            <p>Vous traversez une période financière difficile ? La séance peut être en participation libre, ou offerte si nécessaire. Parlons-en en toute discrétion.</p>
            <a href={contact.phoneHref} className="text-link">{contact.phone} <ArrowUpRight size={16} aria-hidden="true" /></a>
          </section>
          <section className="info-panel prose">
            <h2>Le règlement, simplement.</h2>
            <p>Espèces, carte bancaire, chèque ou Wero. Pour une séance à distance, le règlement se fait à la réservation.</p>
            <Link href="/contact" className="text-link">Une question ? Échangeons <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </section>
        </div>
        <p className="prose" style={{ marginTop: 32 }}>Le magnétisme est une pratique de bien-être. Il ne remplace pas un avis, un diagnostic ou un traitement médical et intervient toujours en complément de votre suivi médical.</p>
      </div>
    </section>
  );
}
