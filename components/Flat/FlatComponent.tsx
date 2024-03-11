import Image, { StaticImageData } from "next/image";

export default function FlatComponent({
  flat,
  flatPDF,
}: {
  flat: StaticImageData;
  flatPDF: string;
}) {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold lg:text-4xl xl:mb-8 xl:text-5xl">
        PLANO DEL VENUE
      </h2>
      <div className="relative aspect-square h-fit w-full">
        <Image
          src={flat}
          alt="Flat"
          fill
          sizes="100%"
          className="h-full w-full object-cover object-center"
        />
      </div>
      {/* Boto para descargar el plano que es un archivo pdf */}
      <a
        href={flatPDF}
        download="Plano.pdf"
        className="mt-6 flex justify-center"
      >
        <button className="rounded-md bg-black px-4 py-2 text-white">
          Descargar Plano
        </button>
      </a>
    </div>
  );
}
