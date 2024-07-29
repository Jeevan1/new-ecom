import React from "react";

const Description = ({ data }: any) => {
  return (
    <ul className="">
      <li className=" list-inside list-disc">
        Brand: <span>{data?.brand}</span>
      </li>
      <li className="list-inside list-disc">
        Category: <span>{data?.category}</span>
      </li>
      <li className="list-inside list-disc">
        Rating: <span>{data?.rating}</span>
      </li>
      <li className="list-inside list-disc">
        Warranty: <span>{data?.warrantyInformation}</span>
      </li>
      <li className="list-inside list-disc">
        Weight: <span>{data?.weight}</span>
      </li>
    </ul>
  );
};

export default Description;
