import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid w-full grid-cols-5 gap-20 p-10 bg-neutral-950 ">
      {/*1*/}
      <div className="items-start col-span-2 space-y-5 ">
        <Image src={logo} width={240} height={240} alt="logo" />
        <p className="text-base w-60 text-neutral-300">
          A new way to ake the payments easy, reliable and secure
        </p>
      </div>
      {/*2*/}
      <div className="flex flex-col items-start space-y-5 ">
        <h2 className="text-lg">Usefull links</h2>
        <div className="flex flex-col items-start space-y-3 text-sm text-neutral-300">
          <Link href={"/"}>Content</Link>
          <Link href={"/"}>How it Works</Link>
          <Link href={"/"}>Create</Link>
          <Link href={"/"}>Explore</Link>
          <Link href={"/"}>Terms and Services</Link>
        </div>
      </div>
      {/*3*/}

      <div className="flex flex-col items-start space-y-5 ">
        <h2 className="text-lg">Community</h2>
        <div className="flex flex-col items-start space-y-3 text-sm text-neutral-300">
          <Link href={"/"}>Help Center</Link>
          <Link href={"/"}>Partners</Link>
          <Link href={"/"}>Suggestions</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Newsletters</Link>
        </div>
      </div>
      {/*4*/}
      <div className="flex flex-col items-start space-y-5 ">
        <h2 className="text-lg">Partner</h2>
        <div className="flex flex-col items-start space-y-3 text-sm text-neutral-300">
          <Link href={"/"}>Our Partner</Link>
          <Link href={"/"}>Become a Partner</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
