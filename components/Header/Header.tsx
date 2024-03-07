import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <div className="container sticky z-50 flex items-center justify-between border-b-2 border-[#707070] bg-white pb-3 pt-6 text-lg lg:pb-5 lg:pt-5 xl:pb-6 xl:pt-12">
      <Link
        href={"/"}
        className="relative h-[22px] w-[90px] lg:h-[42px] lg:w-[160px] xl:h-[50px] xl:w-[195px]"
      >
        <Image
          className="object-fill object-center"
          fill
          sizes="100vw"
          alt=""
          src={Logo}
        />
      </Link>
      <h1 className="text-center text-xs lg:text-base xl:text-lg">
        GRUPO DE ESPACIOS PARA EVENTOS PRIVADOS
      </h1>
      <nav className="items-center gap-4 lg:flex">
        <Link
          className="hidden h-fit lg:block lg:text-base xl:text-lg"
          href="#contacto"
        >
          Contacto
        </Link>
        <HeaderMobile />
      </nav>
    </div>
  );
}
