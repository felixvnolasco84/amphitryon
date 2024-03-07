import { clashDisplayMedium } from "@/utils/fonts";

export default function CTASection() {
  return (
    <div className="order-2 flex flex-col gap-2 text-center lg:gap-4">
      <h3 className={`${clashDisplayMedium.className} text-xl lg:text-3xl`}>
        RENTA TU ESPACIO FAVORITO PARA TU EVENTO PRIVADO EN CDMX
      </h3>
      <p className="text-lg leading-tight lg:text-xl">
        Somos tu mejor opción para eventos privados en la Ciudad de México. Con
        tres espacios exclusivos, donde la elegancia se mezcla con la comodidad,
        tienes el control total sobre todo lo que necesitas para hacer realidad
        tu reunión, celebración y evento social o corporativo.
      </p>
    </div>
  );
}
