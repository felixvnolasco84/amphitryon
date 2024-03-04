"use client";

import Logo from "@/public/images/logo.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

export default function HeaderMobile() {
  return (
    <Sheet>
      <SheetTrigger className="block lg:hidden">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <Link href={"/"} className="relative h-[22px] w-[90px]">
              <Image
                className="object-fill object-center"
                fill
                sizes="100vw"
                alt=""
                src={Logo}
              />
            </Link>
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-2 text-2xl text-black">
            {/* <Link
              className="h-fit"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("nosotros")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <SheetClose>Nosotros</SheetClose>
            </Link> */}
            <SheetTrigger>
              <Link
                className="h-fit"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <SheetClose>Contacto</SheetClose>
              </Link>
            </SheetTrigger>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
