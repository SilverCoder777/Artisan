import type { Metadata } from "next";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone, Video } from "lucide-react";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact et rendez-vous",
  description: "Prenez rendez-vous avec Naserdine Benaïda au cabinet à Saint-Maur-des-Fossés ou à distance. Téléphone : 07 66 28 80 88.",
};

export default function ContactPage() {
  return (
    <section className="inner-page">
      <div className="container">
        <p className="eyebrow">LE PREMIER PAS, ENSEMBLE</p>
        <h1 className="page-title">Prenons le temps<br />de nous rencontrer.</h1>
        <p className="page-intro">Au cabinet ou depuis chez vous, choisissez le cadre dans lequel vous vous sentez bien. Mon agenda vous permet de réserver directement votre séance.</p>
        <div className="detail-grid" style={{ marginTop: 48 }}>
          <section className="price-card">
            <MapPin size={28} aria-hidden="true" />
            <p className="eyebrow" style={{ marginTop: 24 }}>EN PRÉSENTIEL</p>
            <h2>Au cabinet</h2>
            <p>Je vous accueille dans un espace calme et confidentiel à Saint-Maur-des-Fossés.</p>
            <p>{contact.address}<br />{contact.city}</p>
            <p><Clock3 size={16} aria-hidden="true" /> 45 minutes · Adulte 50 € · Enfant 8–15 ans 35 €</p>
            <a href={contact.officeBooking} target="_blank" rel="noopener noreferrer" className="button button-primary">Choisir mon créneau <ArrowUpRight size={18} aria-hidden="true" /></a>
          </section>
          <section className="price-card">
            <Video size={28} aria-hidden="true" />
            <p className="eyebrow" style={{ marginTop: 24 }}>DEPUIS CHEZ VOUS</p>
            <h2>À distance</h2>
            <p>Je vous appelle personnellement à l’heure du rendez-vous. Installez-vous simplement dans un endroit calme.</p>
            <p>Depuis le lieu de votre choix.<br />Au même tarif qu’au cabinet.</p>
            <p><Clock3 size={16} aria-hidden="true" /> 45 minutes · Adulte 50 € · Enfant 8–15 ans 35 €</p>
            <a href={contact.remoteBooking} target="_blank" rel="noopener noreferrer" className="button button-primary">Choisir mon créneau <ArrowUpRight size={18} aria-hidden="true" /></a>
          </section>
        </div>
        <div className="detail-grid" style={{ marginTop: 48 }}>
          <section className="prose">
            <p className="eyebrow">UNE QUESTION AVANT DE RÉSERVER ?</p>
            <h2>Je suis à votre écoute.</h2>
            <p>Aucun créneau ne vous convient, ou vous souhaitez parler de votre demande ? Appelez-moi, envoyez un SMS ou écrivez-moi. Nous trouverons un moment ensemble.</p>
            <p><a className="text-link" href={contact.phoneHref}><Phone size={18} aria-hidden="true" /> {contact.phone}</a></p>
            <p><a className="text-link" href={`mailto:${contact.email}`}><Mail size={18} aria-hidden="true" /> {contact.email}</a></p>
            <a href="sms:+33766288088" className="button button-secondary">Envoyer un SMS <ArrowUpRight size={17} aria-hidden="true" /></a>
          </section>
          <section className="info-panel prose">
            <p className="eyebrow">L’ESPACE DE LUMIÈRE</p>
            <h2>Venir au cabinet.</h2>
            <p>{contact.name}<br />{contact.address}<br />{contact.city}</p>
            <p>Du lundi au samedi, sur rendez-vous.<br />Cabinet accessible aux personnes à mobilité réduite.</p>
            <a className="text-link" href={contact.mapHref} target="_blank" rel="noopener noreferrer">Voir l’itinéraire <ArrowUpRight size={16} aria-hidden="true" /></a>
          </section>
        </div>
      </div>
    </section>
  );
}
