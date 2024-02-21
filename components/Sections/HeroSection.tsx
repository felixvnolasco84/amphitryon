import Image from "next/image";

import heroImage from "@/public/images/heroImage.png";

export default function HeroSection() {
  return (
    <div>
      <Image src={heroImage} alt="" />
    </div>
  );
}
