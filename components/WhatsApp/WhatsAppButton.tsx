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
    <Button
      className="w-full bg-green-400 text-gray-800 hover:text-white"
      size={"contact"}
      variant={"contact"}
    >
      <Link
        target="_blank"
        onClick={() =>
          TrackGoogleAnalyticsEvent(
            "click",
            "enviar_mensaje",
            window.location.pathname
          )
        }
        className="w-full"
        href={url}
      >
        WhatsApp
      </Link>
    </Button>
  );
}
