import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Link from "next/link";
import { Button } from "../ui/button";
Link;

export default function Header() {
  return (
    <div className="container flex items-center justify-between border-b-2 border-[#707070] pb-3 pt-6 text-lg lg:pb-6 lg:pt-12">
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
      <h1 className="text-center text-sm lg:text-base xl:text-lg">
        GRUPO DE ESPACIOS PARA EVENTOS PRIVADOS
      </h1>
      <nav className="items-center gap-4 lg:flex">
        <Link
          className="hidden h-fit lg:block lg:text-base xl:text-lg"
          href="#"
        >
          Nosotros
        </Link>
        <Link
          className="hidden h-fit lg:block lg:text-base xl:text-lg"
          href="#"
        >
          Contacto
        </Link>
        <Button variant={"default"} size={"lg"}>
          |||
        </Button>
      </nav>
    </div>
  );
}
