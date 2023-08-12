import Image from "next/image";
import { airbnb, binance, coinbase, dropbox } from "@/public/assets";

const Business = () => {
  return (
    <section>
      <div className="flex items-center justify-between space-x-20">
        <Image src={airbnb} width={150} height={150} alt="Business logo" />
        <Image src={binance} width={150} height={150} alt="Business logo" />
        <Image src={coinbase} width={150} height={150} alt="Business logo" />
        <Image src={dropbox} width={150} height={150} alt="Business logo" />
      </div>
    </section>
  );
};

export default Business;
