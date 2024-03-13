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
    <Link
      target="_blank"
      onClick={() =>
        TrackGoogleAnalyticsEvent(
          "click",
          "enviar_mensaje",
          window.location.pathname
        )
      }
      className="rounded-md bg-green-400 py-2 text-center text-xl text-gray-800 hover:bg-gray-800 hover:text-white"
      href={url}
    >
      WhatsApp
    </Link>
  );
}
