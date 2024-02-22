import Image, { StaticImageData } from "next/image";

export default function HeroSection({ img }: { img: StaticImageData }) {
  return (
    <div className="relative aspect-video w-full">
      <Image
        className="aspect-square object-cover object-center"
        sizes="100vw"
        fill
        src={img}
        alt=""
      />
    </div>
  );
}
