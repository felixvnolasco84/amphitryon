"use client"

import Link from "next/link";
import { TrackGoogleAnalyticsEvent } from '@/lib/google-analytics'
import React from 'react'
import { Button } from "../ui/button";

export default function CallButton() {
    return (
        <Link
            className="inline-flex justify-center items-center bg-[#FC9532] disabled:opacity-50 px-4 rounded-xl h-12 font-medium text-[#000000] whitespace-nowrap transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-xl disabled:pointer-events-none"
            target="_blank"
            onClick={() =>
                TrackGoogleAnalyticsEvent(
                    "click",
                    "llamar",
                    window.location.pathname
                )
            }
            href={
                "tel:5620244047"
            }
        >
            Llamar
        </Link>
    )
}
