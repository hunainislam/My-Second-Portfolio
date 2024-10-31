import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="text-white body-font bg-[#6b6b6b]">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-yellow-300 uppercase scroll-m-20 text-xl font-bold tracking-tight">
              My Portfolio
            </span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 My Portfolio —
            <a
              href="https://twitter.com/knyttneve"
              className="text-white ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              hunainislam09@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
