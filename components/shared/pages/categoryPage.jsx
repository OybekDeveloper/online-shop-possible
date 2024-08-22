"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryPage(props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const { categoryData } = props;
  const handleCategoryChange = (id) => {
    router.push(`/category?categoryId=${id}`);
  };
  
  return (
    <div className="sticky top-[58px] whitespace-nowrap overflow-x-auto w-full no-scrollbar z-10">
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
