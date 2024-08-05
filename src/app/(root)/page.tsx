import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";
import { getCategories } from "../api-service";
import CategoryCard from "@/components/CategoryCard";
import { supabase } from "../../lib/db";

type Category = {
  slug: string;
  name: string;
  url: string;
};
const Page = async () => {
  const { categories, loading } = await getCategories();

  return (
    <div className="w-80 mx-auto">
      {
        // <p>
        //   {data.map((item: any) => (
        //     <p>www{item.email}</p>
        //   ))}
        // </p>
      }
      <Banner />

      <div className="my-10">
        <h1 className="text-2xl font-semibold mb-4 text-grey">
          Shop By Category
        </h1>
        <div className="grid grid-cols-6 gap-6">
          {categories &&
            categories.slice(0, 12).map((item: Category, index: number) => {
              return (
                <>
                  <CategoryCard item={item} index={index} />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Page;
