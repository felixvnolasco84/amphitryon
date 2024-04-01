"use client";

import { TrackGoogleAnalyticsEvent } from "@/lib/google-analytics";
import Link from "next/link";
import React from "react";

export default function FooterLinkComponent() {
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
      className="text-left underline"
      href={
        "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios"
      }
    >
      WHATSAPP
    </Link>
  );
}
