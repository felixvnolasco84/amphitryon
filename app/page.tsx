import FeaturedClients from "@/components/Sections/FeaturedClients";
import FeaturedServices from "@/components/Sections/FeaturedServices";
import HeroSection from "@/components/Sections/HeroSection";
import RentSection from "@/components/Sections/RentSection";

import heroImage from "@/public/images/heroImage.png";
import WhatsApp from "@/public/images/WhatsApp Icon.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-10 lg:gap-20">
      <HeroSection img={heroImage} />
      <FeaturedClients />
      <FeaturedServices />
      <RentSection />
      <div className="sticky bottom-0 right-0 w-fit rounded-md bg-[#FC9532] p-4">
        <div className="relative h-[74px] w-[356px]">
          <Image
            className="object-cover object-center"
            sizes="100vw"
            alt=""
            fill
            src={WhatsApp}
          />
        </div>
      </div>
    </main>
  );
}
