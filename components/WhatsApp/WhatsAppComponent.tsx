"use client";

import { useState } from "react";
import Link from "next/link";
import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";

export default function WhatsAppComponent() {
  const [isUrl1, setIsUrl1] = useState(true);
  const url1 =
    "https://wa.me/5513842959?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios";
  const url2 =
    "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios";

  const handleClick = () => {
    InitializeGoogleAnalytics();
    TrackGoogleAnalyticsEvent(
      "click",
      "enviar_mensaje",
      window.location.pathname
    );
    setIsUrl1(!isUrl1);
  };

  return (
    <div className="sticky bottom-2 right-2 order-9 flex flex-col items-end justify-end gap-2">
      <CallButton />
      <WhatsAppButton title="WhatsApp" />
      {/* {isUrl1 ? (
        <Link
          target="_blank"
          onClick={handleClick}
          href={url1}
          className="z-50 mx-0 w-fit rounded-md bg-green-400 px-3 py-2 text-xl text-gray-800 hover:bg-gray-800 hover:text-white"
        >
          * WhatsApp
        </Link>
      ) : (
        <Link
          target="_blank"
          onClick={handleClick}
          href={url2}
          className="z-50 mx-0 w-fit rounded-md bg-green-400 px-3 py-2 text-xl text-gray-800 hover:bg-gray-800 hover:text-white"
        >
          * WhatsApp
        </Link>
      )} */}
    </div>
  );
}
