import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Strip, Services, Differentials, Reviews, Units, Closing, Footer, WhatsAppFloat } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Strip />
        <Services />
        <Differentials />
        <Reviews />
        <Units />
        <Closing />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
