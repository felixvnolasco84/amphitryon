"use client";

import React, { useState } from "react";
import Calendly from "./Calendly";
import { Button } from "../ui/button";

export const CalendlyComponent = () => {
  const [calendlyUrl, setCalendlyUrl] = useState(
    "https://calendly.com/jimena-h1g/terraza-pepita"
  );

  const handleOptionClick = (newUrl: string) => {
    setCalendlyUrl(newUrl);
  };

  return (
    <div className="lg:min-h-none flex min-h-[600px] flex-col gap-4 lg:max-h-[472px] lg:justify-between xl:max-h-[660px]">
      <div className="flex items-center justify-center bg-[#EFEFEF] py-4 text-center lg:h-1/6">
        <h3> Revisa la disponibilidad</h3>
      </div>
      <div className="h-4/6">
        <Calendly url={calendlyUrl} />
      </div>
      <div className="flex items-center justify-around bg-[#EFEFEF] py-4 lg:h-1/6">
        <Button
          variant={"default"}
          onClick={() =>
            handleOptionClick("https://calendly.com/jimena-h1g/lagaleria")
          }
        >
          La Galería
        </Button>
        <Button
          variant={"default"}
          onClick={() =>
            handleOptionClick("https://calendly.com/jimena-h1g/macarella")
          }
        >
          Macarella
        </Button>
        <Button
          variant={"default"}
          onClick={() =>
            handleOptionClick("https://calendly.com/jimena-h1g/terraza-pepita")
          }
        >
          Terraza Pepita
        </Button>
      </div>
    </div>
  );
};
