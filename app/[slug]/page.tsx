import HeroSection from "@/components/Sections/HeroSection";
import { RentPlace, rentPlaces } from "@/utils/data";
import { clashDisplayMedium, clashDisplaySemibold } from "@/utils/fonts";
import MOLIERE from "@/public/images/MOLIERE 310, POLANCO.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import Arrow from "@/public/svg/Arrow_Icon.svg";
import CustomMapSection from "@/components/Sections/CustomMapSection";
import GalleryCarousel from "@/components/Carousel/GalleryCarousel";
import RentPlaceFeaturedCarousel from "@/components/Carousel/RentPlaceFeaturedCarousel";

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
    <div className="flex flex-col gap-6 lg:gap-12">
      <div className="grid grid-flow-col items-center justify-between gap-2">
        {rentPlace.previousLink ? (
          <Link href={rentPlace.previousLink} className="">
            <Button
              className="relative cursor-pointer"
              variant={"arrow"}
              size={"arrow"}
            >
              <Image
                src={Arrow}
                fill
                className="object-cover object-center"
                alt="Arrow"
              />
            </Button>
          </Link>
        ) : (
          <Button
            className="relative cursor-pointer disabled:cursor-not-allowed"
            disabled={true}
            variant={"arrow"}
            size={"arrow"}
          >
            <Image
              src={Arrow}
              fill
              className="object-cover object-center"
              alt="Arrow"
            />
          </Button>
        )}

        <div className="flex flex-col">
          <h1
            className={`${clashDisplaySemibold.className} text-4xl lg:text-7xl xl:text-8xl text-center`}
          >
            {rentPlace.name}
          </h1>
          <h2 className="text-center text-xl lg:text-4xl xl:text-5xl">
            {rentPlace.description}
          </h2>
        </div>
        {rentPlace.nextLink ? (
          <Link href={rentPlace.nextLink}>
            <Button
              className="relative cursor-pointer disabled:cursor-not-allowed"
              variant={"arrow"}
              size={"arrow"}
            >
              <Image
                src={Arrow}
                fill
                className="rotate-180 object-cover object-center"
                alt="Arrow"
              />
            </Button>
          </Link>
        ) : (
          <Button
            className="relative cursor-pointer disabled:cursor-not-allowed"
            variant={"arrow"}
            size={"arrow"}
          >
            <Image
              src={Arrow}
              fill
              className="rotate-180 object-cover object-center"
              alt="Arrow"
            />
          </Button>
        )}
      </div>
      <div className="hidden grid-flow-col gap-4 lg:grid">
        {rentPlace.features.map((feature, index) => (
          <div className="border-t-2 border-black pt-2 lg:pt-4" key={index}>
            <h3 className="text-xs text-[#727272] lg:text-sm">
              {feature.title}
            </h3>
            <p
              className={`${clashDisplayMedium.className} text-lg lg:text-xl xl:text-2xl`}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <RentPlaceFeaturedCarousel features={rentPlace.features} />
      <HeroSection img={rentPlace.img} />
      <div className="flex flex-col gap-2 bg-[#F8F8F8] p-4 lg:gap-4">
        <h3 className={`${clashDisplayMedium.className} my-0 lg:my-2 text-3xl`}>
          {rentPlace.name + " - " + rentPlace.location}
        </h3>
        <p className="text-sm lg:text-base">{rentPlace.largeDescription}</p>
      </div>
      <div className="hidden grid-cols-2 gap-2 align-baseline lg:grid lg:gap-4">
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
      <GalleryCarousel items={rentPlace.gallery} />
      <CustomMapSection location={rentPlace.locationInMap} />
    </div>
  );
}
