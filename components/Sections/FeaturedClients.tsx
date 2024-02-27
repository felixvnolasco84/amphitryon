import { clashDisplayMedium } from "@/utils/fonts";
import Image, { StaticImageData } from "next/image";
import Clients from "@/public/images/clients.png";
import Ambrosia from "@/public/images/clients/ambrosia.png";
import Carso from "@/public/images/clients/carso.png";
import Conde from "@/public/images/clients/conde nast.png";
import Costenia from "@/public/images/clients/contenia.png";
import Ipade from "@/public/images/clients/ipade.png";
import Kuchen from "@/public/images/clients/kuchen.png";
import Penguin from "@/public/images/clients/penguin.png";
import Porcenalosa from "@/public/images/clients/porcelanosa.png";
import Rolex from "@/public/images/clients/rolex.png";
import Tous from "@/public/images/clients/tous.png";

type Client = {
  name: string;
  logo: StaticImageData;
};

const clients: Client[] = [
  {
    name: "Kuchen",
    logo: Kuchen,
  },
  {
    name: "Random Penguin House",
    logo: Penguin,
  },
  {
    name: "Rolex",
    logo: Rolex,
  },
  {
    name: "Grupo Carso",
    logo: Carso,
  },
  {
    name: "Conde Nast",
    logo: Conde,
  },
  {
    name: "Ipade",
    logo: Ipade,
  },
  {
    name: "Tous",
    logo: Tous,
  },
  {
    name: "Porcelanosa",
    logo: Porcenalosa,
  },
  {
    name: "La Costeña",
    logo: Costenia,
  },
  {
    name: "Ambrosia",
    logo: Ambrosia,
  },
];

export default function FeaturedClients() {
  return (
    <div className="flex flex-col gap-7 lg:gap-14">
      <h3
        className={`${clashDisplayMedium.className} text-center text-2xl lg:text-3xl`}
      >
        NUESTROS CLIENTES
      </h3>
      <div className="grid grid-flow-col-dense items-center gap-4 lg:gap-8 xl:gap-12">
        {clients.map((client, index) => (
          <Image
            key={index}
            src={client.logo}
            alt={client.name}
            className="h-auto w-auto"
          />
        ))}
      </div>
    </div>
  );
}
