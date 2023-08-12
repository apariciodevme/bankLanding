import Image from "next/image";
import { airbnb, binance, coinbase, dropbox } from "@/public/assets";

const Business = () => {
  return (
    <section>
      <div className="items-center justify-between hidden space-x-20  md:flex">
        <Image src={airbnb} width={150} height={150} alt="Business logo" />
        <Image src={binance} width={150} height={150} alt="Business logo" />
        <Image src={coinbase} width={150} height={150} alt="Business logo" />
        <Image src={dropbox} width={150} height={150} alt="Business logo" />
      </div>
    </section>
  );
};

export default Business;
