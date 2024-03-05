import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black text-white xl:text-3xl">
      <div className="container grid grid-cols-1 gap-6 py-12 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-12">
          <Link
            href={"/"}
            className="relative h-[22px] w-[90px] bg-white lg:h-[50px] lg:w-[195px]"
          >
            <Image
              className="object-fill object-center"
              fill
              sizes="100%"
              alt=""
              src={Logo}
            />
          </Link>
          <h4 className="text-3xl lg:hidden">Let&apos;s Talk</h4>
          <div className="flex flex-col gap-1 text-sm lg:gap-2 lg:text-base">
            <Link href={"tel:+5512345678"}>(55) 1234 5678</Link>
            <Link href={"tel:5512345678"}>(55) 1234 5678</Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 lg:gap-6 xl:gap-12">
          <h4 className="hidden text-4xl lg:block xl:text-6xl">
            Let&apos;s Talk
          </h4>
          <div className="flex flex-col gap-2 text-sm lg:gap-4 lg:text-base">
            <Link
              className="underline"
              href={
                "https://wa.me/5513842959?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios"
              }
            >
              WHATSAPP
            </Link>
            {/* <Link className="underline" href={"#"}>
              FACEBOOK
            </Link> */}
            <Link
              className="underline"
              href={"https://www.instagram.com/grupoamphitryon/"}
            >
              INSTAGRAM
            </Link>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-between gap-4 border-white py-4 text-xs text-white lg:flex-row lg:gap-0 lg:border-t-2 lg:py-6 lg:text-base xl:py-12 xl:text-lg">
        <p>CIUDAD DE MÉXICO, MÉXICO.</p>
        <p>AVISO DE PRIVACIDAD.</p>
        <p>DESARROLLADO POR POLYGON.</p>
      </div>
    </div>
  );
}
