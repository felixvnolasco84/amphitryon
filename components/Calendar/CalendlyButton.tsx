"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect } from "react";
import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";

export default function CalendlyButton({ url }: { url: string }) {
  useEffect(() => {
    InitializeGoogleAnalytics();
  }, []);

  return (
    <Link className="w-full" href={url}>
      <Button
        onClick={() =>
          TrackGoogleAnalyticsEvent(
            "agendar_cita",
            "click",
            window.location.pathname
          )
        }
        className="w-full"
        size={"contact"}
        variant={"contact"}
      >
        Agenda una cita
      </Button>
    </Link>
  );
}
