"use client";

import { TrackGoogleAnalyticsEvent } from "@/lib/google-analytics";
import Link from "next/link";
import React from "react";

export default function WhatsAppButtonHome() {
  return (
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
      className="bg-green-500 hover:bg-gray-800 p-2 rounded-md text-black text-left hover:text-white hover:underline"
    >
      Envíanos un mensaje por WhatsApp
    </Link>
  );
}
