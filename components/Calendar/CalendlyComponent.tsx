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
    <div className="flex flex-col justify-between gap-4 lg:max-h-[472px] xl:max-h-[660px]">
      <div className="flex h-1/6 items-center justify-center bg-[#EFEFEF] text-center">
        <h3> Revisa la disponibilidad</h3>
      </div>
      <div className="h-4/6 bg-[#EFEFEF]">
        <Calendly url={calendlyUrl} />
      </div>
      <div className="flex h-1/6 items-center justify-around bg-[#EFEFEF]">
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
