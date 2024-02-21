import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Link from "next/link";
import { Button } from "../ui/button";
Link;

export default function Header() {
  return (
    <div className="container flex items-center justify-between border-b-2 border-[#707070] pb-6 pt-12 text-lg">
      <div className="relative h-[55px] w-[195px]">
        <Image
          className="object-cover object-center"
          fill
          sizes="100vw"
          alt=""
          src={Logo}
        />
      </div>
      <h1>GRUPO DE ESPACIOS PARA EVENTOS PRIVADOS</h1>
      <nav className="flex items-center gap-4">
        <Link className="h-fit" href="#">
          Nosotros
        </Link>
        <Link className="h-fit" href="#">
          Contacto
        </Link>
        <Button variant={"default"} size={"lg"}>
          |||
        </Button>
      </nav>
    </div>
  );
}
