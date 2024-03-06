import FeaturedClients from "@/components/Sections/FeaturedClients";
import FeaturedServices from "@/components/Sections/FeaturedServices";
import HeroSection from "@/components/Sections/HeroSection";
import RentSection from "@/components/Sections/RentSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import heroImage from "@/public/images/Group -1.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 lg:gap-20">
      <HeroSection img={heroImage} />
      <div className="container">
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
      </div>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=c_b8a50ca9fdb33abe461d74c935c0a544a3ae2c9aff5291b18a14cae55389ee86%40group.calendar.google.com&ctz=America%2FMexico_City"
        width="800"
        height="600"
      ></iframe>
    </main>
  );
}
