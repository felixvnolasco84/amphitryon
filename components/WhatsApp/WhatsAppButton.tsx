"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect } from "react";
import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";

export default function WhatsAppButton({ url }: { url: string }) {
  useEffect(() => {
    InitializeGoogleAnalytics();
  }, []);
  return (
    <Link className="w-full" href={url}>
      <Button
        onClick={() =>
          TrackGoogleAnalyticsEvent(
            "click",
            "enviar_mensaje",
            window.location.pathname
          )
        }
        className="w-full bg-green-400 text-gray-800"
        size={"contact"}
        variant={"contact"}
      >
        WhatsApp
      </Button>
    </Link>
  );
}
