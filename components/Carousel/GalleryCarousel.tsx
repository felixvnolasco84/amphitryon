"use client";

import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function GalleryCarousel({ items }: { items: any[] }) {
  const [api, setApi] = useState<any>();

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className="m-auto w-full max-w-7xl lg:hidden"
    >
      <CarouselContent>
        {items.map((item: any, index: number) => (
          <CarouselItem key={index} className="basis-full">
            <div
              key={index}
              className="relative flex aspect-square w-full flex-col gap-2"
            >
              <Image
                className="aspect-square object-cover object-center"
                src={item}
                alt="carruosel image"
                fill
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
