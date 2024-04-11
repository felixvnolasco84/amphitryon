"use client";

import { useState } from "react";
import Link from "next/link";
import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";

type WhatsAppButtonProps = {
  url1: string;
  url2: string;
};

export default function WhatsAppButton({ url1, url2 }: WhatsAppButtonProps) {
  const [isUrl1, setIsUrl1] = useState(true);

  const handleClick = () => {
    InitializeGoogleAnalytics();
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
          className="bg-green-400 hover:bg-gray-800 py-2 rounded-md text-center text-gray-800 text-xl hover:text-white"
        >
          WhatsApp
        </Link>
      ) : (
        <Link
          target="_blank"
          onClick={handleClick}
          href={url2}
          className="bg-green-400 hover:bg-gray-800 py-2 rounded-md text-center text-gray-800 text-xl hover:text-white"
        >
          WhatsApp
        </Link>
      )}
    </>
  );
}