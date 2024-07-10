/* eslint-disable @next/next/next-script-for-ga */
import { GoogleAnalytics } from "@next/third-parties/google";
import { WithContext, Organization } from "schema-dts";
import Script from "next/script";
// import Script from "next/script";
import "./globals.css";
import { clashDisplayRegular } from "@/utils/fonts";
import Header from "@/components/Header/Header";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";

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
      telephone: "+52-55-1384-2959",
      contactType: "Reservas",
      name: "César González",
    },
    {
      "@type": "ContactPoint",
      telephone: "+52-55-6868-8442",
      contactType: "Reservas",
      name: "Antón Arias",
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
        <meta name="robots" content="noindex, follow" />
      </head>
      {/* <head> */}
      {/* <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z2FQ3KVBPJ"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-Z2FQ3KVBPJ');
  </script> */}
      {/* <script
            defer
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WNGXG4N4')`,
            }}
          /> */}
      {/* </head> */}
      <body className={`${clashDisplayRegular.className}`}>
        <div className="flex flex-col lg:gap-4">
          <div className="container">
            <Header />
            <div id="root" className="flex flex-1 flex-col gap-3">
              {/* <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WNGXG4N4"
              height="0"
              width="0"
            ></iframe> */}
              <Script
                id="org-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(jsonLd),
                }}
              />
              {children}
            </div>
          </div>
          <GoogleAnalytics gaId="G-Z2FQ3KVBPJ" />
          <Footer />
        </div>
        {/* <Script></Script> */}
      </body>
    </html>
  );
}
