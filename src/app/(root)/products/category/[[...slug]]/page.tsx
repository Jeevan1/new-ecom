"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const getProducts = async (category: string | string[]) => {
  const url = `https://dummyjson.com/products/category/${category}`;
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.products;
  } catch (error) {
    console.error(error);
  }
};

const Page = ({ params: { slug } }: { params: { slug: string[] } }) => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const datas = await getProducts(slug);
      setProducts(datas);
      console.log(datas);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 mx-auto w-80 mt-5">
      {products.map((item: any) => (
        <div
          key={item.id}
          className="border flex flex-col justify-center items-center"
        >
          <p>{item.title}</p>
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

export default Page;
