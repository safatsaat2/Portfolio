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
        <div onClick={() => setMenu(!menu)} className="lg:hidden">
          {menu ? (
            <Icon icon="ci:hamburger-lg" />
          ) : (
            <Icon icon="akar-icons:cross" />
          )}
        </div>
        <h2 className="font-header text-word">Safat</h2>
      </div>
      <div
        className={
          menu
            ? "bg-word transition-all -translate-x-[1000px] duration-500 w-1/2 "
            : "bg-word transition-all  duration-500 h-screen w-1/2 rounded-md"
        }
      >
        {menu ? (
          <></>
        ) : (
          <div>
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
