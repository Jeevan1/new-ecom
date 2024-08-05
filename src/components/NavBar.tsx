"use client";
import { supabase } from "@/lib/db";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";

const NavBar = () => {
  const [categories, setCategories] = React.useState<string[]>([]);
  const { data: session } = useSession();
  const router = useRouter();

  type Auth = {
    isAuth: boolean;
    name: string | null | undefined;
    email: string | null | undefined;
    image: string | null | undefined;
  };
  let auth: Auth = {
    isAuth: false,
    name: null,
    email: null,
    image: null,
  };

  if (session?.user) {
    auth = {
      isAuth: true,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
    };
  }
  const [user, setUser] = React.useState([]);

  async function fetchUsers() {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      console.error("Error fetching users:", error);
    } else {
      console.log("Users data:", data);
    }
  }

  fetchUsers();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/category-list");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="border-b flex items-center h-12 bg-white">
      <div className=" w-80 mx-auto flex items-center h-full">
        <div className="w-full relative h-full flex gap-3 justify-between pr-4">
          <div className="flex gap-2 items-center group w-fit  cursor-pointer h-full">
            <AiOutlineMenuUnfold size={20} />
            <span>All Categories</span>
            <ul className="hidden group-hover:block absolute top-[95%] border min-w-40 bg-white z-10 px-2 rounded-sm max-h-[70vh] overflow-auto">
              {categories.map((category, index) => (
                <li className="w-full  px-1 border-b" key={index}>
                  <Link href={`/products/category/${category}`} className="">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex h-full gap-4 items-center">
            <li className="min-w-12 h-full cursor-pointer flex gap-1 items-center group justify-between">
              <Link href="/">Home</Link>
            </li>
            <li className="min-w-12 h-full cursor-pointer flex gap-1 items-center group justify-between">
              <Link href="/">Shop</Link>
              <MdOutlineArrowDropDown size={20} />
              <ul className="hidden group-hover:block absolute top-[95%] border min-w-40 max-h-[70vh] overflow-auto bg-white z-10 px-2 py-1 rounded-sm">
                {categories.map((category, index) => (
                  <li
                    className="w-full px-1 py-1 hover:bg-light border-b"
                    key={index}
                  >
                    <Link href={`/products/category/${category}`} className="">
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="min-w-12 h-full cursor-pointer flex gap-1 items-center group justify-between">
              <Link href="/about">About</Link>
            </li>
            <li className="min-w-12 h-full cursor-pointer flex gap-1 items-center group justify-between">
              <Link href="/">Contact</Link>
            </li>
            <li className="min-w-12 h-full cursor-pointer flex gap-1 items-center group justify-between">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/2 h-full flex justify-end gap-2 items-center">
          <span>Follow Us:</span>
          <ul className="flex gap-4">
            <li className="border border-light cursor-pointer flex items-center justify-center rounded-full p-2 ">
              <Link href="/">
                <FaFacebook size={16} />
              </Link>
            </li>
            <li className="border border-light cursor-pointer flex items-center justify-center rounded-full p-2 ">
              <Link href="/">
                <FaInstagram size={16} />
              </Link>
            </li>
            <li className="border border-light cursor-pointer flex items-center justify-center rounded-full p-2 ">
              <Link href="/">
                <FaTwitter size={16} />
              </Link>
            </li>
            <li className="border border-light cursor-pointer flex items-center justify-center rounded-full p-2 ">
              <Link href="/">
                <FaYoutube size={16} />
              </Link>
            </li>
            {!auth.isAuth ? (
              <li
                className="cursor-pointer"
                onClick={() => router.push("/login")}
              >
                Login
              </li>
            ) : (
              <li>
                <p>{session?.user?.name}</p>
                <Link href="/" onClick={() => signOut()}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
