import { feedback } from "@/utils/constants";
import Image from "next/image";
import { quotes } from "@/public/assets";

const Testimonials = () => {
  return (
    <section className="relative flex flex-col items-center w-full p-10 ">
      <div className="z-50 flex items-center justify-between mb-20 space-x-20 ">
        {/*Text div*/}
        <div className="">
          <h1 className="text-4xl font-semibold leading-normal lg:leading-relaxed lg:text-5xl text-neutral-100">
            What people are <br /> saying about us
          </h1>
        </div>
        <div>
          <p className="text-sm leading-normal text-left lg:text-base w-96 text-neutral-400">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      {/*end*/}

      <div className="grid items-center grid-cols-3 grid-rows-1 gap-5 ">
        {feedback.map((item) => (
          <div
            key={item.id}
            className="z-50 p-10 space-y-8 lg:p-16 rounded-2xl first:bg-gradient-to-br from-zinc-800 via-zinc-950 first:shadow-2xl to-zinc-950"
          >
            <Image src={quotes} width={28} height={28} alt="icon" />
            <p className="w-48 text-sm lg:text-base lg:w-52 text-neutral-300">
              {item.content}
            </p>

            {/*User info*/}

            <div className="flex items-center space-x-3">
              <Image src={item.img} width={32} height={32} alt="User image" />

              {/*Name and occupation*/}
              <div>
                <h1>{item.name}</h1>
                <p className="text-xs text-neutral-400">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      <div className="absolute right-0  bottom-0  z-10  bg-gradient-to-l from-blue-300/30 via-blue-500/10  to-blue-900/10 blur-3xl w-[60%] h-[100%]" />

    </section>
  );
};

export default Testimonials;
