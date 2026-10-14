"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Star, MessageCircle, AtSign, Navigation } from "lucide-react";
import {
  differentials,
  reviews,
  services,
  units,
  waLink,
  WHATSAPP_MAIN,
  WHATSAPP_SECONDARY,
  INSTAGRAM,
} from "@/lib/data";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-milano">
      <span className="h-px w-8 bg-milano" /> {children}
    </p>
  );
}

const h2 = "font-display text-4xl font-light uppercase leading-[1.08] tracking-[0.06em] text-carbon md:text-6xl";

export function Strip() {
  const items = ["Lavação Detalhada", "Polimento Técnico", "Higienização Interna", "Vitrificação", "Proteção de Pintura", "Unidade Imperial", "Unidade Centro", "Concórdia — SC"];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-slate/70 py-6" aria-label="Especialidades e unidades">
      <div className="marquee-track flex w-max gap-14 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-14 font-display text-sm uppercase tracking-[0.3em] text-carbon/55">
            {t} <span className="h-1 w-1 rounded-full bg-slate" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
      <motion.div {...fade} className="mb-16 max-w-2xl">
        <Eyebrow>Serviços</Eyebrow>
        <h2 className={h2}>Precisão em cada detalhe</h2>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((s, i) => (
          <motion.article
            key={s.n}
            {...fade}
            transition={{ ...fade.transition, delay: (i % 2) * 0.1 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-[2rem] bg-concrete shadow-[0_20px_50px_-30px_rgba(25,25,25,0.35)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={s.img} alt={s.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            </div>
            <div className="p-8 md:p-10">
              <span className="font-display text-sm tracking-[0.3em] text-milano">{s.n}</span>
              <h3 className="mt-3 font-display text-2xl font-normal tracking-wide text-carbon">{s.title}</h3>
              <p className="mt-3 max-w-md text-[15px] font-light leading-relaxed text-carbon/70">{s.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-concrete/60 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div {...fade} className="mb-16 max-w-3xl">
          <Eyebrow>Por que a Brilhos Car?</Eyebrow>
          <h2 className={h2}>O capricho que você percebe no brilho</h2>
        </motion.div>
        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
          {differentials.map((d, i) => (
            <motion.div key={d.title} {...fade} transition={{ ...fade.transition, delay: (i % 2) * 0.1 }} className="border-t border-slate pt-8">
              <h3 className="font-display text-2xl font-light tracking-wide md:text-3xl">{d.title}</h3>
              <p className="mt-4 max-w-md text-base font-light leading-relaxed text-carbon/70">{d.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="avaliacoes" className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
      <motion.div {...fade} className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Eyebrow>Avaliações no Google</Eyebrow>
          <h2 className={h2}>Quem confia, recomenda</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-display text-5xl font-light">5,0</span>
          <div className="flex text-milano" aria-label="5 estrelas">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
        </div>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <motion.figure
            key={r.name}
            {...fade}
            transition={{ ...fade.transition, delay: (i % 3) * 0.08 }}
            className="flex flex-col justify-between rounded-[1.75rem] bg-concrete p-8 shadow-[0_18px_40px_-30px_rgba(25,25,25,0.4)]"
          >
            <div>
              <div className="mb-5 flex text-milano">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-[15px] font-light leading-relaxed text-carbon/80">“{r.text}”</blockquote>
            </div>
            <figcaption className="mt-8 border-t border-slate pt-5">
              <p className="text-sm font-medium">{r.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-carbon/50">{r.tag}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

export function Units() {
  return (
    <section id="unidades" className="bg-concrete/60 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div {...fade} className="mb-16 max-w-2xl">
          <Eyebrow>Nossas unidades</Eyebrow>
          <h2 className={h2}>Duas portas em Concórdia</h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2">
          {units.map((u, i) => (
            <motion.div key={u.name} {...fade} transition={{ ...fade.transition, delay: i * 0.1 }} className="overflow-hidden rounded-[2rem] bg-chalk shadow-[0_20px_50px_-30px_rgba(25,25,25,0.35)]">
              <iframe
                title={`Mapa ${u.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(u.q)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0 grayscale-[0.4]"
              />
              <div className="p-8">
                <p className="text-[11px] uppercase tracking-[0.25em] text-milano">{u.badge}</p>
                <h3 className="mt-2 font-display text-2xl tracking-wide">{u.name}</h3>
                <p className="mt-3 flex items-start gap-2 font-light text-carbon/70">
                  <MapPin size={18} className="mt-0.5 shrink-0" />
                  <span>{u.street}<br />{u.area}</span>
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(u.q)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-carbon/20 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors hover:bg-carbon hover:text-chalk"
                  >
                    <Navigation size={14} /> Como chegar
                  </a>
                  <a
                    href={waLink(`Olá! Gostaria de agendar na ${u.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-milano transition-colors hover:bg-milano/10"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32 text-center md:py-44">
      <motion.div {...fade}>
        <h2 className="font-display text-4xl font-light uppercase leading-[1.1] tracking-[0.08em] md:text-7xl">
          O seu veículo pronto para brilhar de verdade.
        </h2>
        <p className="mx-auto mt-6 max-w-lg font-light text-carbon/70">
          Agende direto com a nossa equipe, sem burocracia.
        </p>
        <motion.a
          href={waLink("Olá! Quero agendar um horário na Brilhos Car.")}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-milano px-9 py-5 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-[0_14px_34px_-12px_rgba(187,8,11,0.6)]"
        >
          <MessageCircle size={16} /> Agendar pelo WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-display text-lg tracking-[0.35em]">BRILHOS CAR</p>
          <p className="mt-2 text-sm font-light text-carbon/60">Lavação Automotiva & Estética Veicular — Concórdia, SC</p>
        </div>
        <div className="flex flex-col gap-2 text-sm font-light text-carbon/70">
          <a href={WHATSAPP_MAIN} className="hover:text-milano">+55 (49) 99828-8682</a>
          <a href={WHATSAPP_SECONDARY} className="hover:text-milano">(49) 99107-1260</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-milano">
            <AtSign size={15} /> @lavacaobrilhoscar
          </a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-carbon/40">© 2026 Brilhos Car. Todos os direitos reservados.</p>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Olá! Vim pelo site e gostaria de agendar um horário.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-milano text-white shadow-[0_10px_30px_-8px_rgba(187,8,11,0.7)] transition-transform hover:-translate-y-1 md:hidden"
    >
      <MessageCircle size={24} />
    </a>
  );
}
