"use client";

import React, { useState } from "react";
import Description from "../app/(root)/products/details/[id]/(component)/Description";
import Review from "../app/(root)/products/details/[id]/(component)/Review";
import AdditionalInformation from "../app/(root)/products/details/[id]/(component)/AdditionalInformation";
import { NavButtonsProps, NavButtonIdentifier } from "@/data";

const componentMap: Record<
  NavButtonIdentifier,
  React.ComponentType<{ data: any }>
> = {
  Description,
  Review,
  AdditionalInformation,
};

const NavButtons = ({
  navButtons,
  data,
}: {
  navButtons: NavButtonsProps[];
  data: any;
}) => {
  const [navItems, setNavItems] = useState<NavButtonsProps[]>(navButtons);

  const activeNavButton = (id: number) => {
    setNavItems(
      navItems.map((item) => {
        if (item.id === id) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      })
    );
  };

  const activeComponent = navItems.find((item) => item.active)?.component;
  const ActiveComponent = activeComponent
    ? componentMap[activeComponent]
    : null;

  return (
    <div>
      <ul className="flex items-center">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`mx-2 py-1 font-semibold cursor-pointer text-secondary text-md first:ml-0 relative ${
              item.active
                ? "after:content-[''] after:block after:absolute after:bg-primary after:h-[3px] after:w-full"
                : ""
            }`}
            onClick={() => activeNavButton(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="mt-3">
        {ActiveComponent ? <ActiveComponent data={data} /> : null}
      </div>
    </div>
  );
};

export default NavButtons;
