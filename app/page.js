import { Business, Hero, Stats, Testimonials, CardDeal, Footer, CTA } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-full space-y-20 overflow-x-hidden ">
      <Hero />

      <Stats />
      <CardDeal />
      <Testimonials />
      <Business/>
      <CardDeal/>
      <CTA/>
      <Footer/>
    </main>
  );
}
