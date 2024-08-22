import CategoryPage from "@/components/shared/pages/categoryPage";
import ProductsPage from "@/components/shared/pages/productsPage";
import axios from "axios";
import React from "react";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export default async function Products() {
  const response = await axios.get(
    `https://joinposter.com/api/menu.getCategories?token=${apiKey}`
  );
  const response2 = await axios.get(
    `https://joinposter.com/api/menu.getProducts?token=${apiKey}`
  );
  const categoryData = response.data.response; // Assuming response.data contains the category data
  const productsData = response2.data.response; // Assuming response.data contains the category data
  console.log(productsData);
  return (
    <main className="min-h-screen max-w-7xl w-11/12 mx-auto xl:px-0 mt-[80px]">
      <CategoryPage categoryData={categoryData} />
      <ProductsPage productsData={productsData} />
    </main>
  );
}
