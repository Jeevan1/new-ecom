import React from "react";
import { IoStar, IoStarOutline, IoStarHalf } from "react-icons/io5";

const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = Array.from({ length: totalStars }, (_, index) => {
    if (index < fullStars) {
      return <IoStar key={index} color="#f59e0b" />;
    } else if (index === fullStars && hasHalfStar) {
      return <IoStarHalf key={index} color="#f59e0b" />;
    } else {
      return <IoStarOutline key={index} />;
    }
  });

  return <div className="flex">{stars}</div>;
};

export default StarRating;
