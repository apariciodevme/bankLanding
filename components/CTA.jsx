import { apple, bill, card, google } from "@/public/assets";
import { features } from "@/utils/constants";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="relative p-10 space-y-32">
      <section className="z-50 flex flex-col items-center justify-between sm:flex-row ">
        {/*left*/}
        <div className="flex flex-col items-start space-y-8 ">
          <h1 className="max-w-md text-4xl font-medium leading-normal text-neutral-100">
            You do the business, we'll handle the funds.
          </h1>
          <p className="max-w-sm text-sm text-left text-neutral-400">
            With the right credit card Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Maxime delectus unde quaerat molestias.
          </p>
          <button className="px-6 py-3 text-sm font-medium rounded-lg text-neutral-800 bg-gradient-to-br from-teal-200 to-sky-400/80">
            Get Started
          </button>
        </div>

        {/*right*/}

        <div className="">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 rounded-3xl odd:bg-black even:bg-gradient-to-br from-zinc-700 via-zinc-900 to-zinc-950 from "
            >
              <div className="flex flex-col items-center p-4 mr-5 rounded-full bg-teal-400/5 ">
                <Image src={item.icon} width={30} height={30} alt="icon" />
              </div>
              <div className="flex flex-col items-start space-y-2">
                <h1 className="text-sm font-semibold text-neutral-100">
                  {item.title}
                </h1>
                <p className="max-w-sm text-sm text-neutral-400">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*second section*/}

      <section className="relative flex flex-col items-center justify-between sm:flex-row ">
        {/*left*/}

        <div className="z-50">
          <Image
            src={bill}
            width={450}
            height={50}
            alt="Last transactions example"
            
          />
     
        </div>
        <div className="absolute top-0 z-10 h-96 bg-gradient-to-b from-cyan-400/30 to-gray-800 bg-blend-luminosity blur-3xl w-96" />

        {/*right*/}

        <div className="flex flex-col items-start space-y-8 ">
          <h1 className="max-w-md text-4xl font-medium leading-normal text-neutral-100">
            Easily control your billing & invoicing.
          </h1>
          <p className="max-w-sm text-sm text-left text-neutral-400">
            With the right credit card Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Maxime delectus unde quaerat molestias.
          </p>
          <div className="flex space-x-5">
            <Image src={apple} width={120} height={20} alt="app store" />
            <Image src={google} width={100} height={20} alt="Google play" />
          </div>
        </div>
      </section>

      {/*second section*/}

      <section className="flex flex-col items-center justify-between sm:flex-row ">
        {/*left*/}
        <div className="flex flex-col items-start space-y-8 ">
          <h1 className="max-w-md text-4xl font-medium leading-normal text-neutral-100">
            Find a better card deal in few easy steps.
          </h1>
          <p className="max-w-sm text-sm text-left text-neutral-400">
            With the right credit card Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Maxime delectus unde quaerat molestias.
          </p>
          <button className="px-6 py-3 text-sm font-medium rounded-lg text-neutral-800 bg-gradient-to-br from-teal-200 to-sky-400/80">
            Get Started
          </button>
        </div>

        {/*right*/}

        <div className="">
          <Image
            src={card}
            width={450}
            height={450}
            alt="Card and payment methods"
          />
        </div>
      </section>
    </div>
  );
};

export default CTA;
