import { logo } from "@/public/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="w-11/12 mx-auto max-w-7xl py-8 flex items-center sm:flex-row flex-col space-y-2">
        <Link href={"/"} className="font-bold text-xl">
          {/* <Image src={logo} alt={"logo"} width={150} height={40} /> */}
          Possible
        </Link>
        <p className="text-sm w-full text-gray-500 sm:ml-4 max-sm:text-center sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020 possible —
          <a
            href="https://possible.uz"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Possible.uz
          </a>
        </p>
        <div className="flex justify-center sm:justify-end gap-4 items-center w-full">
          <Link href={"#"}>
            <Facebook />
          </Link>
          <Link href={"#"}>
            <Instagram />
          </Link>
          <Link href={"#"}>
            <Youtube />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
