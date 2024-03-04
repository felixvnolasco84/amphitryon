import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black px-12 text-white xl:text-3xl">
      <div className="container grid grid-cols-2 py-12">
        <div className="flex flex-col gap-12">
          <Link
            href={"/"}
            className="relative h-[22px] w-[90px] lg:h-[50px] lg:w-[195px]"
          >
            <Image
              className="object-fill object-center"
              fill
              sizes="100vw"
              alt=""
              src={Logo}
            />
          </Link>
          <div className="flex flex-col gap-1 lg:gap-2">
            <p>(55) 1234 5678</p>
            <p>(55) 1234 5678</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 lg:gap-6 xl:gap-12">
          <h4 className="text-2xl lg:text-4xl xl:text-6xl">Let&apos;s Talk</h4>
          <div className="flex flex-col gap-2 lg:gap-4">
            <Link className="underline" href={"#"}>
              WHATSAPP
            </Link>
            <Link className="underline" href={"#"}>
              FACEBOOK
            </Link>
            <Link className="underline" href={"#"}>
              INSTAGRAM
            </Link>
          </div>
        </div>
      </div>
      <div className="container flex flex-col justify-between gap-4 border-t-2 border-white py-4 text-xs text-white lg:flex-row lg:gap-0 lg:py-6 lg:text-base xl:py-12 xl:text-lg">
        <p>CIUDAD DE MÉXICO, MÉXICO.</p>
        <p>AVISO DE PRIVACIDAD.</p>
        <p>DESARROLLADO POR POLYGON.</p>
      </div>
    </div>
  );
}
