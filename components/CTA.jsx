import React from "react";

const CTA = () => {
  return (
    <section className="flex flex-col items-center w-full ">
      <div className="flex flex-col items-start p-10 space-y-4 lg:w-3/5 lg:bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-600 rounded-2xl lg:flex-row ">
        
        <div className="flex-col items-start mb-3 space-y-5 md:mb-0">
          <h1 className="max-w-md text-4xl font-medium leading-normal text-neutral-100">
            Sign up and try our service!
          </h1>
          <p className="max-w-sm text-sm text-left text-neutral-400 md:w-80">
            Everything you need to accept card payments and grow your
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
