"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import { TrackGoogleAnalyticsEvent } from "@/lib/google-analytics";

export default function ComplexFlatComponent({
  complexFlat,
}: {
  complexFlat: { flat: StaticImageData; flatPDF: string }[];
}) {
  const handleClick = () => {
    TrackGoogleAnalyticsEvent(
      "click",
      "descargar_plano",
      window.location.pathname
    );
  };

  return (
    <section>
      <h2 className="text-center text-2xl font-bold lg:text-4xl xl:mb-8 xl:text-5xl">
        PLANOS DEL VENUE
      </h2>

      <div className="grid gap-4 lg:grid-cols-3">
        {complexFlat.map((flat, index) => (
          <div
            key={index}
            className="group relative aspect-square h-fit w-full"
          >
            <Image
              src={flat.flat}
              alt="Flat"
              sizes="100vw"
              className="h-full w-full object-cover object-center"
            />
            <a
              href={flat.flatPDF}
              download="Plano.pdf"
              className="absolute bottom-0 right-0 flex justify-center"
              onClick={handleClick}
            >
              <Button className="rounded-md bg-black px-4 py-2 text-white">
                Descargar Plano
              </Button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
