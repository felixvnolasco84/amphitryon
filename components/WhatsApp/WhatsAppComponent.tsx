"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";

export default function WhatsAppComponent() {
  useEffect(() => {
    InitializeGoogleAnalytics();
  }, []);
  return (
    <Button
      size={"lg"}
      className="relative bg-green-400 text-gray-800 hover:text-white"
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
        href={
          "https://wa.me/5538931801?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios"
        }
        className="container sticky bottom-2 z-50 mx-auto flex w-full justify-end rounded-md"
      >
        * WhatsApp
      </Link>
    </Button>
  );
}
