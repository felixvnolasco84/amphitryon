import HeroSection from "@/components/Sections/HeroSection";
import { RentPlace, rentPlaces } from "@/utils/data";
import { clashDisplayMedium, clashDisplaySemibold } from "@/utils/fonts";
import MOLIERE from "@/public/images/MOLIERE 310, POLANCO.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function PlacePage({ params }: Props) {
  const { slug } = params;
  const rentPlace: RentPlace = rentPlaces.find(
    (rentPlace) => rentPlace.slug === slug
  )!;
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center justify-between">
        {rentPlace.previousLink ? (
          <Link href={rentPlace.previousLink}>
            <Button size={"icon"}>PREVIOUS</Button>
          </Link>
        ) : (
          <Button
            className="cursor-pointer disabled:cursor-not-allowed"
            disabled={true}
            size={"icon"}
          >
            PREVIOUS
          </Button>
        )}

        <div className="flex flex-col">
          <h1
            className={`${clashDisplaySemibold.className} text-8xl text-center`}
          >
            {rentPlace.name}
          </h1>
          <h2 className="text-center text-5xl">{rentPlace.description}</h2>
        </div>
        {rentPlace.nextLink ? (
          <Link href={rentPlace.nextLink}>
            <Button
              className="cursor-pointer disabled:cursor-not-allowed"
              size={"icon"}
            >
              NEXT
            </Button>
          </Link>
        ) : (
          <Button disabled={true} size={"icon"}>
            NEXT
          </Button>
        )}
      </div>

      <div className="grid grid-flow-col gap-4">
        {rentPlace.features.map((feature, index) => (
          <div className="border-t-2 border-black pt-4" key={index}>
            <h3 className="text-sm text-[#727272]">{feature.title}</h3>
            <p className={`${clashDisplayMedium.className} text-2xl`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <HeroSection img={rentPlace.img} />

      <div className="flex flex-col gap-4 bg-[#F8F8F8] p-4">
        <h3 className={`${clashDisplayMedium.className} my  -2 text-3xl`}>
          {rentPlace.name + " - " + rentPlace.location}
        </h3>
        <p>{rentPlace.largeDescription}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 align-baseline">
        {rentPlace.gallery.map((image, index) => (
          <div
            key={index}
            className="relative flex aspect-square w-full flex-col gap-2"
          >
            <Image
              className="aspect-square object-cover object-center"
              src={image}
              alt=""
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}
