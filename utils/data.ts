import { StaticImageData } from "next/image";

import MOLIERE from "@/public/images/Hero/MoliereHero.jpg";
import PALMAS from "@/public/images/HeroNew.jpeg";
import TONALÁ from "@/public/images/TonalaHome.png";

// MOLIERE IMAGES
import Moliere2 from "@/public/images/Moliere2.png";
import Moliere3 from "@/public/images/Moliere3.png";
import Moliere4 from "@/public/images/Moliere4.png";

// PALMAS IMAGES
import Palmas1 from "@/public/images/Palmas1.png";
import Palmas2 from "@/public/images/Palmas2.png";
import Palmas3 from "@/public/images/Palmas3.png";
import Palmas4 from "@/public/images/Palmas4.png";

// TONALÁ IMAGES
import Tonala1 from "@/public/images/Tonala1.png";
import Tonala2 from "@/public/images/Tonala2.png";
import Tonala3 from "@/public/images/Tonala3.png";
import Tonala4 from "@/public/images/Tonala4.png";

// FLATS
import GALERIAFLAT from "@/public/flat/Galeria.png";
import PEPITAFLAT from "@/public/flat/Pepita.png";
import MACARELLAFLAT from "@/public/flat/Tonala.png";

//FLAT PDF

const GALERIAFLATPDF = "/pdfs/La Galeria.pdf";
const MACARELLAFLATPDF = "/pdfs/Macarella.pdf";
const PEPITAFLATPDF = "/pdfs/Pepita.pdf";

import { PricePlace } from "@/lib/utils";

export type Feature = {
  title: string;
  description: string;
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
  previousLink?: string;
  nextLink?: string;
  locationInMap: { lat: number; lng: number };
  district: string;
  prices: PricePlace[];
  flat: StaticImageData;
  flatPDF: string;
  calendlyURL: string;
  whatsAppURL: string;
};

export const rentPlaces: RentPlace[] = [
  {
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
        description: "180 PAX",
      },
      {
        title: "Horario",
        description: "8:00 - 12:30",
      },
      {
        title: "Audio",
        description: "SONANCE",
      },
      {
        title: "Mobilario",
        description: "120 PAX CÓCTEL",
      },
      {
        title: "Estructura",
        description: "TECHO RETRÁCTIL",
      },
    ],
    largeDescription:
      "¡Descubre la magia de nuestra terraza La Galería! Ubicada en el corazón de Polanco, ofrecemos una de las mejores vistas de la Ciudad de México. Disfruta de la transición de día a noche mientras te maravillas con la belleza urbana. Nuestro espacio cuenta con un techo retráctil y cortinas motorizadas, operadas por un sistema eléctrico totalmente automatizado, que te permite disfrutar al máximo al aire libre en cualquier clima. Permitimos que la naturaleza y la elegancia se fusionen para brindarte una experiencia inolvidable en tu próximo evento.",
    location: "Polanco",
    previousLink: "/tonala-171-roma-norte",
    nextLink: "/palmas-781-lomas-de-chapultepec",
    locationInMap: {
      lat: 19.4364466,
      lng: -99.2012794,
    },
    district: "Polanco",
    prices: [
    ],
    // prices: [
    //   {
    //     day: "Lunes",
    //     type: [
    //       {
    //         type: "ESPACIO A (100PX)",
    //         price: 37000,
    //       },
    //       {
    //         type: "ESPACIO B (80PX)",
    //         price: 32000,
    //       },
    //       {
    //         type: "COMPLETO (180PX)",
    //         price: 47000,
    //       },
    //     ],
    //   },
    //   {
    //     day: "Martes",
    //     type: [
    //       {
    //         type: "ESPACIO A (100PX)",
    //         price: 37000,
    //       },
    //       {
    //         type: "ESPACIO B (80PX)",
    //         price: 32000,
    //       },
    //       {
    //         type: "COMPLETO (180PX)",
    //         price: 47000,
    //       },
    //     ],
    //   },
    //   {
    //     day: "Miércoles",
    //     type: [
    //       {
    //         type: "ESPACIO A (100PX)",
    //         price: 42000,
    //       },
    //       {
    //         type: "ESPACIO B (80PX)",
    //         price: 37000,
    //       },
    //       {
    //         type: "COMPLETO (180PX)",
    //         price: 52000,
    //       },
    //     ],
    //   },
    //   {
    //     day: "Jueves",
    //     type: [
    //       {
    //         type: "ESPACIO A (100PX)",
    //         price: 44000,
    //       },
    //       {
    //         type: "ESPACIO B (80PX)",
    //         price: 39000,
    //       },
    //       {
    //         type: "COMPLETO (180PX)",
    //         price: 53000,
    //       },
    //     ],
    //   },
    //   {
    //     day: "Viernes",
    //     type: [
    //       {
    //         type: "ESPACIO A (100PX)",
    //         price: 62000,
    //       },
    //       {
    //         type: "ESPACIO B (80PX)",
    //         price: 52000,
    //       },
    //       {
    //         type: "COMPLETO (180PX)",
    //         price: 77000,
    //       },
    //     ],
    //   },
    //   {
    //     day: "Sábado",
    //     type: [
    //       {
    //         type: "ESPACIO A (100PX)",
    //         price: 67000,
    //       },
    //       {
    //         type: "ESPACIO B (80PX)",
    //         price: 57000,
    //       },
    //       {
    //         type: "COMPLETO (180PX)",
    //         price: 82000,
    //       },
    //     ],
    //   },
    //   {
    //     day: "Domingo",
    //     type: [
    //       {
    //         type: "ESPACIO A (100PX)",
    //         price: 37000,
    //       },
    //       {
    //         type: "ESPACIO B (80PX)",
    //         price: 32000,
    //       },
    //       {
    //         type: "COMPLETO (180PX)",
    //         price: 47000,
    //       },
    //     ],
    //   },
    // ],
    flat: GALERIAFLAT,
    flatPDF: GALERIAFLATPDF,
    calendlyURL:
      "https://calendly.com/amphitryonterrazas/la-galeria?hide_event_type_details=0&hide_gdpr_banner=0&primary_color=000409",
    whatsAppURL:
      "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios",
  },

  {
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
    nextLink: "/tonala-171-roma-norte",
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
            price: 20700,
          },
          {
            type: "Completo (200PX)",
            price: 32900,
          },
        ],
      },
      {
        day: "Martes",
        type: [
          {
            type: "Terraza (80PX)",
            price: 20700,
          },
          {
            type: "Completo (200PX)",
            price: 32900,
          },
        ],
      },
      {
        day: "Miércoles",
        type: [
          {
            type: "Terraza (80PX)",
            price: 30700,
          },
          {
            type: "Completo (200PX)",
            price: 52900,
          },
        ],
      },
      {
        day: "Jueves",
        type: [
          {
            type: "Terraza (80PX)",
            price: 30700,
          },
          {
            type: "Completo (200PX)",
            price: 52900,
          },
        ],
      },
      {
        day: "Viernes",
        type: [
          {
            type: "Terraza (80PX)",
            price: 36500,
          },
          {
            type: "Completo (200PX)",
            price: 64500,
          },
        ],
      },
      {
        day: "Sábado",
        type: [
          {
            type: "Terraza (80PX)",
            price: 36500,
          },
          {
            type: "Completo (200PX)",
            price: 64500,
          },
        ],
      },
      {
        day: "Domingo",
        type: [
          {
            type: "Terraza (80PX)",
            price: 20700,
          },
          {
            type: "Completo (200PX)",
            price: 32900,
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
  {
    metaTitle: "Tonalá 171 en Roma Norte - Grupo Amphytrion",
    metaDescription:
      "Nuestra terraza te ofrece serenidad y sofisticación en medio del bullicio de la ciudad de México. Disfruta de una vista incomparable rodeada de exuberante vegetación",
    slug: "tonala-171-roma-norte",
    name: "TONALÁ 171",
    description: "TERRAZA PEPITA",
    img: TONALÁ,
    gallery: [Tonala1, Tonala2, Tonala3, Tonala4],
    features: [
      {
        title: "Capacidad",
        description: "90 PAX",
      },
      {
        title: "Horario",
        description: "8:00 - 0:00",
      },
      {
        title: "Audio",
        description: "MEYER SOUND",
      },
      {
        title: "Mobilario",
        description: "INCLUÍDO",
      },
    ],
    largeDescription:
      "Ubicada en el corazón de la Colonia Roma Norte de la Ciudad de México, nuestra terraza te ofrece un refugio sereno y sofisticado en medio del bullicio de la ciudad de México. Disfruta de una vista incomparable rodeada de exuberante vegetación, convirtiendo tu evento en una experiencia verdaderamente especial. Con capacidad para hasta 90 personas en formato cóctel y de hasta 40 personas en formato todos sentados, nuestro espacio es el escenario perfecto para reuniones íntimas y eventos exclusivos. Sumérgete en la arquitectura excepcional de una de las casas más distinguidas de la ciudad, donde cada detalle está cuidadosamente diseñado para ofrecerte un ambiente de lujo y exclusividad, en sintonía con las buenas vibras de la Colonia Roma. Déjate envolver por la atmósfera única de Terraza Tonalá, donde la fusión entre la naturaleza y la elegancia crea un entorno mágico y encantador. Escapa de la rutina y haz de tu evento una experiencia inolvidable en medio de la tranquilidad y belleza de nuestra terraza. ¡Te esperamos para crear momentos memorables juntos!",
    location: "Roma Norte",
    previousLink: "/palmas-781-lomas-de-chapultepec",
    nextLink: "/moliere-310-polanco",
    locationInMap: {
      lat: 19.4135428,
      lng: -99.1642174,
    },
    district: "ROMA NORTE",
    prices: [
      {
        day: "Lunes",
        type: [
          {
            type: "Terraza (90PX)",
            price: 25500,
          },
        ],
      },
      {
        day: "Martes",
        type: [
          {
            type: "Terraza (90PX)",
            price: 25500,
          },
        ],
      },
      {
        day: "Miércoles",
        type: [
          {
            type: "Terraza (90PX)",
            price: 30500,
          },
        ],
      },
      {
        day: "Jueves",
        type: [
          {
            type: "Terraza (90PX)",
            price: 30500,
          },
        ],
      },
      {
        day: "Viernes",
        type: [
          {
            type: "Terraza (90PX)",
            price: 35500,
          },
        ],
      },
      {
        day: "Sábado",
        type: [
          {
            type: "Terraza (90PX)",
            price: 35500,
          },
        ],
      },
      {
        day: "Domingo",
        type: [
          {
            type: "Terraza (90PX)",
            price: 25500,
          },
        ],
      },
    ],
    flat: PEPITAFLAT,
    flatPDF: PEPITAFLATPDF,
    calendlyURL:
      "https://calendly.com/amphitryonterrazas/terraza-pepita?hide_event_type_details=0&hide_gdpr_banner=0&primary_color=000306",
    whatsAppURL:
      "https://wa.me/5620244047?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios",
  },
];
