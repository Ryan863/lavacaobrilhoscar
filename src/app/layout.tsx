import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brilhos Car | Estética Automotiva e Lavação em Concórdia - SC",
  description:
    "Lavação detalhada, polimento técnico, higienização interna e proteção de pintura em Concórdia - SC. Agende pelo WhatsApp com a equipe Brilhos Car.",
  openGraph: {
    title: "Brilhos Car | Estética Automotiva em Concórdia - SC",
    description:
      "O cuidado minucioso e o acabamento impecável que o seu veículo merece.",
    images: ["/images/hero.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#F0EDE8" };

const schema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: "Brilhos Car Lavação Automotiva & Estética Veicular",
  telephone: "+5549998288682",
  sameAs: ["https://www.instagram.com/lavacaobrilhoscar/"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Rua da Paz, 61 - Imperial",
      addressLocality: "Concórdia",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Rua 29 de Julho, 335 - Centro",
      addressLocality: "Concórdia",
      addressRegion: "SC",
      addressCountry: "BR",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
