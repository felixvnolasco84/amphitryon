"use client";

import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";
import { Button } from "../ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";

export default function WhatsAppButton({ title }: { title: string }) {
  const create = useMutation(api.contact.create);
  const LastContact = useQuery(api.contact.getLastContact);

  if (!LastContact) {
    return null;
  }

  const handleClick = () => {
    InitializeGoogleAnalytics();
    TrackGoogleAnalyticsEvent(
      "click",
      "enviar_mensaje",
      window.location.pathname
    );
    create();
  };

  return (
    <a
      onClick={handleClick}
      target="_blank"
      className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-green-400 px-4 py-2 text-center text-xl font-medium text-gray-800 ring-offset-background transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      href={LastContact}
    >
      WhatsApp
    </a>
  );
}
