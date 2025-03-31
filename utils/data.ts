import { StaticImageData } from "next/image";

import MOLIERE from "@/public/images/Hero/MoliereHero.webp";
import PALMAS from "@/public/images/HeroNew.webp";
import TONALÁ from "@/public/images/TonalaHome.webp";


//CASA JARANA IMAGES

import CASAJARANA from '@/public/images/Hero/CasaJaranaHero.png'
import CASAJARANA1 from '@/public/images/CASA-JARANA (1).png'
import CASAJARANA2 from '@/public/images/CASA-JARANA (2).png' 
import CASAJARANA3 from '@/public/images/CASA-JARANA (3).png'

//TATEL IMAGES
import TATEL from '@/public/images/TATEL (4).png'
import TATEL1 from '@/public/images/TATEL (1).png'
// import TATEL2 from '@/public/images/TATEL (3).png'
// import TATEL3 from '@/public/images/Hero/TATELHero.png'
// import TATEL4 from '@/public/images/TATEL (5).png'

// MOLIERE IMAGES
import Moliere2 from "@/public/images/Moliere2.webp";
import Moliere3 from "@/public/images/Moliere3.webp";
import Moliere4 from "@/public/images/Moliere4.webp";

// PALMAS IMAGES
import Palmas1 from "@/public/images/Palmas1.webp";
import Palmas2 from "@/public/images/Palmas2.webp";
import Palmas3 from "@/public/images/Palmas3.webp";
import Palmas4 from "@/public/images/Palmas4.webp";

// TONALÁ IMAGES
import Tonala1 from "@/public/images/Tonala1.webp";
import Tonala2 from "@/public/images/Tonala2.webp";
import Tonala3 from "@/public/images/Tonala3.webp";
import Tonala4 from "@/public/images/Tonala4.webp";

// FLATS

import CASAJARANAFLAT from "@/public/flat/CASA_JARANA.png";

//TATEL FLAT
import TATELSALONPRINCIPALImage from "@/public/flat/TATELSalonPrincipal.png";
import TATELJardin from "@/public/flat/TATEL_JARDIN.png";
import TATELPrivados from "@/public/flat/TATEL_PRIVADOS.png";
import TATELTerraza from "@/public/flat/TATEL_TERRAZA.png";
import TATELWelcomeDrinks from "@/public/flat/TATEL_WELCOME_DRINKS.png";




import GALERIAFLAT from "@/public/flat/Galeria.png";
import PEPITAFLAT from "@/public/flat/Pepita.png";
import MACARELLAFLAT from "@/public/flat/Tonala.png";

//FLAT PDF
const CASAJARANAFLATPDF = "/pdfs/CASA_JARANA.pdf";  

//TATEL FLAT PDF
const TATELSALONPRINCIPAL = "/pdfs/TATEL SALON PRINCIPAL.pdf";
const TATELJARDIN = "/pdfs/TATEL JARDIN.pdf";
const TATELPRIVADOS = "/pdfs/TATEL PRIVADOS.pdf";
const TATELTERRAZA = "/pdfs/TATEL TERRAZA.pdf";
const TATELWELCOMEDRINKS = "/pdfs/TATEL WELCOME DRINKS.pdf";

const GALERIAFLATPDF = "/pdfs/La Galeria.pdf";
const MACARELLAFLATPDF = "/pdfs/Macarella.pdf";
const PEPITAFLATPDF = "/pdfs/Pepita.pdf";

import { PricePlace } from "@/lib/utils";
import { LocalBusiness, WithContext } from "schema-dts";

export type Feature = {
  title: string;
  description: string | string[];
};

export type RentPlace = {
  metaTitle: string;
  metaDescription: string;
  slug: string;
  name: string;
  description: string;
  img: StaticImageData;
  gallery: StaticImageData[];
  features: Feature[];
  largeDescription: string;
  location: string;
  previousLink: string;
  nextLink: string;
  locationInMap: { lat: number; lng: number };
  district: string;
  prices: PricePlace[];
  priceDisclaimer?: string;
  flat: StaticImageData;
  flatPDF: string;
  complexFlat?: { flat: StaticImageData; flatPDF: string }[];
  calendlyURL: string;
  whatsAppURL: string;
  jsonLd: WithContext<LocalBusiness>;
};

export const rentPlaces: RentPlace[] = [
  {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Terraza Masaryk 183",
      url: "https://www.amphitryon.mx/tatel-polanco",
      logo: "https://www.amphitryon.mx/images/Hero/TATELHero.png",
      description:
        "Ubicado en una de las zonas más exclusivas de Polanco, Terraza Masaryk 183 es una majestuosa casa que combina elegancia, distinción y versatilidad, convirtiéndose en el lugar perfecto para eventos de alto nivel.",
      telephone: "+52-55-2305-3711",
      priceRange: "$$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Av. Pdte. Masaryk 183, Chapultepec Morales, Polanco V Secc, Miguel Hidalgo, 11560 Ciudad de México, CDMX",
        addressLocality: "Ciudad de México",
        addressRegion: "CDMX",
        postalCode: "11560",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.431593,
        longitude: -99.189084,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "2:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+52-55-2305-3711",
          contactType: "Reservas",
        },
      ],
    },
    metaTitle: "Terraza Masaryk 183 en Polanco - Grupo Amphytrion",
    metaDescription:
      "Ubicado en una de las zonas más exclusivas de Polanco, Terraza Masaryk 183 es una majestuosa casa que combina elegancia, distinción y versatilidad, convirtiéndose en el lugar perfecto para eventos de alto nivel.",
    slug: "tatel-polanco",
    name: "MASARYK 183",
    description: "Terraza Masaryk 183",
    img: TATEL,
    gallery: [TATEL, TATEL1],
    features: [
      {
        title: "Capacidad",
        description: [
          "TERRAZA: 200 PX",
        ],
      },
      {
        title: "Horario",
        description: "8:00 AM - 2:00 AM",
      },
      {
        title: "Audio",
        description: "MEYER",
      },
      {
        title: "Mobilario",
        description: "200 PAX (INCLUÍDO)",
      },
    ],
    largeDescription:
      "Ubicado en una de las zonas más exclusivas de Polanco, Terraza Masaryk 183 casa que combina elegancia, distinción y versatilidad, convirtiéndose en el lugar perfecto para eventos de alto nivel. Con capacidad para hasta 200 personas, una terraza encantadora para disfrutar del aire libre. Terraza Masaryk 183 garantiza no solo comodidad y estilo, sino también una experiencia inolvidable en uno de los lugares más icónicos de la ciudad.",
    location: "Polanco",
    previousLink: "/palmas-781-lomas-de-chapultepec",
    nextLink: "/casa-jarana-roma-norte",
    locationInMap: {
      lat: 19.431593,
      lng: -99.189084,
    },
    district: "Polanco",
    prices: [
      {
        day: "Lunes",
        type: [
          {
            type: "TERRAZA (170PX)",
            price: 73400,
          },
        ],
      },
      {
        day: "Martes",
        type: [
          {
            type: "TERRAZA (170PX)",
            price: 73400,
          },
        ],
      },
      {
        day: "Miércoles",
        type: [
          {
            type: "TERRAZA (170PX)",
            price: 83400,
          },
        ],
      },
      {
        day: "Jueves",
        type: [
          {
            type: "TERRAZA (170PX)",
            price: 83400,
          },
        ],
      },
      {
        day: "Viernes",
        type: [
          {
            type: "TERRAZA (170PX)",
            price: 93400,
          },
        ],
      },
      {
        day: "Sábado",
        type: [
          {
            type: "TERRAZA (170PX)",
            price: 93400,
          },
        ],
      },
      {
        day: "Domingo",
        type: [
          {
            type: "TERRAZA (170PX)",
            price: 73400,
          },
        ],
      },
    ],
    priceDisclaimer: "*PRECIOS VARÍAN EN FIN DE AÑO",
    flat: TATELSALONPRINCIPALImage,
    flatPDF: TATELSALONPRINCIPAL,
    complexFlat: [
      // {
      //   flat: TATELSALONPRINCIPALImage,
      //   flatPDF: TATELSALONPRINCIPAL,
      // },
      // {
      //   flat: TATELJardin,
      //   flatPDF: TATELJARDIN,
      // },
      // {
      //   flat: TATELPrivados,
      //   flatPDF: TATELPRIVADOS,
      // },
      {
        flat: TATELTerraza,
        flatPDF: TATELTERRAZA,
      },
      // {
      //   flat: TATELWelcomeDrinks,
      //   flatPDF: TATELWELCOMEDRINKS,
      // },
    ],
    calendlyURL:
      "https://calendly.com/amphitryonterrazas/tatel?hide_event_type_details=0&hide_gdpr_banner=0&primary_color=000409",
    whatsAppURL:
      "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios",
  },
  {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "CASA JARANA",
      url: "https://www.amphitryon.mx/casa-jarana-roma-norte",
      // logo: "https://www.amphitryon.mx/images/Hero/TATELHero.png",
      description:
        "Ubicada en el corazón de la Colonia Roma Norte de la Ciudad de México, Casa Jarana ofrece un refugio lleno de estilo y carácter, ideal para escapar del bullicio urbano",
      telephone: "+52-55-2305-3711",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Calle de Durango 279, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX",
        addressLocality: "Ciudad de México",
        addressRegion: "CDMX",
        postalCode: "06700",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.419211,
        longitude: -99.170745,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "07:00",
          closes: "2:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+52-55-2305-3711",
          contactType: "Reservas",
        },
      ],
    },
    metaTitle: "CASA JARANA en Roma Norte - Grupo Amphytrion",
    metaDescription:
      "Ubicada en el corazón de la Colonia Roma Norte de la Ciudad de México, Casa Jarana ofrece un refugio lleno de estilo y carácter, ideal para escapar del bullicio urbano",
    slug: "casa-jarana-roma-norte",
    name: "DURANGO 279",
    description: "CASA JARANA",
    img: CASAJARANA,
    gallery: [CASAJARANA, CASAJARANA1, CASAJARANA2, CASAJARANA3],
    features: [
      {
        title: "Capacidad",
        description: ["150 PX CASA COMPLETA", "80 PX POR PISO"],
      },
      {
        title: "Horario",
        description: "7:00 AM - 2:00 AM",
      },
      {
        title: "Audio",
        description: "BOSÉ",
      },
      {
        title: "Mobilario",
        description: "80 PX (INCLUÍDO)",
      },
    ],
    largeDescription:
      "Ubicada en el corazón de la Colonia Roma Norte de la Ciudad de México, Casa Jarana ofrece un refugio lleno de estilo y carácter, ideal para escapar del bullicio urbano. Con su vibrante terraza rodeada de vegetación, es el escenario perfecto para transformar cualquier evento en una experiencia inolvidable. Su arquitectura contemporánea, combinada con toques tradicionales, se integra de manera armónica con la atmósfera dinámica y artística de la Roma.Cada evento en Casa Jarana refleja la fusión entre modernidad y tradición, ofreciendo un entorno sofisticado, pero relajado, donde cada detalle ha sido pensado para crear una experiencia única y en sintonía con el espíritu creativo de la zona. ",
    location: "Roma Norte",
    previousLink: "/tatel-polanco",
    nextLink: "/moliere-310-polanco",
    locationInMap: {
      lat: 19.419211,
      lng: -99.170745,
    },
    district: "Roma Norte",
    prices: [
      {
        day: "Lunes",
        type: [
          {
            type: "CASA COMPLETA (150 PX)",
            price: 56500,
          },
          {
            type: "PLANTA BAJA O TERRAZA (80 PX)",
            price: 40300,
          },
        ],
      },
      {
        day: "Martes",
        type: [
          {
            type: "CASA COMPLETA (150 PX)",
            price: 56500,
          },
          {
            type: "PLANTA BAJA O TERRAZA (80 PX)",
            price: 40300,
          },
        ],
      },
      {
        day: "Miércoles",
        type: [
          {
            type: "CASA COMPLETA (150 PX)",
            price: 56500,
          },
          {
            type: "PLANTA BAJA O TERRAZA (80 PX)",
            price: 40300,
          },
        ],
      },
      {
        day: "Jueves",
        type: [
          {
            type: "CASA COMPLETA (150 PX)",
            price: 65500,
          },
          {
            type: "PLANTA BAJA O TERRAZA (80 PX)",
            price: 46600,
          },
        ],
      },
      {
        day: "Viernes",
        type: [
          {
            type: "CASA COMPLETA (150 PX)",
            price: 78500,
          },
          {
            type: "PLANTA BAJA O TERRAZA (80 PX)",
            price: 55700,
          },
        ],
      },
      {
        day: "Sábado",
        type: [
          {
            type: "CASA COMPLETA (150 PX)",
            price: 88500,
          },
          {
            type: "PLANTA BAJA O TERRAZA (80 PX)",
            price: 62700,
          },
        ],
      },
      {
        day: "Domingo",
        type: [
          {
            type: "CASA COMPLETA (150 PX)",
            price: 56500,
          },
          {
            type: "PLANTA BAJA O TERRAZA (80 PX)",
            price: 40300,
          },
        ],
      },
    ],
    priceDisclaimer: "*PRECIOS VARÍAN EN FIN DE AÑO",
    flat: CASAJARANAFLAT,
    flatPDF: CASAJARANAFLATPDF,
    calendlyURL:
      "https://calendly.com/amphitryonterrazas/casa-jarana-roma-norte?hide_event_type_details=0&hide_gdpr_banner=0&primary_color=000409",
    whatsAppURL:
      "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios",
  },
  {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Moliere 310",
      url: "https://www.amphitryon.mx/moliere-310-polanco",
      logo: "https://www.amphitryon.mx/images/Moliere2.png",
      description:
        "Moliere 310 es un espacio en Polanco con una terraza La Galería, capacidad para 180 personas, techo retráctil y vistas espectaculares de la Ciudad de México",
      telephone: "+52-55-6868-8442",
      priceRange: "$$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Moliere 310",
        addressLocality: "Ciudad de México",
        addressRegion: "CDMX",
        postalCode: "11550",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.434692,
        longitude: -99.195745,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "00:30",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+52-55-6868-8442",
          contactType: "Reservas",
        },
      ],
    },
    metaTitle: "Moliere 310 en Polanco - Grupo Amphytrion",
    metaDescription:
      "Este espacio es un verdadero oasis de sofisticación y comodidad. Es el escenario ideal para eventos de cualquier índole con tu familia, amigos o colegas de trabajo",
    slug: "moliere-310-polanco",
    name: "MOLIERE 310",
    description: "LA GALERÍA",
    img: MOLIERE,
    gallery: [MOLIERE, Moliere2, Moliere3, Moliere4],
    features: [
      {
        title: "Capacidad",
        description: "140 PAX",
      },
      {
        title: "Horario",
        description: [
          "Lunes - Jueves:",
          "8:00 AM - 10:00 PM",
          "Viernes - Sábado:",
          "8:00 AM - 11:00 PM",
          "Domingo:",
          "8:00 AM - 7:00 PM",
        ],
      },
      {
        title: "Audio",
        description: "SONANCE",
      },
      {
        title: "Mobilario",
        description: "120 PAX (INCLUÍDO)",
      },
      {
        title: "Estructura",
        description: "TECHO RETRÁCTIL",
      },
    ],
    largeDescription:
      "¡Descubre la magia de nuestra terraza La Galería! Ubicada en el corazón de Polanco, ofrecemos una de las mejores vistas de la Ciudad de México. Disfruta de la transición de día a noche mientras te maravillas con la belleza urbana. Nuestro espacio cuenta con un techo retráctil y cortinas motorizadas, operadas por un sistema eléctrico totalmente automatizado, que te permite disfrutar al máximo al aire libre en cualquier clima. Permitimos que la naturaleza y la elegancia se fusionen para brindarte una experiencia inolvidable en tu próximo evento.",
    location: "Polanco",
    previousLink: "/casa-jarana-roma-norte",
    nextLink: "/palmas-781-lomas-de-chapultepec",
    locationInMap: {
      lat: 19.4364466,
      lng: -99.2012794,
    },
    district: "Polanco",

    prices: [
      {
        day: "Lunes",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 51000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 46000,
          },
          {
            type: "COMPLETO (150PX)",
            price: 61000,
          },
        ],
      },
      {
        day: "Martes",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 51000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 46000,
          },
          {
            type: "COMPLETO (150PX)",
            price: 61000,
          },
        ],
      },
      {
        day: "Miércoles",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 56000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 51000,
          },
          {
            type: "COMPLETO (150PX)",
            price: 66000,
          },
        ],
      },
      {
        day: "Jueves",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 58000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 53000,
          },
          {
            type: "COMPLETO (150PX)",
            price: 67000,
          },
        ],
      },
      {
        day: "Viernes",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 76000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 66000,
          },
          {
            type: "COMPLETO (150PX)",
            price: 81000,
          },
        ],
      },
      {
        day: "Sábado",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 81000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 71000,
          },
          {
            type: "COMPLETO (150PX)",
            price: 96000,
          },
        ],
      },
      {
        day: "Domingo",
        type: [
          {
            type: "ESPACIO A (100PX)",
            price: 51000,
          },
          {
            type: "ESPACIO B (80PX)",
            price: 46000,
          },
          {
            type: "COMPLETO (150PX)",
            price: 61000,
          },
        ],
      },
    ],
    flat: GALERIAFLAT,
    flatPDF: GALERIAFLATPDF,
    calendlyURL:
      "https://calendly.com/amphitryonterrazas/la-galeria?hide_event_type_details=0&hide_gdpr_banner=0&primary_color=000409",
    whatsAppURL:
      "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios",
  },
  {
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Palmas 781",
      url: "https://www.amphitryon.mx/tonala-171-roma-norte",
      logo: "https://www.amphitryon.mx/images/Palmas1.png",
      description:
        "Palmas 781 es un espacio exclusivo en Lomas de Chapultepec, ideal para eventos con capacidad para hasta 200 personas. Ofrece mobiliario premium, sistema de sonido Bosé y un ambiente sofisticado.",
      telephone: "+52-55-6868-8442",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Palmas 781",
        addressLocality: "Ciudad de México",
        addressRegion: "CDMX",
        postalCode: "11000",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.426587,
        longitude: -99.218727,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "02:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+52-55-6868-8442",
          contactType: "Reservas",
        },
      ],
    },
    metaTitle: "Palmas 781 en Lomas de Chapultepec - Grupo Amphytrion",
    metaDescription:
      "Ubicado en una de las zonas más recordadas de México, en esta ubicación disfruta de la elegancia de nuestro mobiliario premium, diseñado para realzar la belleza de cada reunión.",
    slug: "palmas-781-lomas-de-chapultepec",
    name: "PALMAS 781",
    description: "MACARELLA",
    img: PALMAS,
    gallery: [Palmas1, Palmas2, Palmas3, Palmas4],
    features: [
      {
        title: "Capacidad",
        description: "200 PAX",
      },
      {
        title: "Horario",
        description: "8:00 - 2:00",
      },
      {
        title: "Audio",
        description: "BOSÉ",
      },
      {
        title: "Mobilario",
        description: "INCLUÍDO",
      },
    ],
    largeDescription:
      "Estratégicamente ubicado en el corazón de las Lomas de Chapultepec, este espacio es un verdadero oasis de sofisticación y comodidad. Con capacidad para hasta 200 personas en formato cóctel y 140 en formato sentado, es el escenario ideal para eventos de cualquier índole. Disfruta de la elegancia de nuestro mobiliario premium, diseñado para realzar la belleza de cada reunión. Además, nuestro sistema de sonido premium garantiza una experiencia acústica incomparable, mientras que la ubicación privilegiada dentro de Plaza Carso de Palmas te brinda la máxima seguridad y prestigio para tu evento. Déjate cautivar por la magia de Macarella, donde la seguridad, el lujo y la exclusividad se fusionan para ofrecerte una experiencia única e inolvidable. ¡Haz de tu próximo evento un momento inigualable en un entorno de máxima distinción!",
    location: "Lomas de Chapultepec",
    previousLink: "/moliere-310-polanco",
    nextLink: "/tatel-polanco",
    locationInMap: {
      lat: 19.429364,
      lng: -99.216756,
    },
    district: "Lomas de Chapultepec",
    prices: [
      {
        day: "Lunes",
        type: [
          {
            type: "Terraza (80PX)",
            price: 35200,
          },
          {
            type: "Completo (200PX)",
            price: 47400,
          },
        ],
      },
      {
        day: "Martes",
        type: [
          {
            type: "Terraza (80PX)",
            price: 35200,
          },
          {
            type: "Completo (200PX)",
            price: 47400,
          },
        ],
      },
      {
        day: "Miércoles",
        type: [
          {
            type: "Terraza (80PX)",
            price: 45200,
          },
          {
            type: "Completo (200PX)",
            price: 67400,
          },
        ],
      },
      {
        day: "Jueves",
        type: [
          {
            type: "Terraza (80PX)",
            price: 45200,
          },
          {
            type: "Completo (200PX)",
            price: 67400,
          },
        ],
      },
      {
        day: "Viernes",
        type: [
          {
            type: "Terraza (80PX)",
            price: 51000,
          },
          {
            type: "Completo (200PX)",
            price: 81000,
          },
        ],
      },
      {
        day: "Sábado",
        type: [
          {
            type: "Terraza (80PX)",
            price: 51000,
          },
          {
            type: "Completo (200PX)",
            price: 81000,
          },
        ],
      },
      {
        day: "Domingo",
        type: [
          {
            type: "Terraza (80PX)",
            price: 35200,
          },
          {
            type: "Completo (200PX)",
            price: 47400,
          },
        ],
      },
    ],
    flat: MACARELLAFLAT,
    flatPDF: MACARELLAFLATPDF,
    calendlyURL:
      "https://calendly.com/amphitryonterrazas/macarella?hide_event_type_details=0&hide_gdpr_banner=0&text_color=080808&primary_color=000205",
    whatsAppURL:
      "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios",
  },
  // {
  //   jsonLd: {
  //     "@context": "https://schema.org",
  //     "@type": "LocalBusiness",
  //     name: "Tonalá 171",
  //     url: "https://www.amphitryon.mx/tonala-171-roma-norte",
  //     logo: "https://www.amphitryon.mx/images/Tonala1.png",
  //     description:
  //       "Tonalá 171 ofrece un espacio exclusivo en la Colonia Roma Norte con capacidad para eventos de hasta 90 personas. Disfruta de una vista inigualable y un ambiente elegante en medio de la naturaleza.",
  //     telephone: "+52-55-6868-8442",
  //     priceRange: "$$",
  //     address: {
  //       "@type": "PostalAddress",
  //       streetAddress: "Tonalá 171",
  //       addressLocality: "Ciudad de México",
  //       addressRegion: "CDMX",
  //       postalCode: "06700",
  //       addressCountry: "MX",
  //     },
  //     geo: {
  //       "@type": "GeoCoordinates",
  //       latitude: 19.417047,
  //       longitude: -99.161392,
  //     },
  //     openingHoursSpecification: [
  //       {
  //         "@type": "OpeningHoursSpecification",
  //         dayOfWeek: [
  //           "Monday",
  //           "Tuesday",
  //           "Wednesday",
  //           "Thursday",
  //           "Friday",
  //           "Saturday",
  //           "Sunday",
  //         ],
  //         opens: "08:00",
  //         closes: "00:00",
  //       },
  //     ],
  //     contactPoint: [
  //       {
  //         "@type": "ContactPoint",
  //         telephone: "+52-55-6868-8442",
  //         contactType: "Reservas",
  //       },
  //     ],
  //   },
  //   metaTitle: "Tonalá 171 en Roma Norte - Grupo Amphytrion",
  //   metaDescription:
  //     "Nuestra terraza te ofrece serenidad y sofisticación en medio del bullicio de la ciudad de México. Disfruta de una vista incomparable rodeada de exuberante vegetación",
  //   slug: "tonala-171-roma-norte",
  //   name: "TONALÁ 171",
  //   description: "TERRAZA PEPITA",
  //   img: TONALÁ,
  //   gallery: [Tonala1, Tonala2, Tonala3, Tonala4],
  //   features: [
  //     {
  //       title: "Capacidad",
  //       description: "90 PAX",
  //     },
  //     {
  //       title: "Horario",
  //       description: "8:00 - 0:00",
  //     },
  //     {
  //       title: "Audio",
  //       description: "MEYER SOUND",
  //     },
  //     {
  //       title: "Mobilario",
  //       description: "INCLUÍDO",
  //     },
  //   ],
  //   largeDescription:
  //     "Ubicada en el corazón de la Colonia Roma Norte de la Ciudad de México, nuestra terraza te ofrece un refugio sereno y sofisticado en medio del bullicio de la ciudad de México. Disfruta de una vista incomparable rodeada de exuberante vegetación, convirtiendo tu evento en una experiencia verdaderamente especial. Con capacidad para hasta 90 personas en formato cóctel y de hasta 40 personas en formato todos sentados, nuestro espacio es el escenario perfecto para reuniones íntimas y eventos exclusivos. Sumérgete en la arquitectura excepcional de una de las casas más distinguidas de la ciudad, donde cada detalle está cuidadosamente diseñado para ofrecerte un ambiente de lujo y exclusividad, en sintonía con las buenas vibras de la Colonia Roma. Déjate envolver por la atmósfera única de Terraza Tonalá, donde la fusión entre la naturaleza y la elegancia crea un entorno mágico y encantador. Escapa de la rutina y haz de tu evento una experiencia inolvidable en medio de la tranquilidad y belleza de nuestra terraza. ¡Te esperamos para crear momentos memorables juntos!",
  //   location: "Roma Norte",
  //   previousLink: "/palmas-781-lomas-de-chapultepec",
  //   nextLink: "/tatel-polanco",
  //   locationInMap: {
  //     lat: 19.4135428,
  //     lng: -99.1642174,
  //   },
  //   district: "ROMA NORTE",
  //   prices: [
  //     {
  //       day: "Lunes",
  //       type: [
  //         {
  //           type: "Terraza (90PX)",
  //           price: 35000,
  //         },
  //       ],
  //     },
  //     {
  //       day: "Martes",
  //       type: [
  //         {
  //           type: "Terraza (90PX)",
  //           price: 35000,
  //         },
  //       ],
  //     },
  //     {
  //       day: "Miércoles",
  //       type: [
  //         {
  //           type: "Terraza (90PX)",
  //           price: 40000,
  //         },
  //       ],
  //     },
  //     {
  //       day: "Jueves",
  //       type: [
  //         {
  //           type: "Terraza (90PX)",
  //           price: 40000,
  //         },
  //       ],
  //     },
  //     {
  //       day: "Viernes",
  //       type: [
  //         {
  //           type: "Terraza (90PX)",
  //           price: 45000,
  //         },
  //       ],
  //     },
  //     {
  //       day: "Sábado",
  //       type: [
  //         {
  //           type: "Terraza (90PX)",
  //           price: 45000,
  //         },
  //       ],
  //     },
  //     {
  //       day: "Domingo",
  //       type: [
  //         {
  //           type: "Terraza (90PX)",
  //           price: 35000,
  //         },
  //       ],
  //     },
  //   ],
  //   flat: PEPITAFLAT,
  //   flatPDF: PEPITAFLATPDF,
  //   calendlyURL:
  //     "https://calendly.com/amphitryonterrazas/terraza-pepita?hide_event_type_details=0&hide_gdpr_banner=0&primary_color=000306",
  //   whatsAppURL:
  //     "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios",
  // },
];
