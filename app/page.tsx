import CTADeposit from "@/components/Sections/CTASections/CTADeposit";
import CTASection from "@/components/Sections/CTASections/CTASection";
import FeaturedClients from "@/components/Sections/FeaturedClients";
import FeaturedServices from "@/components/Sections/FeaturedServices";
import HeroSection from "@/components/Sections/HeroSection";
import RentSection from "@/components/Sections/RentSection";
import SingleFeature from "@/components/Sections/SingleFeature";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import heroImage from "@/public/images/HeroNew.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 lg:gap-20">
      <HeroSection img={heroImage} />
      <div className="container flex flex-col gap-10 lg:gap-20">
        <FeaturedClients />
        <CTASection />
        <FeaturedServices />
        <RentSection />
        <CTADeposit />
        <SingleFeature />
        <ContactForm />
      </div>

      <Link
        href={
          "https://wa.me/5513842959?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios"
        }
        className="sticky bottom-2 mx-auto flex w-full justify-end rounded-md"
      >
        <Button size={"lg"} className="relative bg-green-500">
          * WhatsApp
        </Button>
      </Link>
    </main>
  );
}
