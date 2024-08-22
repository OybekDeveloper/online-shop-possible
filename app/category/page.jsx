import CategoryPage from "@/components/shared/pages/categoryPage";
import ProductsPage from "@/components/shared/pages/productsPage";
import axios from "axios";
import React from "react";

export default async function Products() {
  const response = await axios.get(
    `https://joinposter.com/api/menu.getCategories?token=967898:49355888e8e490af3bcca79c5e6b1abf`
  );
  const response2 = await axios.get(
    `https://joinposter.com/api/menu.getProducts?token=967898:49355888e8e490af3bcca79c5e6b1abf`
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
