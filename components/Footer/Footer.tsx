import Image from "next/image";
import Logo from "@/public/images/Logo_Amphitryon_blanco.png";
import Estrella from "@/public/svg/Vector_estrella.svg";
import Link from "next/link";
import FooterLinkComponent from "./FooterLinkComponent";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-black px-4 text-white xl:text-3xl">
      <div className="container grid grid-cols-1 justify-between gap-6 py-12 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-12">
          <Link href={"/"}>
            <Image width={195} sizes="100vw" alt="Amphitryon" src={Logo} />
          </Link>
          <div className="flex flex-col gap-1 text-sm lg:gap-2 lg:text-base">
            {/* <Link target="_blank" href={"tel:5523053711"}>
              <Button className="text-lg underline" variant={"ghost"}>
                Inés Torres (55) 2305 3711
              </Button>
            </Link> */}

            {/* <Link target="_blank" href={"tel:5538931801"}>
              <Button className="text-lg underline" variant={"ghost"}>
              Jimena Montenegro:  ( 55) 3893 1801              
              </Button>
            </Link> */}


            <Link target="_blank" href={"tel:5565222282"}>
              <Button className="text-lg underline" variant={"ghost"}>
                Pili Arias:  (55) 6522 2282
              </Button>
            </Link>


            {/* <Link target="_blank" href={"tel:5620244047"}>
              <Button className="text-lg underline" variant={"ghost"}>
                Antón Arias: (56) 2024 4047
              </Button>
            </Link> */}


            {/* <Link target="_blank" href={"tel:5542957398"}>
              <Button className="text-lg underline" variant={"ghost"}>
                Salvador Mier: (55) 4295 7398
              </Button>
            </Link> */}

            {/* <Link target="_blank" href={"tel:5544502253"}>
              <Button className="text-lg underline" variant={"ghost"}>
                Rafael González: (55) 4450 2253
              </Button>
            </Link> */}


            {/* <Link target="_blank" href={"tel:5610070314"}>
              <Button className="text-lg underline" variant={"ghost"}>
                Luisa Gomez: (56) 1007 0314
              </Button>
            </Link> */}

            {/* <Link target="_blank" href={"tel:5513842959"}>
              <Button className="text-lg underline" variant={"ghost"}>
                Cesar Gonzalez: (55) 1384 2959
              </Button>
            </Link> */}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 lg:items-end lg:gap-6 xl:gap-12">
          <div className="relative">
            <h3 className="text-4xl lg:block xl:text-6xl">Hablemos</h3>
            <div className="absolute right-0 top-0">
              <div className="relative h-4 w-4">
                <Image
                  src={Estrella}
                  className="object-cover object-center"
                  fill
                  sizes="100vw"
                  alt="Star icon"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col text-sm lg:gap-2 lg:text-base">
            <FooterLinkComponent />
            <Link
              href={"https://www.instagram.com/grupoamphitryon/"}
              target="_blank"
            >
              <Button
                className="text-lg underline"
                variant={"ghost"}
                size={"sm"}
              >
                INSTAGRAM
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-between gap-2 border-white py-4 text-xs text-white lg:flex-row lg:gap-4 lg:border-t-2 lg:py-6 lg:text-base xl:py-12 xl:text-lg">
        <p>CIUDAD DE MÉXICO, MÉXICO.</p>
        <Link href={"/aviso-de-privacidad"}>
          <Button className="text-lg underline" variant={"ghost"} size={"sm"}>
            AVISO DE PRIVACIDAD.
          </Button>
        </Link>
        <Link href={"https://www.polygonag.com/"} target="_blank">
          <Button className="text-lg underline" variant={"ghost"} size={"sm"}>
            DESARROLLADO POR POLYGON.
          </Button>
        </Link>
      </div>
    </footer>
  );
}
