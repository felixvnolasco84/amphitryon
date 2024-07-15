import Image from "next/image";
import Logo from "@/public/images/logo.webp";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <header className="container sticky top-0 z-50 flex items-center justify-between border-b-2 border-[#707070] bg-white px-4 pb-3 pt-6 text-lg lg:pb-5 lg:pt-5 xl:pb-6 xl:pt-12">
      <nav className="w-full">
        <ul className="flex flex-row items-center justify-between gap-4">
          <Link
            href={"/"}
            className="relative h-[22px] w-[90px] lg:h-[42px] lg:w-[160px] xl:h-[50px] xl:w-[195px]"
          >
            <Image
              className="object-fill object-center"
              fill
              sizes="100vw"
              alt="image of Amphitryon logo"
              src={Logo}
            />
          </Link>

          <Link href={"/"}>
            <h1 className="text-center text-xs lg:text-base xl:text-lg">
              GRUPO DE ESPACIOS PARA EVENTOS PRIVADOS
            </h1>
          </Link>

          <li className="items-center gap-4 lg:flex">
            <Link
              className="hidden h-fit hover:underline lg:block lg:text-base xl:text-lg"
              href="#contacto"
            >
              Contacto
            </Link>
            <HeaderMobile />
          </li>
        </ul>
      </nav>
    </header>
  );
}
