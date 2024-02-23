import { clashDisplayMedium } from "@/utils/fonts";
import Image, { StaticImageData } from "next/image";
import Clients from "@/public/images/clients.png";
import Group3 from "@/public/images/Group -1.png";

type Client = {
  name: string;
  logo: StaticImageData;
};

const clients: Client[] = [
  {
    name: "Casa de la Cultura",
    logo: Group3,
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
      <Image src={Clients} alt="" />
    </div>
  );
}
