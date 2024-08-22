import { logo } from "@/public/image";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="h-[80px] flex items-center fixed top-0 w-full z-50 shadow bg-white">
      <nav className="flex justify-between items-center w-11/12 mx-auto max-w-7xl">
        <Link href={"/"} className="font-bold text-2xl">
          Possible
        </Link>
        <div className="flex items-center space-x-2.5 text-sm">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/category?categoryId=1"}
              className="mr-5 text-gray-900 hover:text-gray-500"
            >
              Продукция
            </Link>
          </nav>
          <Link href={"/basket"}>
            <Button className="button bg-yellow-500 border text-white border-transparent hover:border-yellow-500 hover:bg-transparent hover:text-black">
              Корзина
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
