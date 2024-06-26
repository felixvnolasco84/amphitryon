"use client";

import { useState } from "react";
import Link from "next/link";
import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";

type WhatsAppButtonProps = {
  url1: string; // Cesar
  url2: string; // Anton
  url3: string; // Salvador
};

export default function WhatsAppButton({
  url1,
  url2,
  url3,
}: WhatsAppButtonProps) {
  const [urlIndex, setUrlIndex] = useState(0); // 0 para Cesar, 1 para Anton, 2 para Salvador

  const handleClick = () => {
    InitializeGoogleAnalytics();
    TrackGoogleAnalyticsEvent(
      "click",
      "enviar_mensaje",
      window.location.pathname
    );

    // Generar número aleatorio entre 0 y 99
    const randomNumber = Math.floor(Math.random() * 100);
    // Asignar urlIndex basado en el número aleatorio
    if (randomNumber < 40) {
      // 0-39 para Cesar
      setUrlIndex(0);
    } else if (randomNumber < 80) {
      // 40-79 para Anton
      setUrlIndex(1);
    } else {
      // 80-99 para Salvador
      setUrlIndex(2);
    }
  };

  // Determinar la URL a usar basado en urlIndex
  const currentUrl = [url1, url2, url3][urlIndex];

  return (
    <Link
      target="_blank"
      onClick={handleClick}
      href={currentUrl}
      className="rounded-md bg-green-400 px-2 py-2 text-center text-gray-800 hover:bg-gray-800 hover:text-white"
    >
      Envíanos un mensaje por WhatsApp
    </Link>
  );
}
