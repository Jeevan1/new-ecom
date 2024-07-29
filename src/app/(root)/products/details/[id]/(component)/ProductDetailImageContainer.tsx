"use client";
import Image from "next/image";
import React from "react";

const ProductDetailImageContainer = ({ product }: { product: any }) => {
  const [mainImage, setMainImage] = React.useState(product.thumbnail);

  const handleClick = (image: string) => {
    setMainImage(image);
  };
  return (
    <>
      <div className="flex justify-center h-400">
        <Image
          src={mainImage}
          alt={product.title}
          width={400}
          height={400}
          style={{ objectFit: "contain" }}
          //   width={400}
          //   height={400}
        />
      </div>
      <div className="grid grid-cols-3 gap-2 ">
        {product.images &&
          product.images.map((item: any, index: number) => (
            <div
              className="border flex justify-center cursor-pointer h-[100px]"
              key={index}
              onClick={() => handleClick(item)}
            >
              <Image
                src={item}
                alt={product.title}
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductDetailImageContainer;
