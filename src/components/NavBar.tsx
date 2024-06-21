"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-4 z-50 lg:h-[80px] h-[60px] flex  items-center justify-center my-4 lg:mx-32 mx-6 px-4  py-1 rounded-full bg-white backdrop-filter backdrop-blur-sm bg-opacity-20 border-b border-gray-900 shadow-lg font-fira_sans pl-0">
      <div className=" w-full  mx-3 md:mr-10 flex justify-between items-center">
        {/* <span className="text-2xl text-white-900 font-semibold">Logo</span> */}
        <Link href="/">
          <Image
            src="https://sceptix-club.github.io/website-assets/icons/logo_square.png"
            alt="sceptix-logo"
            width={70}
            height={70}
            className="invert hover:scale-110  transform transition duration-300 ease-in-out cursor-pointer  py-5"
          />
        </Link>
        <div className="hidden md:flex space-x-4 md:space-x-14 text-white-100">
          <motion.a
            href="/members"
            className="text-sm md:text-xl font-semibold"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Members
          </motion.a>
          <motion.a
            href="/events"
            className="text-sm md:text-xl font-semibold"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Events
          </motion.a>
        </div>
        <div className="md:hidden relative">
          <button
            className="btn btn-square btn-ghost"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            title="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 origin-top-right bg-gray-600 shadow-lg ring-1 rounded-lg ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <a
                  href="/members"
                  className="block px-4 py-2 text-sm text-white-700 hover:bg-gray-400 rounded-lg"
                >
                  Members
                </a>
                <a
                  href="/events"
                  className="block px-4 py-2 text-sm text-white-700 hover:bg-gray-400 rounded-lg"
                >
                  Events
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
