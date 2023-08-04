"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { logo, close, menu } from "@/public/assets";
import { navLinks } from "@/utils/constants";

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })


const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <header className={`flex items-center justify-between w-full py-6 px-8 lg:px-20  ${poppins.className}`}>
      <Image src={logo} alt="logo" width={100} height={32} />

      <nav className="items-center hidden sm:flex ">
        {navLinks.map((nav, index) => (
          <Link
            key={nav.id}
            className={`font-poppins font-normal z-30 last:mr-0 text-sm mr-10 text-gray-300 `}
            href={`#${nav.id}`}
          >
            {nav.title}
          </Link>
        ))}
      </nav>

      <nav className="flex items-center justify-end sm:hidden flrx-1 ">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={24}
          height={24}
          className="object-contain cursor-pointer"
          onClick={() => settoggle((prev) => !prev)}
        />

              {/*   Sidebar  */}

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute z-50 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-gradient-to-b from-neutral-900 to-black`}
        >
          <nav className="flex flex-col items-center justify-end flex-1 ">
            {navLinks.map((nav, index) => (
              <Link
                key={nav.id}
                className={`font-poppins font-normal last:mr-0 text-sm mb-4 text-white`}
                href={`#${nav.id}`}
              >
                {nav.title}
              </Link>
            ))}
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
