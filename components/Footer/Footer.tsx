import Image from "next/image";
import Logo from "@/public/images/Logo_Amphitryon_blanco.png";
import Estrella from "@/public/svg/Vector_estrella.svg";
import Link from "next/link";
import FooterLinkComponent from "./FooterLinkComponent";

export default function Footer() {
  return (
    <footer className="bg-black text-white xl:text-3xl">
      <div className="grid grid-cols-1 justify-between gap-6 py-12 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-12">
          <Link
            href={"/"}
            className="relative h-[22px] w-[90px] lg:h-[50px] lg:w-[195px]"
          >
            <Image
              className="object-fill object-center"
              fill
              sizes="100%"
              alt="image of Amphitryon logo"
              src={Logo}
            />
          </Link>
          {/* <h4 className="text-3xl lg:hidden">Let&apos;s Talk</h4> */}
          <div className="flex flex-col gap-1 text-sm lg:gap-2 lg:text-base">
            <Link href={"tel:5542957398"}>Salvador Mier: (55) 4295 7398</Link>
            <Link href={"tel:5513842959"}>César González: (55) 1384 2959</Link>
            <Link href={"tel:5620244047"}>Antón Arias: (56) 2024 4047</Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 lg:items-end lg:gap-6 xl:gap-12">
          <div className="relative">
            <h4 className="text-4xl lg:block xl:text-6xl">Hablemos</h4>
            <div className="absolute right-0 top-0">
              <div className="relative h-4 w-4">
                <Image
                  src={Estrella}
                  className="object-cover object-center"
                  fill
                  alt="Star icon"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col text-sm lg:gap-4 lg:text-base">
            <FooterLinkComponent />
            <Link
              className="text-left underline"
              href={"https://www.instagram.com/grupoamphitryon/"}
              target="_blank"
            >
              INSTAGRAM
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-2 border-white py-4 text-xs text-white lg:flex-row lg:gap-4 lg:border-t-2 lg:py-6 lg:text-base xl:py-12 xl:text-lg">
        <p>CIUDAD DE MÉXICO, MÉXICO.</p>
        <Link href={"/aviso-de-privacidad"}>AVISO DE PRIVACIDAD.</Link>
        <p>DESARROLLADO POR POLYGON.</p>
      </div>
    </footer>
  );
}
