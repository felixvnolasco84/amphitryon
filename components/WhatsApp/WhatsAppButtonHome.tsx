"use client";

import { useState } from "react";
import { TrackGoogleAnalyticsEvent } from "@/lib/google-analytics";
import Link from "next/link";

export default function WhatsAppButtonHome() {
  const [isUrl1, setIsUrl1] = useState(true);
  const url1 = "https://wa.me/5513842959?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios";
  const url2 = "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios";

  const handleClick = () => {
    TrackGoogleAnalyticsEvent("click", "enviar_mensaje", window.location.pathname);
    setIsUrl1(!isUrl1);
  };

  return (
    <>
      {isUrl1 ? (
        <Link
          target="_blank"
          onClick={handleClick}
          href={url1}
          className="bg-green-500 hover:bg-gray-800 p-2 rounded-md text-black text-left hover:text-white hover:underline"
        >
          Envíanos un mensaje por WhatsApp
        </Link>
      ) : (
        <Link
          target="_blank"
          onClick={handleClick}
          href={url2}
          className="bg-green-500 hover:bg-gray-800 p-2 rounded-md text-black text-left hover:text-white hover:underline"
        >
          Envíanos un mensaje por WhatsApp
        </Link>
      )}
    </>
  );
}