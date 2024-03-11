"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function CalendlyButton({ url }: { url: string }) {
  return (
    // <>
    //   <link
    //     href="https://assets.calendly.com/assets/external/widget.css"
    //     rel="stylesheet"
    //   />
    //   <script
    //     src="https://assets.calendly.com/assets/external/widget.js"
    //     type="text/javascript"
    //     async
    //   ></script>
    //   <a
    //     href=""
    //     onClick={() => {
    //       // @ts-ignore
    //       Calendly.initPopupWidget({
    //         url: url,
    //       });
    //       return false;
    //     }}
    //   >
    //     Agenda una cita
    //   </a>
    // </>

    <Link className="w-full" href={url}>
      <Button className="w-full" size={"contact"} variant={"contact"}>
        Agenda una cita
      </Button>
    </Link>
  );
}
