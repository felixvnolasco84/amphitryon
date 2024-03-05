import Image, { StaticImageData } from "next/image";
import { InfiniteMovingMessages } from "../InfiniteMovingCarrousel/InfiniteMovingCarrousel";

export default function HeroSection({ img }: { img: StaticImageData }) {
  const items = [
    {
      name: "SALONES PRIVADOS",
    },
    {
      name: ".",
    },
    {
      name: "RENTA DE TERRAZAS",
    },
    {
      name: ".",
    },
    {
      name: "CATERING",
    },
    {
      name: ".",
    },
    {
      name: "BARRAS",
    },
  ];
  return (
    <div className="flex flex-col">
      <InfiniteMovingMessages items={items} direction="right" speed="slow" />
      <div className="relative aspect-[9/12] w-full lg:container md:aspect-video">
        <Image
          className="aspect-square object-cover object-center"
          sizes="100vw"
          fill
          src={img}
          alt=""
        />
        relative z-20 text-sm font-normal leading-[1.6] text-gray-100
        <h2 className="absolute bottom-0 z-50 bg-gradient-to-t from-black to-transparent py-12 text-center text-2xl text-white lg:text-4xl xl:text-5xl">
          LOS MEJORES LUGARES EN RENTA PARA EVENTOS CORPORATIVOS Y SOCIALES
        </h2>
      </div>
      <InfiniteMovingMessages items={items} direction="right" speed="slow" />
    </div>
  );
}
