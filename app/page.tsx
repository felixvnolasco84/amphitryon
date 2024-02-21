import FeaturedClients from "@/components/Sections/FeaturedClients";
import FeaturedServices from "@/components/Sections/FeaturedServices";
import HeroSection from "@/components/Sections/HeroSection";
import RentSection from "@/components/Sections/RentSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <HeroSection />
      <FeaturedClients />
      <FeaturedServices />
      <RentSection />
    </main>
  );
}
