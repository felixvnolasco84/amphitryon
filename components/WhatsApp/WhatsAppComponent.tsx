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
    <div className="container sticky bottom-2 right-2 flex w-full justify-end">
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
        className="container z-50 mx-0 w-fit rounded-md bg-green-400 py-2 text-xl text-gray-800 hover:bg-gray-800 hover:text-white"
      >
        * WhatsApp
      </Link>
    </div>
  );
}
