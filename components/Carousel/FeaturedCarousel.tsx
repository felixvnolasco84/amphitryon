"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function FeaturedCarousel({ items }: { items: any[] }) {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="m-auto w-full lg:hidden"
      >
        <CarouselContent className="w-8/12">
          {items.map((item: any, index: number) => (
            <CarouselItem key={index} className="basis-full">
              <div
                className="flex flex-col items-center gap-2 text-center lg:gap-4"
                key={item.title}
              >
                <div className="relative h-40 w-40 lg:h-60 lg:w-60">
                  <Image
                    src={item.img.src}
                    alt="carrousel image"
                    className="object-cover object-center"
                    fill
                    sizes="100vw"
                  />
                </div>

                <h4 className="text-lg lg:my-2 lg:text-xl xl:text-2xl">
                  {item.title}
                </h4>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-[#FC9532] lg:hidden">
        {Array(count)
          .fill(null)
          .map((_, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                margin: "0 2px",
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                backgroundColor:
                  i === current - 1 ? "currentColor" : "transparent",
                border: "1px solid currentColor",
              }}
            />
          ))}
      </div>
    </div>
  );
}
