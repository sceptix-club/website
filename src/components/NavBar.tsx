"use client";
import React, { useState } from 'react';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-4 z-10 h-[70px] flex items-center justify-between my-4 mx-6 px-4 py-1 rounded-xl bg-white backdrop-filter backdrop-blur-sm bg-opacity-20 border-b border-gray-900 shadow-lg">
            <div className="max-w-5xl w-full mx-auto flex justify-between items-center px-1">
                <span className="text-2xl text-white-900 font-semibold ml-0 md:-ml-20 py-3">Logo</span>
                <div className="hidden md:flex space-x-4 md:space-x-14 text-white-100 py-4 mr-0 md:-mr-20">
                    <a href="#" className="text-sm md:text-base">Home</a>
                    <a href="#" className="text-sm md:text-base">Members</a>
                    <a href="#" className="text-sm md:text-base">Events</a>
                </div>
                <div className="md:hidden">
                    <button
                        className="btn btn-square btn-ghost"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        title="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white-100">Home</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white-100">Members</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white-100">Events</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
