"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: any = {}) => {
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/products/details/${id}`);
  };
  return (
    <div
      key={product.id}
      className="border flex flex-col w-full justify-center  rounded-md shadow-md cursor-pointer"
    >
      <div
        className="scale flex justify-center w-full p-3 bg-light"
        onClick={() => handleClick(product.id)}
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={200}
        />
      </div>
      <div className="bg-white p-3">
        <p className=" capitalize font-semibold text-gray-500">
          {product.category}
        </p>
        <p className="font-bold text-xl mb-3">{product.title}</p>

        {/* <p className="text-sm line-clamp-2">{item.description}</p> */}
        <div className="flex items-center gap-4 my-2">
          <p className="font-bold text-green-500">${product.price}</p>
          <p className="text-sm line-through ">${product.discountPercentage}</p>
        </div>
        <div className="flex gap-3  items-center">
          <p>Stock: {product.stock}</p>
          <p>Rating: {product.rating}</p>
        </div>

        <p className="text-sm font-bold text-gray-500">
          Brand: {product.brand}
        </p>
        <div className="flex justify-start gap-3 mt-3">
          <Button text="Add to cart" className="rounded-sm" />
          <Button
            text="Buy Now"
            background="bg-green-500"
            className="rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
