import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black px-12 text-white xl:text-3xl">
      <div className="grid grid-cols-2 py-12">
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
          <div className="flex flex-col gap-2">
            <p>(55) 1234 5678</p>
            <p>(55) 1234 5678</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-12">
          <h4 className="text-6xl">Let&apos;s Talk</h4>
          <div className="flex flex-col gap-4">
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
      <div className="flex justify-between border-t-2 border-white py-12 text-lg text-white">
        <p>CIUDAD DE MÉXICO, MÉXICO.</p>
        <p>AVISO DE PRIVACIDAD.</p>
        <p>DESARROLLADO POR POLYGON.</p>
      </div>
    </div>
  );
}
