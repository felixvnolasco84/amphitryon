"use client";

import React, { useState } from "react";
import Calendly from "./Calendly";
import CustomCalendar from "./CustomCalendar";

export const CalendarComponent = () => {
  // const terrazas = [
  //   {
  //     name: "La Galería",
  //     url: "https://calendly.com/amphitryonterrazas/la-galeria?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=000409",
  //     dotColor: "#A6E0DA",
  //   },
  //   {
  //     name: "Macarella",
  //     url: "https://calendly.com/amphitryonterrazas/macarella?hide_event_type_details=1&hide_gdpr_banner=1&text_color=080808&primary_color=000205",
  //     dotColor: "#EBC3A4",
  //   },
  //   {
  //     name: "Terraza Pepita",
  //     url: "https://calendly.com/amphitryonterrazas/terraza-pepita?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=000306",
  //     dotColor: "#7EB2FC",
  //   },
  // ];

  // const [calendlyUrl, setCalendlyUrl] = useState(terrazas[0].url);

  // const handleOptionClick = (newUrl: string) => {
  //   setCalendlyUrl(newUrl);
  // };

  return (
    <div className="lg:min-h-none flex min-h-[600px] flex-col gap-4 lg:max-h-[472px] lg:justify-between xl:max-h-[660px]">
      <div className="flex items-center justify-center bg-[#EFEFEF] py-4 text-center lg:h-1/6">
        <h3>Revisa disponibilidad</h3>
      </div>
      <div className="h-4/6">
        <CustomCalendar />
        {/* <Calendly url={calendlyUrl} /> */}
      </div>
      <div className="flex items-center justify-around bg-[#EFEFEF] py-4">
        <div className="flex items-center gap-1">
          <div className="h-4 w-4 rounded-full bg-[#A6E0DA]"></div>
          <span className="text-sm lg:text-base">La Galería</span>
        </div>

        <div className="flex items-center gap-1">
          <div className="h-4 w-4 rounded-full bg-[#EBC3A4]"></div>
          <span className="text-sm lg:text-base">Macarella</span>
        </div>

        <div className="flex items-center gap-1">
          <div className="h-4 w-4 rounded-full bg-[#7EB2FC]"></div>
          <span className="text-sm lg:text-base">Pepita</span>
        </div>
      </div>
    </div>
  );
};
