import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navigation = (props: Props) => {
  const menuItems = [
    {
      label: "About Me",
      href: "/",
    },
    {
      label: "Tech Stack",
      href: "/",
    },
    {
      label: "Working Experience",
      href: "/",
    },
    {
      label: "Projects",
      href: "/",
    },
  ];
  return (
    <nav className=" fixed w-full z-10 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 ">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={150} height={150} />
          </Link>
        </div>
        <div className="flex gap-4 items-center text-gray-800 ">
          {menuItems.map((menu, index) => (
            <Link href={menu.href} className="font-light group" key={index}>
              <span className="hover:font-bold hover:transition-all duration-300">
                {menu.label}
              </span>
            </Link>
          ))}

          <Link
            href="/"
            className="bg-gray-800 text-white hover:font-bold hover:scale-105 transition-all duration-300 px-4 py-2 rounded-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
