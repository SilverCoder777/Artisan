import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Heart, Leaf, MapPin, MessageCircle, Sparkles, Sun, Video } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";
import { services } from "@/lib/content";

const reviews = [
  { name: "Morgane", initial: "M", text: "Praticien très à l’écoute et très professionnel. Je recommande fortement !" },
  { name: "Naima", initial: "N", text: "Très belle personne à l’écoute et rayonnante. Est une personne au grand cœur. Je recommande chaleureusement.", excerpt: true },
  { name: "Patricia Laroussinie", initial: "P", text: "Sacré monsieur ! ❤" },
];

export default function Home() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="label-dot" /> MAGNÉTISME & BIEN-ÊTRE</p>
          <h1 id="hero-title">Un temps pour vous.<br />Un chemin vers<br /><em>l’équilibre.</em></h1>
          <p className="hero-description">Parfois, il suffit de s’accorder une pause.<br className="desktop-break" /> Un espace d’écoute et de douceur pour retrouver<br className="desktop-break" /> le lien avec soi, à votre rythme.</p>
          <div className="hero-actions"><BookingButton className="button button-primary">Prendre rendez-vous <ArrowUpRight size={18} /></BookingButton><a href="#accompagnements" className="text-link">Découvrir mon approche <ArrowRight size={16} /></a></div>
          <div className="hero-location"><MapPin size={20} strokeWidth={1.4} /><p>À Saint-Maur-des-Fossés <span>et à distance,<br className="mobile-break" /> où que vous soyez.</span></p></div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-photo"><Image src="/images/hero.webp" alt="Des mains dessinent un cœur autour du soleil levant" fill priority sizes="(max-width: 700px) 90vw, 46vw" /></div>
          <div className="sun-mark" aria-hidden="true"><Sun size={72} strokeWidth={0.8} /></div>
          <div className="hero-note"><span className="note-icon"><Heart size={22} strokeWidth={1.3} /></span><span>De l’écoute.<br /><strong>Et beaucoup d’humanité.</strong></span></div>
          <span className="image-caption">FAIRE UNE PLACE À CE QUI VOUS FAIT DU BIEN.</span>
        </div>
        <a href="#accompagnements" className="hero-scroll" aria-label="Découvrir les accompagnements"><ArrowDown size={15} /> PRENDRE LE TEMPS DE SE RETROUVER</a>
      </section>

      <div className="reassurance"><div className="container reassurance-grid"><div><Leaf size={25} strokeWidth={1.2} /><p><strong>Une approche à votre rythme</strong><span>Chaque personne, chaque séance est unique.</span></p></div><div><Heart size={25} strokeWidth={1.2} /><p><strong>Un cadre bienveillant</strong><span>Écoute, respect et confidentialité.</span></p></div><div><Video size={25} strokeWidth={1.2} /><p><strong>Au cabinet ou à distance</strong><span>La même attention, où que vous soyez.</span></p></div></div></div>

      <section id="accompagnements" className="section container">
        <div className="section-heading"><div><p className="eyebrow">MES ACCOMPAGNEMENTS</p><h2>À chaque besoin,<br /><em>une attention particulière.</em></h2></div><p>Vous traversez une période de fatigue, de tension<br className="desktop-break" /> ou avez simplement besoin de souffler ?<br />Prenons ensemble un moment pour vous.</p></div>
        <div className="services-grid">{services.map((service, i) => <article className="service-card" key={service.slug}><Link href={`/accompagnements/${service.slug}`} className="service-image"><Image src={service.image} alt={service.title === "Magnétisme" ? "Un moment de détente lors d’une séance de magnétisme" : service.title === "Coupeur de feu" ? "Des mains accompagnent une personne avec douceur" : "Un moment de tendresse avec un chien et un chat"} fill sizes="(max-width: 650px) 90vw, (max-width: 1000px) 45vw, 30vw" /><span className="service-number">0{i + 1}</span></Link><div className="service-content"><p className="service-kicker">{service.eyebrow}</p><h3><Link href={`/accompagnements/${service.slug}`}>{service.title}</Link></h3><p>{service.description}</p><Link href={`/accompagnements/${service.slug}`} className="service-link">Découvrir cet accompagnement <span><ArrowUpRight size={20} /></span></Link></div></article>)}</div>
        <p className="care-note"><Leaf size={15} /> Ces accompagnements de bien-être sont complémentaires à votre suivi médical et ne s’y substituent pas.</p>
      </section>

      <section className="about-section"><div className="container about-grid"><div className="about-visual"><div className="about-photo"><Image src="/images/cabinet.webp" alt="Le cabinet de Naserdine Benaïda à Saint-Maur-des-Fossés" fill sizes="(max-width: 700px) 90vw, 40vw" /></div><div className="quote-card"><span>✧</span><p>Un lieu pour souffler.<br />Une présence pour vous écouter.</p><small>LE CABINET · SAINT-MAUR-DES-FOSSÉS</small></div></div><div className="about-copy"><p className="eyebrow">FAISONS CONNAISSANCE</p><h2>Avant tout,<br /><em>une rencontre humaine.</em></h2><p className="about-name">Naserdine Benaïda</p><p>Magnétiseur et coupeur de feu, je vous accueille avec une conviction simple : chacun mérite d’être écouté, avec attention et sans jugement.</p><p>De mes années de chauffeur de taxi à l’ouverture de mon cabinet en 2019, les rencontres ont toujours été au cœur de mon chemin. Aujourd’hui, je vous propose un accompagnement tout en douceur, dans le respect de votre histoire.</p><div className="about-values"><span><Check size={15} /> Une écoute sincère</span><span><Check size={15} /> Un accompagnement personnel</span></div><Link href="/a-propos" className="text-link">Un peu plus sur mon parcours <ArrowUpRight size={18} /></Link></div></div></section>

      <section id="une-seance" className="section container session-section"><div className="section-heading centered"><p className="eyebrow">EN TOUTE SIMPLICITÉ</p><h2>Votre séance, <em>pas à pas.</em></h2><p>Pas besoin de savoir par où commencer. Je suis là pour vous guider.</p></div><div className="steps-grid"><article><span className="step-number">01</span><MessageCircle size={29} strokeWidth={1.2} /><h3>Nous échangeons</h3><p>Un premier échange pour faire connaissance et comprendre ce qui vous amène.</p></article><article><span className="step-number">02</span><Sparkles size={29} strokeWidth={1.2} /><h3>Vous prenez un temps pour vous</h3><p>Au cabinet ou à distance, installez-vous confortablement. La séance dure environ 45 minutes.</p></article><article><span className="step-number">03</span><Leaf size={29} strokeWidth={1.2} /><h3>Nous faisons le point</h3><p>Un temps de parole pour accueillir vos ressentis et poursuivre à votre rythme.</p></article></div><div className="session-link"><Link href="/tarifs" className="text-link">Découvrir les tarifs <ArrowRight size={17} /></Link></div></section>

      <section className="reviews-section"><div className="container"><div className="section-heading"><div><p className="eyebrow">VOS MOTS, TOUT SIMPLEMENT</p><h2>La confiance naît<br /><em>de la rencontre.</em></h2></div><a href="https://www.google.com/maps/search/?api=1&query=Naserdine+Benaida+Artisan+de+lumiere+Saint-Maur-des-Fosses" target="_blank" rel="noreferrer" className="review-source"><span className="google-g">G</span><span>Vos avis sur Google<br /><strong>Merci pour votre confiance.</strong></span><ArrowUpRight size={17} /></a></div><div className="reviews-grid">{reviews.map(review => <figure key={review.name} className="review-card"><span className="quote-mark" aria-hidden="true">“</span><blockquote>{review.text}</blockquote><figcaption><span className="review-avatar">{review.initial}</span><span><strong>{review.name}</strong><small>Avis publié sur Google{review.excerpt ? " · Extrait" : ""}</small></span></figcaption></figure>)}</div></div></section>

      <section className="faq-section section container"><div><p className="eyebrow">QUELQUES RÉPONSES</p><h2>Et si on en<br /><em>parlait simplement ?</em></h2><Link href="/contact" className="text-link">Une autre question ? <ArrowUpRight size={17} /></Link></div><div className="faq-list"><details><summary>Comment se passe une séance à distance ?<span>+</span></summary><p>Après un premier échange par téléphone, vous vous installez dans un endroit calme pendant la séance. Nous convenons ensemble d’un horaire, puis prenons un temps pour échanger sur vos ressentis.</p></details><details><summary>Combien de temps dure une séance ?<span>+</span></summary><p>Comptez environ 45 minutes pour une séance de magnétisme, au cabinet comme à distance. La durée et le déroulement peuvent s’adapter à votre situation.</p></details><details><summary>Faut-il arrêter un traitement médical ?<span>+</span></summary><p>Non. Le magnétisme est un accompagnement de bien-être qui ne remplace aucun traitement ni avis médical. Ne modifiez jamais votre suivi sans l’avis de votre médecin. Aucun résultat n’est garanti.</p></details><details><summary>Les séances sont-elles adaptées aux enfants ?<span>+</span></summary><p>Oui, un accompagnement peut être proposé aux enfants avec l’accord et la présence de leur représentant légal. Les séances sont offertes avant 8 ans, et à 35 € de 8 à 15 ans.</p></details></div></section>

      <section className="contact-banner container"><Sun size={45} strokeWidth={1} /><p className="eyebrow">LE PREMIER PAS, EN DOUCEUR</p><h2>Et si vous preniez<br /><em>un moment pour vous ?</em></h2><p>Une question, une envie d’échanger, un besoin d’être accompagné ?<br />Je serai heureux de vous écouter.</p><BookingButton className="button button-primary">Prendre rendez-vous <ArrowUpRight size={18} /></BookingButton><a className="banner-phone" href="tel:+33766288088">ou appelez-moi au <strong>07 66 28 80 88</strong></a></section>
    </>
  );
}
