import { getProducts } from "@/app/api-service";
import Loading from "@/components/Loading";
import ProductCard from "@/components/ProductCard";

const Page = async () => {
  const { products, loading } = await getProducts({
    endpoint: "/products",
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
