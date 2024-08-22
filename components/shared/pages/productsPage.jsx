"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import CustomImage from "../customImage";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function ProductsPage({ productsData }) {
  const router = useRouter();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const handleClick = (product) => {
    const products = JSON.parse(localStorage.getItem("carts")) || [];

    const isExistProduct = products.find(
      (c) => c.product_id === product?.product_id
    );

    if (isExistProduct) {
      const updatedData = products.map((c) => {
        if (c.product_id === product?.product_id) {
          return {
            ...c,
            quantity: c.quantity + 1,
          };
        }

        return c;
      });

      localStorage.setItem("carts", JSON.stringify(updatedData));
    } else {
      const data = [...products, { ...product, quantity: 1 }];
      localStorage.setItem("carts", JSON.stringify(data));
    }
    toast({
      title: "Product Added to Cart",
      description: "The item has been successfully added to your cart.",
      duration: 5000, // Duration in milliseconds (5000ms = 5 seconds)
      position: "top-right", // Position on the screen (e.g., 'top-right', 'bottom-left', etc.)
      icon: "🛒", // You can use emojis or custom icons
      variant: "success", // Can be 'success', 'error', 'info', etc. if supported
      className: "bg-green-500 text-white font-bold", // Custom class for styling
      action: (
        <ToastAction
          onClick={() => router.push("/basket")}
          altText="Show Basket"
          className="bg-transparent hover:bg-transparent"
        >
          Show Basket
        </ToastAction>
      ),
    });
  };

  console.log(productsData);
  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {productsData.map((item, idx) => {
        if (categoryId !== item.menu_category_id) {
          return null;
        }
        return (
          <div
            key={idx}
            className="overflow-hidden w-full z-1 max-w-5xl mx-auto flex flex-col items-start justify-between gap-8 px-4 border py-4 hover:shadow-md translation-all duration-300 cursor-pointer"
          >
            <div className="w-full overflow-hidden rounded-md">
              <CustomImage
                url={
                  item.photo
                    ? `https://joinposter.com${item.photo_origin}`
                    : "https://dummyimage.com/720x600"
                }
                title={"img"}
                className={"w-full h-[200px] object-cover rounded-md border-2"}
              />
            </div>

            <div className="w-full">
              <div className="w-full space-y-2">
                <h1 className="text-xl md:text-4xl font-bold">
                  {item.product_name.length > 20
                    ? item.product_name.slice(0, 20) + "..."
                    : item.product_name}
                </h1>
                <div className="w-full justify-between items-center gap-3 flex">
                  <Button
                    onClick={() => handleClick(item)}
                    className="bg-yellow-500 hover:bg-yellow-400"
                  >
                    Add Basket
                  </Button>
                  <h2 className="text-gray-500 font-bold text-sm">
                    ${item.price ? item.price["1"] : "0"} сум
                  </h2>
                </div>
              </div>
              <div>
                <p className="text-xs md:text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
