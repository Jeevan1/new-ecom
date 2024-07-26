"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";

import BannerSwiperSlide from "./BannerSwiperSlide";

const Banner = () => {
  const products = useSelector((state: any) => state.products.products);
  return (
    <div className="w-full py-4">
      <div className="w-80 mx-auto h-[500px] flex gap-4">
        <div className="w-[70%] h-full">
          <Swiper
            navigation={true}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            className="h-full"
          >
            {products &&
              products.slice(0, 3).map((product) => (
                <SwiperSlide key={product.id} className="w-full h-full">
                  <BannerSwiperSlide product={product} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className=" w-[30%] flex flex-col gap-4 h-full">
          <div style={{ height: "100%" }} className="border">
            dbsjdbs
          </div>
          <div style={{ height: "100%" }} className="border">
            dbsjdbs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
