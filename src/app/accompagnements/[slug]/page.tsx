import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { BookingButton } from "@/components/booking-dialog";
import { services } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return {
    title: service ? `${service.title}` : "Accompagnement introuvable",
    description: service?.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <section className="inner-page">
      <div className="container">
        <Link href="/#accompagnements" className="text-link">
          <ArrowLeft size={16} aria-hidden="true" /> Tous les accompagnements
        </Link>
        <div className="detail-grid" style={{ marginTop: 48 }}>
          <div>
            <p className="eyebrow">{service.eyebrow}</p>
            <h1 className="page-title">{service.title}</h1>
            <p className="page-intro">{service.subtitle}</p>
            <div className="prose">
              {service.longDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <BookingButton className="button button-primary" service={service.title}>
              Prendre rendez-vous <ArrowUpRight size={18} aria-hidden="true" />
            </BookingButton>
          </div>
          <aside>
            <Image
              src={service.image}
              alt={service.title === "Pour les animaux" ? "Un compagnon à quatre pattes au repos" : "Un moment de calme et d’accompagnement"}
              width={900}
              height={1000}
              className="detail-image"
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <div className="info-panel">
              <p className="eyebrow">EN PRATIQUE</p>
              <p><Clock3 size={17} aria-hidden="true" /> {service.duration}</p>
              <p><MapPin size={17} aria-hidden="true" /> Au cabinet ou à distance</p>
              <p><strong>{service.price}</strong></p>
              <Link href="/tarifs" className="text-link">Tous les tarifs <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
