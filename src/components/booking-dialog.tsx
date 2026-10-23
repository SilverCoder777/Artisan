"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Check, Clock3, MapPin, Monitor, Phone, X } from "lucide-react";
import styles from "./booking-dialog.module.css";

type BookingButtonProps = {
  children?: ReactNode;
  className?: string;
  service?: string;
};

const calendars = {
  cabinet: "https://calendar.app.google/j2YTzUd2ZfYNoNmg7",
  distance: "https://calendar.app.google/k2DB19H3ei4ZEvL86",
};

function initialService(service?: string) {
  const value = service?.toLocaleLowerCase("fr") ?? "";
  if (value.includes("anim")) return "animaux";
  if (value.includes("feu")) return "feu";
  return "magnetisme";
}

export function BookingButton({
  children = "Prendre rendez-vous",
  className,
  service,
}: BookingButtonProps) {
  const id = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(initialService(service));
  const [format, setFormat] = useState<"cabinet" | "distance">(
    initialService(service) === "animaux" ? "distance" : "cabinet",
  );

  useEffect(() => {
    if (!isOpen) return;
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow.current;
    };
  }, [isOpen]);

  function open() {
    setIsOpen(true);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function onClose() {
    setIsOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={className}
        onClick={open}
        aria-haspopup="dialog"
        aria-controls={`${id}-dialog`}
      >
        {children}
      </button>

      <dialog
        id={`${id}-dialog`}
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
        onClose={onClose}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          ) close();
        }}
      >
        <div className={styles.content}>
          <button type="button" onClick={close} className={styles.close} aria-label="Fermer la demande de rendez-vous">
            <X size={20} aria-hidden="true" />
          </button>

          <p className={styles.eyebrow}>PRENONS UN TEMPS POUR VOUS</p>
          <h2 id={`${id}-title`} className={styles.title}>Votre prochain<br /><em>rendez-vous.</em></h2>
          <p id={`${id}-description`} className={styles.intro}>
            Au cabinet ou depuis chez vous, choisissez l’accompagnement qui vous correspond.
          </p>

          <label htmlFor={`${id}-service`} className={styles.label}>Votre accompagnement</label>
          <select
            id={`${id}-service`}
            className={styles.select}
            value={selectedService}
            onChange={(event) => {
              const value = event.target.value;
              setSelectedService(value);
              if (value === "animaux") setFormat("distance");
            }}
          >
            <option value="magnetisme">Magnétisme</option>
            <option value="feu">Coupeur de feu</option>
            <option value="animaux">Pour les animaux</option>
          </select>

          <fieldset className={styles.fieldset}>
            <legend className={styles.label}>Où souhaitez-vous votre séance ?</legend>
            <div className={styles.formats}>
              <label className={`${styles.format} ${format === "cabinet" ? styles.selected : ""}`}>
                <input type="radio" name={`${id}-format`} value="cabinet" checked={format === "cabinet"} onChange={() => setFormat("cabinet")} />
                <MapPin size={22} strokeWidth={1.5} aria-hidden="true" />
                <strong>Au cabinet</strong>
                <span>Saint-Maur-des-Fossés</span>
                {format === "cabinet" && <Check className={styles.check} size={15} aria-hidden="true" />}
              </label>
              <label className={`${styles.format} ${format === "distance" ? styles.selected : ""}`}>
                <input type="radio" name={`${id}-format`} value="distance" checked={format === "distance"} onChange={() => setFormat("distance")} />
                <Monitor size={22} strokeWidth={1.5} aria-hidden="true" />
                <strong>À distance</strong>
                <span>Depuis chez vous</span>
                {format === "distance" && <Check className={styles.check} size={15} aria-hidden="true" />}
              </label>
            </div>
          </fieldset>

          <div className={styles.details}>
            <Clock3 size={17} strokeWidth={1.5} aria-hidden="true" />
            <div>
              {selectedService === "magnetisme" && <><strong>45 min · 50 € adulte</strong><span>35 € pour les 8–15 ans · Offert aux moins de 8 ans</span></>}
              {selectedService === "feu" && <><strong>Participation libre</strong><span>Un accompagnement complémentaire, à votre rythme.</span></>}
              {selectedService === "animaux" && <><strong>Séance offerte</strong><span>À distance de préférence, pour la tranquillité de votre compagnon.</span></>}
            </div>
          </div>

          <a className={styles.submit} href={calendars[format]} target="_blank" rel="noopener noreferrer">
            Choisir mon créneau <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <p className={styles.note}>Le choix du créneau et la confirmation se font dans Google Agenda.</p>

          <div className={styles.alternative}>
            <span>Une question avant de réserver ?</span>
            <a href="tel:+33766288088"><Phone size={14} aria-hidden="true" />07 66 28 80 88</a>
          </div>
        </div>
      </dialog>
    </>
  );
}
