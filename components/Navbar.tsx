"use client";
import { useState } from "react";
import Link from "next/link";
import { navLinks } from "./constants";
import { menu, close } from "../assets";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed z-[100] top-0 opacity-95 header-bg`}
    >
      <div className="w-full flex justify-between items-center max-7xl mx-auto">
        <Link href="/" 
         className="text-2xl font-semibold brandName"
         onClick={() => setActive("")} >
          Sahil-it
        </Link>
        {/* Menu Item Part */}
        <ul className="list-none hidden sm:flex flex-row gap-5">
          <li>
            <Link
              href="/"
              className={`hover:text-yellow-500 hover:border-b-2 hover:border-sky-800 text-[18px] font-semibold cursor-pointer ${
                active === ""
                  ? "text-amber-300 border-b-2 border-sky-800"
                  : "text-white"
              }`}
              onClick={() => setActive("")}
            >
              Home
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`hover:text-yellow-500 hover:border-b-2 hover:border-sky-800 text-[18px] font-semibold cursor-pointer ${
                  active === link.id
                    ? "text-amber-300 border-b-2 border-sky-800"
                    : "text-white"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Device Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="Menu"
            width={28}
            height={28}
            onClick={() => setToggle(!toggle)}
            className="w-[28px] h-[28px] object-contain"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 mobile-navbar-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              <li>
                <Link
                  href="/"
                  className={`hover:text-yellow-500 hover:border-b-2 hover:border-sky-800 text-[16px] font-semibold cursor-pointer ${
                    active === ""
                      ? "text-amber-300 border-b-2 border-sky-800"
                      : "text-white"
                  }`}
                  onClick={() => setActive("")}
                >
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                    className={`hover:text-yellow-500 text-[16px] font-semibold cursor-pointer ${
                      active === link.id ? "text-amber-300" : "text-white"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
