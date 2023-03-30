import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-success px-2 sm:px-4 py-6 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between mx-auto">
          <a href="#" className="flex items-center">
            <img
              src="/favicon/pegadaian-rmv.png"
              alt="pegadaian"
              className="h-6 mr-3 sm:h-9"
            />
            <span className="self-center text-xl font-semibold text-white whitespace-nowrap dark:text-white">
              Pegadaian Digital
            </span>
          </a>
          <div className="flex md:order-2">
            <a
              href="#"
              type="button"
              className="text-[#81B622] bg-white hover:bg-[#59981A] hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-500 font-medium rounded-lg text-sm px-7 py-2.5 text-center"
            >
              Daftar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
