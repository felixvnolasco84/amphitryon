import FeaturedClients from "@/components/Sections/FeaturedClients";
import FeaturedServices from "@/components/Sections/FeaturedServices";
import HeroSection from "@/components/Sections/HeroSection";
import RentSection from "@/components/Sections/RentSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";

import heroImage from "@/public/images/heroImage.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 lg:gap-20">
      <HeroSection img={heroImage} />
      <FeaturedClients />
      <FeaturedServices />
      <RentSection />
      <ContactForm />
      <Link
        href={
          "https://wa.me/5513842959?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios"
        }
        className="sticky bottom-2 flex w-full justify-end rounded-md"
      >
        <Button size={"lg"} className="relative bg-[#FC9532]">
          WhatsApp
        </Button>
      </Link>
    </main>
  );
}
