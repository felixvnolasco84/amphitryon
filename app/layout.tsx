/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { clashDisplayRegular } from "@/utils/fonts";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title:
    "Encuentra el lugar perfecto para tus eventos privados - Grupo Amphytrion",
  description:
    "Grupo Amphytrion tiene para ti los lugares más exclusivos en las mejores zonas de Ciudad de México para tus eventos. ¡Conoce los spots disponibles! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WNGXG4N4')`,
          }}
        />
      </head>
      <body id="root" className={`${clashDisplayRegular.className}`}>
        <div className="flex flex-col lg:gap-4">
          <Header />
          <div className="flex flex-1 flex-col gap-4">
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WNGXG4N4"
              height="0"
              width="0"
            ></iframe>
            {children}
          </div>
          <Footer />
        </div>
        <Script></Script>
      </body>
    </html>
  );
}
