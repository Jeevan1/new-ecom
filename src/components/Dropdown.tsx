"use client";
import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

interface Props {
  menuItem: string[];
  style?: React.CSSProperties;
  className?: string;
}
const Dropdown = ({ menuItem, style, className }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("All");
  const menuOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (menu: string) => {
    setSelected(menu);
    menuOpenHandler();
  };
  return (
    <div
      className={`flex relative w-fit h-full border border-light rounded-l-md  ${className}`}
      style={style}
    >
      <button
        onClick={menuOpenHandler}
        className="bg-white px-3 flex gap-2 items-center rounded-l-md "
      >
        <span className="w-20 text-left mr-3">{selected}</span>
        <IoChevronDown />
      </button>
      {isOpen && (
        <ul className="absolute top-12 bg-white w-full border rounded-lg">
          {menuItem.map((item, index) => (
            <li
              className="p-2  border-b hover:bg-gray-100 cursor-pointer"
              key={index}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
