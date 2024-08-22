"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const CustomImage = ({ url, fill, title, className }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {fill ? (
        <Image
          src={url}
          alt={title}
          fill
          className={`object-cover duration-700 ease-in-out group-hover:opacity-75 z-1 scale-1 hover:scale-[1.05] translation-all ${
            loading
              ? "slice-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }
        `}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Image
          src={url}
          alt="img"
          width={100}
          height={100}
          className={cn(
            className,
            "object-cover duration-500 ease-in-out group-hover:opacity-75 z-1 scale-1 hover:scale-[1.05] translation-all ",
            loading
              ? "slice-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </>
  );
};

export default CustomImage;
