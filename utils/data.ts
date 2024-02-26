import { StaticImageData } from "next/image";

import MOLIERE from "@/public/images/MOLIERE 310, POLANCO.png";
import PALMAS from "@/public/images/PALMAS 781, LOMAS DE CHAPULTEPEC.png";
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

export type Feature = {
  title: string;
  description: string;
};

export type RentPlace = {
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
};

export const rentPlaces: RentPlace[] = [
  {
    slug: "moliere-310-polanco",
    name: "MOLIERE 310, POLANCO",
    description: "LA GALERIA",
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
        description: "120 PAX COCTEL",
      },
      {
        title: "Estructura",
        description: "TECHO RETRÁCTIL",
      },
    ],
    largeDescription:
      "Estratégicamente ubicado en el corazón de las Lomas de Chapultepec, este espacio es un verdadero oasis de sofisticación y comodidad. Con capacidad para hasta 200 personas en formato cóctel y 140 en formato sentado, es el escenario ideal para eventos de cualquier índole. Disfruta de la elegancia de nuestro mobiliario premium, diseñado para realzar la belleza de cada reunión. Además, nuestro sistema de sonido premium garantiza una experiencia acústica incomparable, mientras que la ubicación privilegiada dentro de Plaza Carso de Palmas te brinda la máxima seguridad y prestigio para tu evento. Déjate cautivar por la magia de Macarella, donde la seguridad, el lujo y la exclusividad se fusionan para ofrecerte una experiencia única e inolvidable. ¡Haz de tu próximo evento un momento inigualable en un entorno de máxima distinción!",
    location: "Polanco",
    nextLink: "/palmas-781-lomas-de-chapultepec",
    locationInMap: {
      lat: 19.4365039,
      lng: -99.2039958,
    },
  },
  {
    slug: "palmas-781-lomas-de-chapultepec",
    name: "PALMAS 781, LOMAS DE CHAPULTEPEC",
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
      lat: 19.4292817,
      lng: -99.2193947,
    },
  },
  {
    slug: "tonala-171-roma-norte",
    name: "TONALÁ 171, ROMA NORTE",
    description: "TERRAZA PEPITA",
    img: TONALÁ,
    gallery: [Tonala1, Tonala2, Tonala3, Tonala4],
    features: [
      {
        title: "Capacidad",
        description: "90 px modo coctel 40 px modo sentados.",
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
      "Ubicada en el corazón de la Colonia Roma Norte de la Ciudad de México, nuestra terraza te ofrece un refugio sereno y sofisticado en medio del bullicio de la ciudad de México. Disfruta de una vista incomparable rodeada de exuberante vegetación, convirtiendo tu evento en una experiencia verdaderamente especial. Con capacidad para hasta 90 personas en formato cóctel y de hasta 40 personas en formato todos sentados, nuestro espacio es el escenario perfecto para reuniones íntimas y eventos exclusivos. Sumérgete en la arquitectura excepcional de una de las casas más distinguidas de la ciudad, donde cada detalle está cuidadosamente diseñado para ofrecerte un ambiente de lujo y exclusividad, en sintonía con las buenas vibras de la Colonia Roma. Déjate envolver por la atmósfera única de Terraza Tonala, donde la fusión entre la naturaleza y la elegancia crea un entorno mágico y encantador. Escapa de la rutina y haz de tu evento una experiencia inolvidable en medio de la tranquilidad y belleza de nuestra terraza. ¡Te esperamos para crear momentos memorables juntos!",
    location: "Roma Norte",
    previousLink: "/palmas-781-lomas-de-chapultepec",
    locationInMap: {
      lat: 19.4135478,
      lng: -99.1642227,
    },
  },
];
