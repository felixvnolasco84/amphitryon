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
    <div className="order-5 flex flex-col gap-10 text-center lg:order-3 lg:gap-20">
      <div className="grid grid-cols-1 gap-4 lg:grid lg:grid-cols-3 lg:gap-2">
        {services.map((service) => (
          <div
            className="bg-[#F8F8F8] p-3 lg:p-6 lg:text-left"
            key={service.name}
          >
            <h4
              className={`${clashDisplayMedium.className} text-xl lg:text-2xl xl:text-3xl my-1 lg:my-2`}
            >
              {service.name}
            </h4>
            <p className="text-base text-[#222222]">{service.description}</p>
          </div>
        ))}
      </div>
      {/* <ServicesCarousel items={services} /> */}
      {/* <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
        {simpleServices.map((service) => (
          <div
            className="flex flex-col items-center gap-2 text-center lg:gap-4"
            key={service.title}
          >
            <div className="relative h-[190px] w-3/4 lg:h-60 lg:w-60">
              <Image
                src={service.img.src}
                alt=""
                className="object-cover object-center"
                fill
                sizes="100vw"
              />
            </div>

            <h4
              className={`${clashDisplayMedium.className} text-lg lg:text-2xl my-01 lg:my-2`}
            >
              {service.title}
            </h4>
          </div>
        ))}
      </div> */}
      {/* <FeaturedCarousel items={simpleServices} /> */}
    </div>
  );
}
