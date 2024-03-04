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
    <>
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
                className="flex flex-col items-center gap-4 text-center"
                key={item.title}
              >
                <div className="relative h-60 w-60">
                  <Image
                    src={item.img.src}
                    alt=""
                    className="object-cover object-center"
                    fill
                    sizes="100vw"
                  />
                </div>

                <h4 className="my-01 text-xl lg:my-2 lg:text-2xl">
                  {item.title}
                </h4>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground lg:hidden">
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
    </>
  );
}
