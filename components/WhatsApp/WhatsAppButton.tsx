import Link from "next/link";
import { Button } from "../ui/button";

export default function WhatsAppButton({ url }: { url: string }) {
  return (
    <Link className="w-full" href={url}>
      <Button
        className="w-full bg-green-400"
        size={"contact"}
        variant={"contact"}
      >
        WhatsApp
      </Button>
    </Link>
  );
}
