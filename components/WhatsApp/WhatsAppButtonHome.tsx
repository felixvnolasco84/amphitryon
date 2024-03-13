"use client";

import { TrackGoogleAnalyticsEvent } from "@/lib/google-analytics";
import Link from "next/link";
import React from "react";

export default function WhatsAppButtonHome() {
  return (
    <Link
      onClick={() =>
        TrackGoogleAnalyticsEvent(
          "click",
          "enviar_mensaje",
          window.location.pathname
        )
      }
      href={
        "https://wa.me/5513842959?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios"
      }
      className="rounded-md bg-green-500 p-2 text-left text-black hover:bg-gray-800 hover:text-white hover:underline"
    >
      Envíanos un mensaje por WhatsApp
    </Link>
  );
}
