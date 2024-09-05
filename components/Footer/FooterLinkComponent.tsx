"use client";

import { api } from "@/convex/_generated/api";
import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";
import { useMutation } from "convex/react";
import React from "react";
import { Button } from "../ui/button";

export default function FooterLinkComponent() {
  const create = useMutation(api.contact.create);

  const handleClick = () => {
    InitializeGoogleAnalytics();
    TrackGoogleAnalyticsEvent(
      "click",
      "enviar_mensaje",
      window.location.pathname
    );

    const promise = create();

    if (promise) {
      promise.then((url) => {
        if (url) {
          window.open(url, "_blank");
        }
      });
    }
  };

  return (
    <Button
      size={"default"}
      variant={"ghost"}
      className="rounded-md bg-transparent p-0 text-center text-lg text-white underline hover:bg-transparent hover:text-white"
      onClick={handleClick}
    >
      WhatsApp
    </Button>
  );
}
