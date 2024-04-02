"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";
import CallButton from "./CallButton";

export default function WhatsAppComponent() {
  useEffect(() => {
    InitializeGoogleAnalytics();
  }, []);
  return (
    <div className="right-2 bottom-2 sticky flex flex-col justify-end items-end gap-2 container">
      <CallButton />
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
          "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios"
        }
        className="z-50 bg-green-400 hover:bg-gray-800 mx-0 py-2 rounded-md w-fit text-gray-800 text-xl hover:text-white container"
      >
        * WhatsApp
      </Link>
    </div>
  );
}
