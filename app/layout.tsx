/* eslint-disable @next/next/next-script-for-ga */

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { WithContext, Organization } from "schema-dts";
import Script from "next/script";
import "./globals.css";
import { clashDisplayRegular } from "@/utils/fonts";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ConvexClientProvider } from "@/providers/convex-provider";

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grupo Amphytrion",
  url: "https://www.amphitryon.mx/",
  logo: "https://www.amphitryon.mx/images/logo.png",
  description:
    "Grupo Amphitryon ofrece espacios exclusivos para eventos privados en la Ciudad de México.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+52-55-2305-3711",
      contactType: "Contacto",
      name: "Grupo Amphytrion",
    },
  ],
  sameAs: [
    "https://www.instagram.com/amphitryon.mx",
    "https://www.facebook.com/amphitryon.mx",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad de México",
    addressCountry: "MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-Mx">
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${clashDisplayRegular.className}`}>
        <ConvexClientProvider>
          <Header />
          <div id="root" className="flex flex-1 flex-col gap-3">
            <Script
              id="org-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
              }}
            />

            <script defer id="respondio__widget" src="https://cdn.respond.io/webchat/widget/widget.js?cId=ef8de27647a850faa9dd5ccc0800baa"></script>

            {children}
          </div>

          <GoogleAnalytics gaId="G-Z2FQ3KVBPJ" />
          <GoogleTagManager gtmId="AW-16453854332" />
          <GoogleTagManager gtmId="GTM-NBMB3DLT" />
          <Footer />
        </ConvexClientProvider>

      </body>

    </html>
  );
}
