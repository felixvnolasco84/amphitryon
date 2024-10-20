"use client";

import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";
import { Button } from "../ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function WhatsAppButton({ title }: { title: string }) {
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
    <a
      target="_blank"
      className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-green-400 px-4 py-2 text-center text-xl font-medium text-gray-800 ring-offset-background transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      href="https://api.whatsapp.com/send/?phone=5620244047&text=Hola%2C+me+gustar%C3%ADa+recibir+m%C3%A1s+informes.&type=phone_number&app_absent=0"
    >
      WhatsApp
    </a>
    // <Button
    //   size={"default"}
    //   className="rounded-md bg-green-400 text-center text-xl text-gray-800 hover:bg-gray-800 hover:text-white"
    //   onClick={handleClick}
    // >
    //   {title}
    // </Button>
  );
}
