import { discount, robot } from "@/public/assets";
import Image from "next/image";

import { Stats } from ".";

const Hero = () => {
  return (
    <section className="flex flex-col items-center w-full mt-5 lg:justify-between md:flex-row ">
      
      {/*left*/}
      <div className="p-6 lg:p-16">
        <div className="relative flex flex-row items-center px-4 mb-5 lg:px-6 lg:py-2 w-sm lg:max-w-xl bg-gradient-to-r from-stone-900 to-black rounded-xl">
          <Image
            src={discount}
            width={32}
            height={32}
            alt="discount"
            className="object-contain"
          />

          <p className="ml-2 text-xs text-gray-400 lg:text-base">
            <span className="text-white">20%</span> Discount for {""}
            <span className="text-white">3 months</span> on your new account
          </p>

        </div>
        <h1 className="text-5xl font-semibold leading-tight text-center text-gray-100 lg:leading-relaxed md:text-start lg:text-6xl whitespace-nowrap lg:w-96 ">
          The Next <br />{" "}
          <span className="text-transparent bg-gradient-to-r from-sky-400 to-sky-200 bg-clip-text ">
            Generation
          </span>{" "}
          <br /> Payment method.
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-center text-gray-300 md:max-w-sm sm:max-w-md md:text-left">
          Our team of experts uses a methodology Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Amet vero esse iusto aut tempora!
          Molestiae veritatis quis aspernatur officiis ut sdsnsdss.
        </p>
      </div>

      {/*right*/}

      <div className="right-0 md:flex">
        <Image
          src={robot}
          width={600}
          height={600}
          alt="robotic hand holding cards"
          className="relative z-50"
        />
        <div className="absolute md:top-0 bottom-0 z-10 bg-gradient-to-b from-indigo-400/30 blur-3xl to-indigo-400/40 w-[50%] h-96" />
        <div className="absolute md:top-30 bottom-0 z-10  bg-gradient-to-b from-neutral-800/30 blur-3xl to-sky-500/30 w-[100%] h-96" />
      </div>
      
    </section>

  );
};

export default Hero;
