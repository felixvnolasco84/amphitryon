import { clashDisplayMedium } from "@/utils/fonts";
import Image, { StaticImageData } from "next/image";
import Clients from "@/public/images/clients.png";

type Client = {
  name: string;
  logo: StaticImageData;
};

const clients: Client[] = [
  {
    name: "Casa de la Cultura",
    logo: require("../../public/images/Group 3.png"),
  },
];

export default function FeaturedClients() {
  return (
    <div className="flex flex-col gap-14">
      <h3 className={`${clashDisplayMedium.className} text-center text-3xl`}>
        NUESTROS CLIENTES
      </h3>
      <Image src={Clients} alt="" />
    </div>
  );
}
