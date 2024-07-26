import React from "react";
import Button from "./Button";
import Image from "next/image";
import { MdAttachMoney } from "react-icons/md";

const BannerSwiperSlide = ({ product }: { product: any }) => {
  return (
    <div className="w-full h-full flex justify-between items-center bg-red-50 p-4">
      <div>
        <p className="text-md font-semibold text-dark">Big Sale Offer</p>
        <h3 className="text-3xl font-bold text-black mt-2">{product.title}</h3>
        <p className="text-sm font-semibold text-dark my-4">
          {product.description}
        </p>
        <div className="flex gap-3 items-center mb-6">
          <span className="text-sm font-semibold text-dark">Buy Now</span>
          <span className="text-lg font-semibold text-black flex items-center">
            <MdAttachMoney size={20} />
            <span> {product.price}</span>
          </span>
        </div>
        <Button text="Shop Now" />
      </div>
      <div>
        <Image src={product.thumbnail} alt="banner" width={600} height={900} />
      </div>
    </div>
  );
};

export default BannerSwiperSlide;
