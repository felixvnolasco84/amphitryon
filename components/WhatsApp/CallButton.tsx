"use client";

import Link from "next/link";
import { TrackGoogleAnalyticsEvent } from "@/lib/google-analytics";
import React from "react";
import { Button } from "../ui/button";

export default function CallButton() {
  return (
    <Link
      className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-xl bg-[#FC9532] px-4 text-xl font-medium text-[#000000] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      target="_blank"
      onClick={() =>
        TrackGoogleAnalyticsEvent("click", "llamar", window.location.pathname)
      }
      href={"tel:5542957398"}
    >
      Llamar
    </Link>
  );
}
