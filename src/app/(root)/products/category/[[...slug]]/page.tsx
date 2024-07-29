import { getProducts } from "@/app/api-service";
import Loading from "@/components/Loading";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export async function generateMetadata({ params: { slug } }: any) {
  const { products, loading } = await getProducts({
    endpoint: `/products/category/${slug}`,
  });
  return {
    title: "GEOMART | " + products[0].category.toUpperCase(),
  };
}

const Page = async ({ params: { slug } }: { params: { slug: string[] } }) => {
  const { products, loading } = await getProducts({
    endpoint: `/products/category/${slug}`,
  });
  if (loading) return <Loading />;
  return (
    <div className="grid grid-cols-4 mx-auto w-80 my-5 gap-4 ">
      {products.map((item: any) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Page;
