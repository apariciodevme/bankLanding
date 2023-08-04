import React from "react";
import { arrowUp } from "@/public/assets";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div className="rounded-full flexCenter w-[140px] p-1 cursor-pointer h-[140px] bg-blue-gradient">
      <div className="flex-col w-full h-full rounded-full flexCenter bg-primary">
        <div className="flex-col flexStart ">
          <p className="flex space-x-2 text-xl font-semibold text-white font-poppins">
            <span className="text-gradient">Get</span>
            <Image
            src={arrowUp}
            width={24}
            height={24}
            alt="arrowUp"
            className="object-contain "

          />
          </p>

          
          <p className="text-xl font-semibold leading-tight text-white font-poppins">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
