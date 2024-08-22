"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CustomImage from "../customImage";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

function ProductsPageContent({ productsData }) {
  const router = useRouter();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("carts")) || []);
  }, []);

  const handleClick = (product) => {
    const isExistProduct = cart.find(
      (c) => c.product_id === product?.product_id
    );

    const updatedData = isExistProduct
      ? cart.map((c) =>
          c.product_id === product?.product_id
            ? { ...c, quantity: c.quantity + 1 }
            : c
        )
      : [...cart, { ...product, quantity: 1 }];

    localStorage.setItem("carts", JSON.stringify(updatedData));
    setCart(updatedData);

    toast({
      title: "Товар добавлен в корзину",
      description: "Товар успешно добавлен в вашу корзину..",
      duration: 5000,
      position: "top-right",
      icon: "🛒",
      variant: "success",
      className: "bg-green-500 text-white font-bold",
      action: (
        <ToastAction
          onClick={() => router.push("/basket")}
          altText="Показать корзину"
          className="bg-transparent hover:bg-transparent"
        >
          Показать корзину
        </ToastAction>
      ),
    });
  };

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
                <h1 className="text-xl md:text-2xl font-bold">
                  {item.product_name.length > 20
                    ? item.product_name.slice(0, 20) + "..."
                    : item.product_name}
                </h1>
                <div className="w-full justify-between items-center gap-3 flex">
                  <Button
                    onClick={() => handleClick(item)}
                    className="bg-yellow-500 hover:bg-yellow-400"
                  >
                    Добавить корзину
                  </Button>
                  <h2 className="text-gray-500 font-bold text-sm">
                    {item.price ? item.price["1"] : "0"} сум
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
export function ProductsPage({ productsData }) {
  return (
    <Suspense>
      <ProductsPageContent productsData={productsData} />
    </Suspense>
  );
}
