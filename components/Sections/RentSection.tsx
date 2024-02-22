import { clashDisplayMedium } from "@/utils/fonts";
import MOLIERE from "@/public/images/MOLIERE 310, POLANCO.png";
import PALMAS from "@/public/images/PALMAS 781, LOMAS DE CHAPULTEPEC.png";
import TONALÁ from "@/public/images/TONALÁ 171, ROMA NORTE.png";
import Image, { StaticImageData } from "next/image";

import AgregarIcono from "@/public/images/Agregar_Sevicio_Icono.png";
import ReservaIcono from "@/public/images/Reserva_Icono.png";
import Link from "next/link";
import { rentPlaces } from "@/utils/data";

export default function RentSection() {
  return (
    <div className="flex flex-col gap-12">
      <h2 className={`${clashDisplayMedium.className} text-3xl text-center`}>
        ALGUNOS LUGARES A LA RENTA PARA TUS EVENTOS PRIVADOS
      </h2>
      <div className="grid grid-cols-2 gap-4 align-baseline">
        {rentPlaces.map((place, index) => (
          <Link
            href={`/${place.slug}`}
            key={index}
            className="flex aspect-square flex-col gap-2"
          >
            <Image className="aspect-square" src={place.img} alt={place.name} />
            <div>
              <h3 className={`${clashDisplayMedium.className} text-2xl`}>
                {place.name}
              </h3>
              <p className="font- text-[#727272]">{place.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-end">
        <div className="flex w-7/12 items-center">
          <p>
            Asegura la fecha de tu evento sin problemas: reserva en línea con
            diversas opciones de pago. Solo necesitas abonar el 50% y firmar
            digitalmente el contrato.
          </p>
          <div className="relative aspect-square h-[180px]">
            <Image
              src={ReservaIcono}
              alt="MOLIERE 310, POLANCO"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="relative aspect-square h-[180px]">
          <Image
            alt=""
            className="object-cover object-center"
            fill
            sizes="100vw"
            src={AgregarIcono}
          />
        </div>
        <div className="flex flex-col gap-4 bg-[#F8F8F8] p-4">
          <h3 className={`${clashDisplayMedium.className} my  -2 text-3xl`}>
            VENUES PROPIOS
          </h3>
          <p>
            Nuestros venues para eventos son propios, sin intermediarios ni
            comisiones adicionales. Los precios son fijos y se encuentran
            públicamente disponibles en la información de cada espacio. Con
            nosotros, disfrutas de una experiencia sin complicaciones y con toda
            la atención que mereces para tu evento.
          </p>
        </div>
      </div>
    </div>
  );
}
