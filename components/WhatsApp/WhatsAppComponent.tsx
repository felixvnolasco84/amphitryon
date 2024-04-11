"use client";

import { useState } from "react";
import Link from "next/link";
import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";
import CallButton from "./CallButton";

export default function WhatsAppComponent() {
  const [isUrl1, setIsUrl1] = useState(true);
  const url1 = "https://wa.me/5513842959?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios";
  const url2 = "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios";

  const handleClick = () => {
    InitializeGoogleAnalytics();
    TrackGoogleAnalyticsEvent("click", "enviar_mensaje", window.location.pathname);
    setIsUrl1(!isUrl1);
  };

  return (
    <div className="right-2 bottom-2 sticky flex flex-col justify-end items-end gap-2 container">
      <CallButton />
      {isUrl1 ? (
        <Link
          target="_blank"
          onClick={handleClick}
          href={url1}
          className="z-50 bg-green-400 hover:bg-gray-800 mx-0 py-2 rounded-md w-fit text-gray-800 text-xl hover:text-white container"
        >
          * WhatsApp
        </Link>
      ) : (
        <Link
          target="_blank"
          onClick={handleClick}
          href={url2}
          className="z-50 bg-green-400 hover:bg-gray-800 mx-0 py-2 rounded-md w-fit text-gray-800 text-xl hover:text-white container"
        >
          * WhatsApp
        </Link>
      )}
    </div>
  );
}