import React, { useState } from "react";
import { useEffect } from "react";
import { PopupModal } from "react-calendly";
import InitializeGoogleAnalytics, {
  TrackGoogleAnalyticsEvent,
} from "@/lib/google-analytics";
import { Button } from "../ui/button";

const CustomModalCalendly = ({ url }: { url: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    InitializeGoogleAnalytics();
  }, []);

  return (
    <div className="w-full">
      <Button
        type="reset"
        className="w-full"
        size={"contact"}
        variant={"contact"}
        onClick={() => {
          TrackGoogleAnalyticsEvent(
            "agendar_cita",
            "click",
            window.location.pathname
          );
          setIsOpen(true);
        }}
      >
        Agenda una cita
      </Button>
      <PopupModal
        url={url}
        // pageSettings={props.pageSettings}
        // utm={props.utm}
        // prefill={props.prefill}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root") ?? document.body}
      />
    </div>
  );
};

export default CustomModalCalendly;