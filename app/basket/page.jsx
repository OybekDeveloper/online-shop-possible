"use client";

import CustomImage from "@/components/shared/customImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const ShoppingCart = () => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("carts")) || []
  );

  const removeProduct = (id) => {
    const updatedCart = products.filter((product) => product.product_id !== id);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setProducts(updatedCart);
  };

  const handleIncrement = (id) => {
    const updatedCart = products.map((product) => {
      if (product.product_id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });

    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setProducts(updatedCart);
  };

  const handleDecrement = (id) => {
    const existProduct = products.find((product) => product.product_id === id);

    if (existProduct?.quantity === 1) {
      removeProduct(existProduct.product_id);
    } else {
      const updatedCart = products.map((product) => {
        if (product.product_id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

      localStorage.setItem("carts", JSON.stringify(updatedCart));
      setProducts(updatedCart);
    }
  };

  useEffect(() => {
    const total = products.reduce((acc, item) => {
      return acc + item.price["1"] * item.quantity;
    }, 0);

    setTotal(total);
  }, [products]);

  return (
    <>
      {products.length ? (
        <div className="min-h-screen bg-gray-100 pt-20">
          <h1 className="my-10 text-center text-2xl font-bold">
            Корзина ({products.length})
          </h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {products.map((product) => (
                <div
                  key={product.product_id}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <div className="relative w-52">
                    <CustomImage
                      url={
                        product.photo
                          ? `https://joinposter.com${product.photo_origin}`
                          : "https://dummyimage.com/720x600"
                      }
                      title={"img"}
                      className={
                        "w-full h-[200px] object-cover rounded-md border-2"
                      }
                      fill
                    />
                  </div>
                  <div className="sm:ml-4 sm:flex sm:w-full gap-x-4 sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
                        {product.product_name}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-yellow-500 hover:text-yellow-50"
                          onClick={() => handleDecrement(product.product_id)}
                        >
                          {" "}
                          -{" "}
                        </span>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          value={product.quantity}
                          min="1"
                          readOnly
                        />
                        <span
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-yellow-500 hover:text-yellow-50"
                          onClick={() => handleIncrement(product.product_id)}
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">{product.price["1"]} сум</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          onClick={() => removeProduct(product.product_id)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="flex justify-between">
                <p className="text-lg font-bold">Сумма заказа:</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">{total} сум</p>
                </div>
              </div>
              <Button className="mt-6 w-full rounded-md bg-yellow-500 py-4 font-medium  text-yellow-50 hover:bg-yellow-600">
                <Link href={"/order"}>Оформить заказ</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center p-5 bg-white w-full">
          <div className="text-center">
            <div className="inline-flex rounded-full bg-yellow-100 p-4">
              <div className="rounded-full stroke-yellow-600 bg-yellow-200 p-4">
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">
              Корзина пуста
            </h1>
            <p className="text-slate-600 mt-5 lg:text-lg">
              Страница, которую вы ищете, не существует или был удален.
            </p>
            <Link href={"/category?categoryId=1"}>
              <button className="button bg-yellow-600 py-2 px-4 text-white font-bold rounded-lg mt-5">
                Вернуться к продуктам
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
