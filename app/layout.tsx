import type { Metadata, Viewport } from "next";
import "./globals.css";
import { clashDisplayRegular } from "@/utils/fonts";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title:
    "Encuentra el lugar perfecto para tus eventos privados - Grupo Amphytrion",
  description:
    "Grupo Amphytrion tiene para ti los lugares más exclusivos en las mejores zonas de Ciudad de México para tus eventos. ¡Conoce los spots disponibles! ",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clashDisplayRegular.className}`}>
        <div className="flex flex-col gap-y-5 lg:gap-y-10">
          <Header />
          <div className="flex flex-1 flex-col gap-y-10 lg:gap-y-20">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
