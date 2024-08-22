import { bgback } from "@/public/image";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-100px)] flex justify-center items-center text-center">
      <div className="space-y-4">
        <h1 className="text-2xl">Развивайте свой бизнес вместе с нами</h1>
        <p>
          IT компания «POSSIBLE» — системный разработчик программного
          обеспечения для бизнеса.
        </p>
        <Button>
          <a href="https://possible.uz">Наш сайт</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
