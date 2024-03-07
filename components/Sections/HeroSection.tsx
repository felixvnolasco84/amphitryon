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
    {
      name: ".",
    },
  ];
  return (
    <div className="flex flex-col lg:container">
      <InfiniteMovingMessages items={items} direction="right" speed="fast" />
      <div className="relative aspect-[9/12] w-full lg:aspect-[16/12]">
        <Image
          className="aspect-square object-cover object-center"
          sizes="100vw"
          fill
          src={img}
          alt=""
        />

        <h2 className="relative flex h-full w-full items-end justify-center bg-gradient-to-t from-black to-transparent pb-12 text-center text-2xl text-white lg:items-center lg:pb-0 lg:text-3xl xl:text-5xl">
          LOS MEJORES LUGARES EN RENTA PARA EVENTOS CORPORATIVOS Y SOCIALES
        </h2>
      </div>
      <InfiniteMovingMessages items={items} direction="right" speed="fast" />
    </div>
  );
}
