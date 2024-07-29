import React from "react";
import { FaStar } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import StarRating from "./StarRating";
import { getFormattedDate } from "@/helper";

const Review = ({ data }: any) => {
  return (
    <div>
      {data.reviews?.map((item: any, index: number) => (
        <div key={index} className=" border-b-2 p-3 last:border-b-0">
          <div className="flex gap-3 items-center">
            <p className="text-3xl p-3 border-2 inline-block px-5 bg-light text-center rounded-full">
              {item.reviewerName.toUpperCase().slice(0, 1)}
            </p>
            <div>
              <p className="font-semibold">{item.reviewerName}</p>
              <p>{item.reviewerEmail}</p>
            </div>
          </div>
          <div className="py-3">
            <StarRating rating={item.rating} />
          </div>
          <p className="pb-2">{item.comment}</p>
          <p>{getFormattedDate(item.date)}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
