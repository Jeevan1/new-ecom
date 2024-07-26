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
    <div className="grid grid-cols-3 mx-auto w-80 my-5 gap-4 ">
      {products.map((item: any) => (
        <div
          key={item.id}
          className="border flex flex-col justify-center items-center p-3 rounded-md shadow-md cursor-pointer"
        >
          <p className="font-bold text-xl">{item.title}</p>
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={200}
            height={200}
          />

          <p className="text-sm text-center line-clamp-2">{item.description}</p>
          <div className="flex items-center gap-4">
            <p>${item.price}</p>
            <p className="text-sm line-through text-green-500">
              ${item.discountPercentage}
            </p>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <p>{item.category}</p>
            <p>stock: {item.stock}</p>
            <p>rating: {item.rating}</p>
          </div>

          <p>brand: {item.brand}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
