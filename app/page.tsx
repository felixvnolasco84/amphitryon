import CTADeposit from "@/components/Sections/CTASections/CTADeposit";
import { Metadata } from "next";
import CTASection from "@/components/Sections/CTASections/CTASection";
import FeaturedClients from "@/components/Sections/FeaturedClients";
import FeaturedServices from "@/components/Sections/FeaturedServices";
import HeroSectionCarrousel from "@/components/Sections/HeroSectionCarrousel";
import RentSection from "@/components/Sections/RentSection";
import SingleFeature from "@/components/Sections/SingleFeature";
import CallButton from "@/components/WhatsApp/CallButton";

import WhatsAppComponent from "@/components/WhatsApp/WhatsAppComponent";
import { ContactForm } from "@/components/forms/ContactForm";
import { clashDisplayMedium } from "@/utils/fonts";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsApp/WhatsAppButton";
import { Button } from "@/components/ui/button";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Encuentra el lugar perfecto para tus eventos privados - Grupo Amphytrion",
    description:
      "Grupo Amphytrion tiene para ti los lugares más exclusivos en las mejores zonas de Ciudad de México para tus eventos. ¡Conoce los spots disponibles! ",
    alternates: {
      canonical: `https://www.amphitryon.mx/`,
    },
  };
}

export default function Home() {
  return (
    <main className="relative flex flex-col gap-10 py-4 lg:gap-20">
      <div className="lg:container">
        <HeroSectionCarrousel />
      </div>
      <div className="container flex flex-col gap-10 lg:gap-20">
        <FeaturedClients />
        <CTASection />
        <FeaturedServices />
        <RentSection />
        <CTADeposit />
        <SingleFeature />
        <ContactForm />
        <section className="order-8 mx-auto flex flex-col text-center">
          <h3
            className={`my-1 text-xl lg:my-2 lg:text-3xl ${clashDisplayMedium.className}`}
          >
            LLámanos
          </h3>
          {/* <Link target="_blank" href={"tel:5523053711"}>
            <Button className="text-lg underline" variant={"ghost"}>
              Inés Torres (55) 2305 3711
            </Button>
          </Link> */}
          <Link target="_blank" href={"tel:5544502253"}>
            <Button className="text-lg underline" variant={"ghost"}>
              Rafael González: (55) 4450 2253
            </Button>
          </Link>
          <Link target="_blank" href={"tel:5542957398"}>
            <Button className="text-lg underline" variant={"ghost"}>
              Salvador Mier: (55) 4295 7398
            </Button>
          </Link>

          {/* <Link target="_blank" className="pb-4" href={"tel:5620244047"}>
            <Button className="text-lg underline" variant={"ghost"}>
              Antón Arias: (56) 2024 4047
            </Button>
          </Link> */}
          <div className="border-t-2 border-gray-300 pb-4"></div>
          <div className="flex flex-col gap-2">
            <CallButton />
            <WhatsAppButton title="Envíanos un mensaje por WhatsApp" />
          </div>
        </section>

        <WhatsAppComponent />
      </div>
    </main>
  );
}
