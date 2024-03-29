
import HeroSection from "@/components/Sections/HeroSection";
import { Metadata, ResolvingMetadata } from "next";
import { RentPlace, rentPlaces } from "@/utils/data";
import { clashDisplayMedium, clashDisplaySemibold } from "@/utils/fonts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Arrow from "@/public/svg/Arrow_Icon.svg";
import CustomMapSection from "@/components/Sections/CustomMapSection";
import PlaceTablePricing from "@/components/Table/PlaceTablePricing";
import FlatComponent from "@/components/Flat/FlatComponent";
import WhatsAppButton from "@/components/WhatsApp/WhatsAppButton";
import GalleryCarousel from "@/components/Carousel/GalleryCarousel";
import WhatsAppComponent from "@/components/WhatsApp/WhatsAppComponent";
import CustomModalCalendly from "@/components/Calendar/CustomModalCalendly";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const rentPlace = rentPlaces.find((service: any) => service.slug === slug);

  return {
    title: rentPlace?.metaTitle,
    description: rentPlace?.metaDescription,
  };
}

export default function PlacePage({ params }: Props) {
  const { slug } = params;
  const rentPlace: RentPlace = rentPlaces.find(
    (rentPlace) => rentPlace.slug === slug
  )!;
  return (
    <>
      <div className="container flex flex-col gap-6 lg:gap-12">
        <div className="grid grid-flow-col items-center justify-between gap-2">
          <Link href={rentPlace.previousLink || ""} className="">
            <Button
              className="relative cursor-pointer"
              variant={"arrow"}
              size={"arrow"}
            >
              <Image
                src={Arrow}
                fill
                sizes="100vw"
                className="object-cover object-center"
                alt="Arrow"
              />
            </Button>
          </Link>

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
                  sizes="100vw"
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
                sizes="100vw"
                className="rotate-180 object-cover object-center"
                alt="Arrow"
              />
            </Button>
          )}
        </div>
        <div className="grid-flow-col gap-4 lg:grid">
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
        <HeroSection isRentPlace={true} img={rentPlace.img} />
        <div className="flex flex-col gap-2 bg-[#F8F8F8] p-4 lg:gap-4">
          <h3
            className={`${clashDisplayMedium.className} my-0 lg:my-2 text-3xl`}
          >
            {rentPlace.name + " - " + rentPlace.location}
          </h3>
          <p className="text-sm lg:text-base">{rentPlace.largeDescription}</p>
        </div>
        <div className="hidden grid-cols-1 gap-2 align-baseline lg:grid lg:grid-cols-2 lg:gap-4">
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
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        <GalleryCarousel items={rentPlace.gallery} />
        <PlaceTablePricing prices={rentPlace.prices} />
        <FlatComponent flat={rentPlace.flat} flatPDF={rentPlace.flatPDF} />
        <CustomMapSection location={rentPlace.locationInMap} />

        <div className="flex flex-col gap-2">         
          <CustomModalCalendly url={rentPlace.calendlyURL} />
          <WhatsAppButton url={rentPlace.whatsAppURL} />
          <Link className="mx-auto" href={"/"}>
            <Button variant={"link"} size={"lg"}>
              Regresar al Inicio
            </Button>
          </Link>
        </div>
      </div>
      <WhatsAppComponent />
    </>
  );
}
