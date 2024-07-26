import React from "react";
import Dropdown from "./Dropdown";
import { searchMenu } from "@/data";
import InputField from "./InputField";
import IconButton from "./IconButton";
import {
  IoCartOutline,
  IoHeartOutline,
  IoPhoneLandscape,
  IoSearch,
} from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import BadgeIcon from "./BadgeIcon";

const Header = () => {
  return (
    <nav className=" h-28 border-b">
      <div className="flex justify-between h-full w-80 mx-auto items-center gap-4">
        <div className="w-1/5">
          <h1 className="font-bold text-3xl text-accent">GEOMART</h1>
        </div>
        <div className="w-1/2  h-12 ">
          <form className="flex h-full justify-between">
            <Dropdown menuItem={searchMenu} className="border-r-0" />
            <InputField name={"search"} placeholder={"Search..."} />
            <IconButton
              background={"secondary"}
              className={"bg-secondary text-white rounded-r-md"}
            >
              <IoSearch />
            </IconButton>
          </form>
        </div>
        <div className="flex justify-between items-center w-1/3 h-12">
          <div className="h-full flex gap-2 items-center ">
            <IconButton className="rounded-full bg-secondary text-white">
              <MdOutlinePhone className="text" />
            </IconButton>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">Phone No:</p>
              <p className="text-sm font-semibold text-dark">+977 1234567890</p>
            </div>
          </div>
          <div>
            <BadgeIcon>
              <IoHeartOutline size={24} />
            </BadgeIcon>
            <BadgeIcon>
              <IoCartOutline size={24} />
            </BadgeIcon>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
