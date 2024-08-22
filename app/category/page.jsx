import CategoryPage from "@/components/shared/pages/categoryPage";
import ProductsPage from "@/components/shared/pages/productsPage";
import axios from "axios";

// Fetch data using getServerSideProps or getStaticProps depending on your use case
export async function getServerSideProps() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  // Fetch categories
  const { data: categoryData } = await axios.get(
    `https://joinposter.com/api/menu.getCategories?token=${apiKey}`
  );

  // Fetch products
  const { data: productsData } = await axios.get(
    `https://joinposter.com/api/menu.getProducts?token=${apiKey}`
  );

  // Return the fetched data as props to the page
  return {
    props: {
      categoryData: categoryData.response,
      productsData: productsData.response,
    },
  };
}

export default function Products({ categoryData, productsData }) {
  return (
    <main className="min-h-screen max-w-7xl w-11/12 mx-auto xl:px-0 mt-[80px]">
      <CategoryPage categoryData={categoryData} />
      <ProductsPage productsData={productsData} />
    </main>
  );
}
