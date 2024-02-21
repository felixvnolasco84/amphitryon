import { clashDisplayMedium } from "@/utils/fonts";
import Image, { StaticImageData } from "next/image";

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
    img: require("../../public/images/Group 3.png"),
  },
  {
    title: "Sistema de Facturación en Línea",
    img: require("../../public/images/Group 3.png"),
  },
  {
    title: "Sistema de contrato en línea",
    img: require("../../public/images/Group 3.png"),
  },
];

export default function FeaturedServices() {
  return (
    <div className="flex flex-col gap-20 text-center">
      <div className="flex flex-col gap-4">
        <h3 className={`${clashDisplayMedium.className} text-3xl`}>
          RENTA TU ESPACIO FAVORITO PARA TU EVENTO PRIVADO EN CDMX
        </h3>
        <p>
          Somos tu mejor opción para eventos privados en la Ciudad de México.
          Con tres espacios exclusivos, donde la elegancia se mezcla con la
          comodidad, tienes el control total sobre todo lo que necesitas para
          hacer realidad tu reunión, celebración y evento social o corporativo.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {services.map((service) => (
          <div className="bg-[#F8F8F8] p-6 text-left" key={service.name}>
            <h4
              className={`${clashDisplayMedium.className} text-xl lg:text-2xl xl:text-3xl my-2`}
            >
              {service.name}
            </h4>
            <p className="text-base text-[#222222]">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
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
              className={`${clashDisplayMedium.className} text-xl lg:text-2xl my-2`}
            >
              {service.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
