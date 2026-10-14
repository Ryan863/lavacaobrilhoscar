"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { waLink } from "@/lib/data";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#unidades", label: "Unidades" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-chalk/80 backdrop-blur-md shadow-[0_1px_0_rgba(25,25,25,0.06)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10" aria-label="Principal">
        <a href="#inicio" className="font-display text-lg font-medium tracking-[0.35em] text-carbon">
          BRILHOS CAR
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[11px] font-medium uppercase tracking-[0.22em] text-carbon/70 transition-colors hover:text-carbon">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.a
          href={waLink("Olá! Gostaria de agendar um horário na Brilhos Car.")}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="bg-milano px-4 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white md:px-6 md:text-[11px]"
        >
          Agendar horário
        </motion.a>
      </nav>
    </header>
  );
}
