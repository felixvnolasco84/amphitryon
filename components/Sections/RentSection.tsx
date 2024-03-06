import { clashDisplayMedium } from "@/utils/fonts";
import Image from "next/image";
import ReservaIcono from "@/public/images/Reserva_Icono.png";
import Link from "next/link";
import { rentPlaces } from "@/utils/data";
import { CalendlyComponent } from "../Calendar/CalendlyComponent";

export default function RentSection() {
  return (
    <div className="flex flex-col gap-6 lg:gap-12">
      <h2
        className={`${clashDisplayMedium.className} text-xl lg:text-3xl text-center`}
      >
        ALGUNOS LUGARES A LA RENTA PARA TUS EVENTOS PRIVADOS
      </h2>
      <div className="grid grid-cols-1 gap-4 align-baseline lg:grid lg:grid-cols-2 lg:gap-4">
        {rentPlaces.map((place, index) => (
          <Link
            href={`/${place.slug}`}
            key={index}
            className="flex aspect-square flex-col gap-2"
          >
            <Image className="aspect-square" src={place.img} alt={place.name} />
            <div className="py-4 text-center lg:py-0 lg:text-left">
              <h3
                className={`${clashDisplayMedium.className} text-xl lg:text-2xl`}
              >
                {place.name}, {place.district.toUpperCase()}
              </h3>
              <p className="text-sm text-[#727272] lg:text-base">
                {place.description}
              </p>
            </div>
          </Link>
        ))}
        <CalendlyComponent />
      </div>
      {/* <RentPlaceCarousel items={rentPlaces} /> */}
      <div className="flex justify-start lg:justify-end">
        <div className="flex flex-row-reverse items-start gap-4 lg:w-7/12 lg:flex-row lg:items-center lg:gap-2">
          <p className="text-left text-lg lg:text-base">
            Asegura la fecha de tu evento sin problemas: reserva en línea con
            diversas opciones de pago. Solo necesitas abonar el 50% y firmar
            digitalmente el contrato.
          </p>
          <div className="relative aspect-square h-[60px] w-[60px] lg:h-[180px] lg:w-[180px]">
            <Image
              src={ReservaIcono}
              alt="MOLIERE 310, POLANCO"
              fill
              sizes="100%"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
