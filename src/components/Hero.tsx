"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/lib/useGsap";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

function Words({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em]">
          <span className={`word inline-block ${className ?? ""}`}>{w}&nbsp;</span>
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.from(".word", { opacity: 0, y: 25, stagger: 0.05, duration: 0.9, ease: "power3.out", delay: 0.15 });
    gsap.from(".sub-word", { opacity: 0, y: 25, stagger: 0.03, duration: 0.8, ease: "power3.out", delay: 0.9 });
    gsap.from(".hero-cta", { opacity: 0, y: 20, duration: 0.8, delay: 1.5, ease: "power3.out" });
    gsap.to(bg.current, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
    });
  }, root);

  return (
    <section ref={root} id="inicio" className="relative h-dvh min-h-[640px] w-full overflow-hidden">
      <div className="hero-fade absolute inset-0">
        <div ref={bg} className="absolute -top-[6%] left-0 h-[112%] w-full">
          <Image
            src="/images/hero.jpg"
            alt="Supercarro vermelho vitrificado diante de arquitetura de concreto"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_60%] md:object-center"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-start px-6 pt-32 md:justify-center md:px-10 md:pt-0">
        <h1 className="font-display text-[2.6rem] font-light uppercase leading-[1.02] tracking-[0.12em] text-carbon sm:text-6xl lg:text-[5.5rem]">
          <Words text="Estética." />
          <br />
          <Words text="Extraordinária." />
          <br />
          <Words text="Brilhos Car." className="font-medium" />
        </h1>
        <p className="mt-6 max-w-md text-base font-light leading-relaxed text-carbon/75 md:text-lg">
          {"Cuidado minucioso, polimento de alto brilho e higienização especializada com o capricho que o seu veículo merece."
            .split(" ")
            .map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <span className="sub-word inline-block">{w}&nbsp;</span>
              </span>
            ))}
        </p>

        <div className="hero-cta mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <motion.a
            href={waLink("Olá! Gostaria de fazer um orçamento na Brilhos Car.")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-milano px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_-12px_rgba(187,8,11,0.6)]"
          >
            <MessageCircle size={16} /> Fazer Orçamento no WhatsApp
          </motion.a>
          <motion.a
            href="#servicos"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-carbon/20 bg-white/40 px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-carbon backdrop-blur-sm"
          >
            Conhecer Serviços <ArrowUpRight size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
