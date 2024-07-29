"use server";
import { getSingleProducts } from "@/app/api-service";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import InputField from "@/components/InputField";
import Loading from "@/components/Loading";
import NavButtons from "@/components/NavButtons";
import { navButtons } from "@/data";
import Image from "next/image";
import React from "react";
import { FaCaravan } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";
import { IoHeartOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { TbCalendarSearch } from "react-icons/tb";
import ProductDetailImageContainer from "./(component)/ProductDetailImageContainer";

const feature = [
  {
    id: 1,
    title: "Delivery & Returns",
    icon: <FaCaravan size={20} />,
  },
  {
    id: 2,
    title: "24/7 Support",
    icon: <MdSupportAgent size={20} />,
  },
  {
    id: 3,
    title: "Secure Payment",
    icon: <GrShieldSecurity size={20} />,
  },
  {
    id: 4,
    title: "Estimated Delivery: Within 24hrs",
    icon: <TbCalendarSearch size={20} />,
  },
];

const ProductDetailsPage = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const { product, loading } = await getSingleProducts({
    id: id,
  });

  if (loading) return <Loading />;
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 mx-auto w-80 my-[3%] gap-4">
        <div className=" col-span-2">
          <ProductDetailImageContainer product={product} />
        </div>
        <div className=" col-span-3 pl-[5%]">
          <div className="flex flex-col min-w-[300px] w-[70%]">
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <div className="flex py-3">
              <del className="text-lg font-semibold ">${product.price}</del>
              <p className="text-lg font-semibold text-green-500 ml-2">
                ${product.price}
              </p>
            </div>
            <p className="text-sm text-dark font-semibold mb-3">
              {product.description}
            </p>
            <div className="flex gap-2 mb-3">
              <InputField
                name={"qty"}
                placeholder={""}
                type={"number"}
                defaultValue="1"
                className={
                  "h-12 basis-1/3 border-2 border-secondary rounded-md overflow-hidden"
                }
              />
              <Button
                text="Add To Cart"
                className="bg-white basis-2/3 text-primary text-semibold  border-2 border-secondary"
                color={"text-primary "}
              />
              <IconButton className="bg-white border-2  border-secondary rounded-md  text-primary h-[50px]">
                <IoHeartOutline size={20} />
              </IconButton>
            </div>
            <Button text="Buy Now" className="h-[50px] text-white" />
          </div>
          <div className="flex gap-5">
            <div className="flex-1 my-7 border-2 border-secondary rounded-md px-3 py-2">
              <ul>
                {feature.map((item) => (
                  <li key={item.id} className="flex items-center gap-1 py-1">
                    <IconButton className="px-0">{item.icon}</IconButton>
                    <p className="text-sm font-semibold text-secondary">
                      {item.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
      <div className=" mx-auto w-80 my-[3%]">
        <NavButtons navButtons={navButtons} data={product} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
