// import { Link } from "react-scroll";
// import { reveal as Menu } from "react-burger-menu";

import { Icon } from "@iconify/react";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <div className="fixed w-full bg-word bg-opacity-30">
      <div className="max-w-[1280px] flex items-center mx-auto py-2">
        <div onClick={() => setMenu(!menu)} className="lg:hidden ml-2">
          {menu ? (
            <Icon icon="ci:hamburger-lg" />
          ) : (
            <Icon icon="akar-icons:cross" />
          )}
        </div>

        <h2 className="font-header justify-center ml-5 lg:ml-0 text-word">Safat</h2>

        <div className="flex hidden lg:block mx-auto max-w-[1280px]">
          <ul className="flex font-header font-semibold text-word text-base">
            <li className="ml-5 cursor-pointer hover:font-bold hover:bg-word hover:text-bg transition-all duration-500 px-3 py-3 rounded-md">
              Home
            </li>
            <li className="ml-5 cursor-pointer hover:font-bold hover:bg-word hover:text-bg transition-all duration-500 px-3 py-3 rounded-md">
              About Me
            </li>
            <li className="ml-5 cursor-pointer hover:font-bold hover:bg-word hover:text-bg transition-all duration-500 px-3 py-3 rounded-md">
              Skills
            </li>
            <li className="ml-5 cursor-pointer hover:font-bold hover:bg-word hover:text-bg transition-all duration-500 px-3 py-3 rounded-md">
              Projects
            </li>
            <li className="ml-5 cursor-pointer hover:font-bold hover:bg-word hover:text-bg transition-all duration-500 px-3 py-3 rounded-md">
              Contacts
            </li>
          </ul>
        </div>

        <button className="text-xl px-3 py-1 rounded bg-word text-bg font-medium hover:text-word hover:bg-bg transition-all duration-500">
          Hire Now
        </button>
      </div>
      <div
        className={
          menu
            ? "bg-word transition-all -translate-x-[1000px] duration-500 w-1/2 "
            : "bg-word transition-all  duration-500 h-screen w-1/3 rounded-md lg:hidden"
        }
      >
        {menu ? (
          <></>
        ) : (
          <div>
            <ul className="font-header font-semibold text-bg text-base">
              <li className=" cursor-pointer hover:font-bold hover:bg-bg w-full hover:text-word px-3 py-3 rounded-md">
                Home
              </li>
              <li className=" cursor-pointer hover:font-bold hover:bg-bg w-full hover:text-word px-3 py-3 rounded-md">
                About Me
              </li>
              <li className=" cursor-pointer hover:font-bold hover:bg-bg w-full hover:text-word px-3 py-3 rounded-md">
                Skills
              </li>
              <li className=" cursor-pointer hover:font-bold hover:bg-bg w-full hover:text-word px-3 py-3 rounded-md">
                Projects
              </li>
              <li className=" cursor-pointer hover:font-bold hover:bg-bg w-full hover:text-word px-3 py-3 rounded-md">
                Contacts
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
