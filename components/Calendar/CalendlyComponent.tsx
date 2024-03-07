"use client";

import React, { useState } from "react";
import Calendly from "./Calendly";

export const CalendlyComponent = () => {
  const terrazas = [
    {
      name: "La Galería",
      url: "https://calendly.com/amphitryonterrazas/la-galeria?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=000409",
    },
    {
      name: "Macarella",
      url: "https://calendly.com/amphitryonterrazas/macarella?hide_event_type_details=1&hide_gdpr_banner=1&text_color=080808&primary_color=000205",
    },
    {
      name: "Terraza Pepita",
      url: "https://calendly.com/amphitryonterrazas/terraza-pepita?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=000306",
    },
  ];

  const [calendlyUrl, setCalendlyUrl] = useState(terrazas[0].url);

  const handleOptionClick = (newUrl: string) => {
    setCalendlyUrl(newUrl);
  };

  return (
    <div className="lg:min-h-none flex min-h-[600px] flex-col gap-4 lg:max-h-[472px] lg:justify-between xl:max-h-[660px]">
      <div className="flex items-center justify-center bg-[#EFEFEF] py-4 text-center lg:h-1/6">
        <h3>Agendar una Cita</h3>
      </div>
      <div className="h-4/6">
        <Calendly url={calendlyUrl} />
      </div>
      <div className="flex items-center justify-around bg-[#EFEFEF] py-4 lg:h-1/6">
        {terrazas.map((terraza, index) => (
          <label key={index}>
            <input
              type="radio"
              name="terraza"
              value={terraza.url}
              checked={calendlyUrl === terraza.url}
              onChange={() => handleOptionClick(terraza.url)}
            />
            {terraza.name}
          </label>
        ))}
      </div>
    </div>
  );
};
