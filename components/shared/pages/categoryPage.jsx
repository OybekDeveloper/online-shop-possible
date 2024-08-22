"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function CategoryPageContent({ categoryData }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const handleCategoryChange = (id) => {
    router.push(`/category?categoryId=${id}`);
  };

  if (!categoryData) {
    return <div>No categories available</div>; // Fallback if categoryData is not available
  }

  return (
    <div className="bg-white sticky top-[58px] whitespace-nowrap overflow-x-auto w-full no-scrollbar z-10">
      <div className="bg-white py-2 mt-5 z-10 w-full">
        {categoryData.map((item) => (
          <div
            onClick={() => handleCategoryChange(item.category_id)}
            className={`${
              +categoryId === +item.category_id
                ? "bg-yellow-500 font-medium text-white"
                : "bg-white font-medium text-yellow-500 border"
            } inline-flex mr-4 px-4 py-3 rounded-md cursor-pointer hover:bg-yellow-400 hover:text-white transition-all ease-linear duration-300`}
            key={item.category_id}
          >
            {item.category_name}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CategoryPage({ categoryData }) {
  return (
    <Suspense>
      <CategoryPageContent categoryData={categoryData} />
    </Suspense>
  );
}
