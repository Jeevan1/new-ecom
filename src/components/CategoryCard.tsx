import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ item, index }: { item: any; index: number }) => {
  let size1 = 200 + index;
  let siz2 = 180 + index;

  return (
    <Link
      href={`/products/category/${item.slug}`}
      key={index}
      className="border rounded-md cursor-pointer"
    >
      <div className="w-full bg-grey">
        <Image
          src={`https://picsum.photos/seed/picsum/${size1}/${siz2}/`}
          alt={item.name}
          width={320}
          height={200}
        />
      </div>
      <p className="text-center py-4">{item.name}</p>
    </Link>
  );
};

export default CategoryCard;
