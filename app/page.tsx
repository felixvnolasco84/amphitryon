"use client";

import CTADeposit from "@/components/Sections/CTASections/CTADeposit";
import CTASection from "@/components/Sections/CTASections/CTASection";
import FeaturedClients from "@/components/Sections/FeaturedClients";
import FeaturedServices from "@/components/Sections/FeaturedServices";
import HeroSectionCarrousel from "@/components/Sections/HeroSectionCarrousel";
import RentSection from "@/components/Sections/RentSection";
import SingleFeature from "@/components/Sections/SingleFeature";
import WhatsAppButtonHome from "@/components/WhatsApp/WhatsAppButtonHome";
import WhatsAppComponent from "@/components/WhatsApp/WhatsAppComponent";
import { ContactForm } from "@/components/forms/ContactForm";
import { clashDisplayMedium } from "@/utils/fonts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 lg:gap-20">     
      <HeroSectionCarrousel />
      <div className="container flex flex-col gap-10 lg:gap-20">
        <FeaturedClients />
        <CTASection />
        <FeaturedServices />
        <RentSection />
        <CTADeposit />
        <SingleFeature />
        <ContactForm />
        <div className="order-8 mx-auto flex flex-col text-center">
          <h3
            className={`my-1 text-xl lg:my-2 lg:text-3xl ${clashDisplayMedium.className}`}
          >
            LLámanos
          </h3>
          <Link href={"tel:5538931801"}>Jimena Montenegro: (55) 3893 1801</Link>
          <Link href={"tel:5513842959"}>César González: (55) 1384 2959</Link>
          <Link className="pb-4" href={"tel:5620244047"}>
            Antón Arias: (56) 2024 4047
          </Link>
          <div className="border-t-2 border-gray-300 pb-4"></div>
          <WhatsAppButtonHome />
        </div>
      </div>
      <WhatsAppComponent />
    </main>
  );
}
