import React from "react";

const CTA = () => {
  return (
    <section className="flex flex-col items-center w-full p-10">
      <div className="flex items-center justify-between w-4/5 h-64 p-10 bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-600 rounded-2xl">

        <div className="flex flex-col items-start p-4 space-y-8">
          <h1 className="text-4xl">Sign up and try our service!</h1>
          <p className="text-sm lg:text-base text-neutral-400">
            Everything you need to accept card payments <br /> and grow your
            business from anywhere on the planet.
          </p>
        </div>

        <button className="px-6 py-3 text-sm font-medium rounded-lg lg:py-5 lg:px-10 text-neutral-800 bg-gradient-to-br from-teal-200 to-sky-400/80">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
