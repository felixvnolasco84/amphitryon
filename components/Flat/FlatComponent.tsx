import Image, { StaticImageData } from "next/image";

export default function FlatComponent({ flat }: { flat: StaticImageData }) {
  return (
    <div>
      <h2 className="text-center text-6xl font-bold">PLANO DEL VENUE</h2>
      <div className="relative aspect-square h-fit w-full">
        <Image
          src={flat}
          alt="Flat"
          fill
          sizes="100%"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
