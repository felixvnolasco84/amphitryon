"use client";

import Link from "next/link";
import { TrackGoogleAnalyticsEvent } from "@/lib/google-analytics";
import React from "react";
import { Button } from "../ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { PPEditorialNewRegular } from "@/utils/fonts";

export default function CallButton() {
  const create = useMutation(api.callContact.create);
  const LastContact = useQuery(api.callContact.getLastContact);

  if (!LastContact) {
    return null;
  }

  return (
    <Link
      target="_blank"
      onClick={() => {
        TrackGoogleAnalyticsEvent("click", "llamar", window.location.pathname);
        create();
      }}
      href={LastContact}
    >
      <Button className={`text-lg`} size={"lg"} variant={"contact"}>
        Llamar
      </Button>
    </Link>
  );
}
