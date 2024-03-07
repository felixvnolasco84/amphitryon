import Link from "next/link";
import { Button } from "../ui/button";

export default function CalendlyButton({ url }: { url: string }) {
  return (
    <Link className="w-full" href={url}>
      <Button className="w-full" size={"contact"} variant={"contact"}>
        Agenda una cita
      </Button>
    </Link>
  );
}
