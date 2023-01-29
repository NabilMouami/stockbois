import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill", link: "/dashboard" },
    { title: "Factures", src: "Chat", link: "/commerciel/factures" },
    { title: "Calendar", src: "User", gap: true, link: "/commerciel/calendar" },
    { title: "New Facture ", src: "Calendar", link: "/commerciel/facture/new" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Commerciel
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={Menu.link}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img src={`/assets/${Menu.src}.png`} />
                <span
                  className={`${
                    !open && "hidden"
                  }  text-black  origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
