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
    <nav className="sticky top-4 z-50 flex items-center justify-between my-4 mx-6 px-4 py-1 bg-white backdrop-filter backdrop-blur-sm bg-opacity-20 border-b border-gray-900 shadow-lg font-fira_sans transition-all duration-300 lg:mx-32 rounded-3xl  ">
      <Link href="/" legacyBehavior>
        <a>
          <Image
            src="https://sceptix-club.github.io/website-assets/icons/logo_png.png"
            alt="sceptix-logo"
            width={70}
            height={70}
            className={`invert hover:scale-110 transform transition duration-300 ease-in-out cursor-pointer p-3 py-5 ${isOpen ? 'hidden' : 'flex'}`}
          />
        </a>
      </Link>
      <div className="flex items-center">
        <div className={`hidden md:flex space-x-4 md:space-x-14 text-white-100 ${isOpen ? 'hidden' : 'flex'}`}>
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
        <div className="md:hidden ml-4">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            title="Toggle menu"
          >
            {isOpen ? (
              <svg
                className={`w-6 h-6 ${isOpen ? 'hidden' : 'flex'}`}
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
                className="w-6 h-6"
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
        </div>
      </div>
      {/* Ensure this section is only visible when the mobile menu is open */}
      {isOpen && (
        <div className="top-0 -mt-3 -ml-2 w-full h-full flex flex-col items-center py-4  md:hidden shadow-lg z-50">
          <div className="w-full flex justify-between items-center px-4 mb-4">
            <Link href="/" legacyBehavior>
              <a>
                <Image
                  src="https://sceptix-club.github.io/website-assets/icons/logo_png.png"
                  alt="sceptix-logo"
                  width={70}
                  height={70}
                  className=" invert hover:scale-110 transform transition duration-300 ease-in-out cursor-pointer p-3 py-5"
                />
              </a>
            </Link>
            <button
              onClick={toggleMenu}
              aria-label="Close menu"
              title="Close menu"
            >
              <svg
                className="w-6 h-6"
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
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 w-full mb-3">
            <Link href="/events" legacyBehavior>
              <a className="text-xl font-semibold hover:text-gray-400">
                Events
              </a>
            </Link>
            <Link href="/members" legacyBehavior>
              <a className="text-xl font-semibold hover:text-gray-400">
                Members
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
