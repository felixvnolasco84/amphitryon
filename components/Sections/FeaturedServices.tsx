import { clashDisplayMedium } from "@/utils/fonts";
import Image, { StaticImageData } from "next/image";
import Group3 from "@/public/images/Group -1.png";

import Money_Icon_Bill from "@/public/svg/Money_Icon_Bill.svg";
import Money_Icon from "@/public/svg/Money_Icon_Orange.svg";
import Money_Icon_Smartphone from "@/public/svg/Money_Icon_Smartphone.svg";
import ServicesCarousel from "../Carousel/ServicesCarousel";
import FeaturedCarousel from "../Carousel/FeaturedCarousel";
type Service = {
  name: string;
  description: string;
};

type SimpleService = {
  title: string;
  img: StaticImageData;
};

const services: Service[] = [
  {
    name: "TOTAL FLEXIBILIDAD",
    description:
      "En nuestro espacio para eventos privados, tienes total libertad para elegir proveedores externos. Personaliza tu evento trayendo tu catering, decorador y servicios preferidos. Nos adaptamos a tus necesidades para crear una experiencia única que refleje tu estilo.",
  },
  {
    name: "SERVICIO ALL INCLUSIVE",
    description:
      "En Grupo Amphitryon te ofrecemos un servicio completo que cubre todas tus necesidades. Desde barras libres hasta catering de primera calidad, mobiliario adicional, DJ y más. Nos encargamos de todos los detalles para que puedas disfrutar de un evento sin preocupaciones.",
  },
  {
    name: "ESPACIO LISTOS",
    description:
      "Nuestros espacios para eventos están listos para usar, lo que significa que ya incluyen mobiliario, sistema de sonido, limpieza e iluminación. Esto te permite reducir los costos de producción y simplificar la planificación de tu evento. Disfruta de la comodidad y ahorra tiempo y dinero",
  },
];

const simpleServices: SimpleService[] = [
  {
    title: "Pago de reserva con tarjeta",
    img: Money_Icon_Smartphone,
  },
  {
    title: "Sistema de Facturación en Línea",
    img: Money_Icon,
  },
  {
    title: "Sistema de contrato en línea",
    img: Money_Icon_Bill,
  },
];

export default function FeaturedServices() {
  return (
    <div className="flex flex-col gap-10 text-center lg:gap-20">
      <div className="flex flex-col gap-2 lg:gap-4">
        <h3 className={`${clashDisplayMedium.className} text-xl lg:text-3xl`}>
          RENTA TU ESPACIO FAVORITO PARA TU EVENTO PRIVADO EN CDMX
        </h3>
        <p className="text-sm lg:text-base">
          Somos tu mejor opción para eventos privados en la Ciudad de México.
          Con tres espacios exclusivos, donde la elegancia se mezcla con la
          comodidad, tienes el control total sobre todo lo que necesitas para
          hacer realidad tu reunión, celebración y evento social o corporativo.
        </p>
      </div>
      <div className="hidden grid-cols-1 gap-2 lg:grid lg:grid-cols-3">
        {services.map((service) => (
          <div className="bg-[#F8F8F8] p-3 text-left lg:p-6" key={service.name}>
            <h4
              className={`${clashDisplayMedium.className} text-xl lg:text-2xl xl:text-3xl my-1 lg:my-2`}
            >
              {service.name}
            </h4>
            <p className="text-sm text-[#222222] lg:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <ServicesCarousel items={services} />
      <div className="hidden grid-cols-1 gap-2 lg:grid lg:grid-cols-3">
        {simpleServices.map((service) => (
          <div
            className="flex flex-col items-center gap-4 text-center"
            key={service.title}
          >
            <div className="relative h-60 w-60">
              <Image
                src={service.img.src}
                alt=""
                className="object-cover object-center"
                fill
                sizes="100vw"
              />
            </div>

            <h4
              className={`${clashDisplayMedium.className} text-xl lg:text-2xl my-01 lg:my-2`}
            >
              {service.title}
            </h4>
          </div>
        ))}
      </div>
      <FeaturedCarousel items={simpleServices} />
    </div>
  );
}
