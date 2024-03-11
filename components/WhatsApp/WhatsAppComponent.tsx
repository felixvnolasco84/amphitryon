import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WhatsAppComponent() {
  return (
    <Link
      target="_blank"
      href={
        "https://wa.me/5538931801?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios"
      }
      className="container sticky bottom-2 z-50 mx-auto flex w-full justify-end rounded-md"
    >
      <Button size={"lg"} className="relative bg-green-500">
        * WhatsApp
      </Button>
    </Link>
  );
}
