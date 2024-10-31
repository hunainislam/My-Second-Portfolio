import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="z-50 sticky top-0">
      <header className="text-white body-font bg-[#6b6b6b]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link href={"#home"} className="mr-5 hover:text-black">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-black">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-black">
              Skills
            </Link>
            <Link href={"#projects"} className="mr-5 hover:text-black">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-black">
              Contact
            </Link>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <span className="ml-3 text-yellow-300 uppercase scroll-m-20 text-xl font-bold tracking-tight">
              My Portfolio
            </span>
          </a>
        </div>
      </header>
    </div>
  );
}
