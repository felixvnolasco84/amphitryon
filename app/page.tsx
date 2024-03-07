import CTADeposit from "@/components/Sections/CTASections/CTADeposit";
import CTASection from "@/components/Sections/CTASections/CTASection";
import FeaturedClients from "@/components/Sections/FeaturedClients";
import FeaturedServices from "@/components/Sections/FeaturedServices";
import HeroSection from "@/components/Sections/HeroSection";
import RentSection from "@/components/Sections/RentSection";
import SingleFeature from "@/components/Sections/SingleFeature";
import WhatsAppComponent from "@/components/WhatsApp/WhatsAppComponent";
import { ContactForm } from "@/components/forms/ContactForm";
import heroImage from "@/public/images/HeroNew.jpeg";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 lg:gap-20">
      <HeroSection isRentPlace={true} img={heroImage} />
      <div className="container flex flex-col gap-10 lg:gap-20">
        <FeaturedClients />
        <CTASection />
        <FeaturedServices />
        <RentSection />
        <CTADeposit />
        <SingleFeature />
        <ContactForm />
      </div>
      <WhatsAppComponent />
    </main>
  );
}
