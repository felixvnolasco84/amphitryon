/* eslint-disable @next/next/next-script-for-ga */
import { GoogleAnalytics } from "@next/third-parties/google";
// import Script from "next/script";
import "./globals.css";
import { clashDisplayRegular } from "@/utils/fonts";
import Header from "@/components/Header/Header";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-Mx">
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
          <Header />
          <div id="root" className="flex flex-1 flex-col gap-4">
            {/* <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WNGXG4N4"
              height="0"
              width="0"
            ></iframe> */}
            {children}
          </div>
          <GoogleAnalytics gaId="G-Z2FQ3KVBPJ" />
          <Footer />
        </div>
        {/* <Script></Script> */}
      </body>
    </html>
  );
}
