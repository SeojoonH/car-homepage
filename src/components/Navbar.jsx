import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="absolute w-full flex justify-between p-4 ">
      <h1 className="z-20">
        <img
          src="https://www.genesis.com/etc.clientlibs/genesis-p2/global/clientlibs/clientlib-basepage/resources/images/logo.png"
          alt="/"
        />
      </h1>
      <HiMenuAlt3
        onClick={handleNav}
        className="z-20 text-white cursor-pointer"
        size={25}
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8">모델</li>
          <li className="font-bold text-3xl p-8">구매</li>
          <li className="font-bold text-3xl p-8">체험</li>
          <li className="font-bold text-3xl p-8">멤버스</li>
          <li className="font-bold text-3xl p-8">제네시스</li>
          <li className="font-bold text-3xl p-8">고객센터</li>
          <li className="font-bold text-3xl p-8">마이페이지</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
