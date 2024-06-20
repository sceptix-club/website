"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-4 z-10 -mt-24 h-[70px] flex items-center justify-between my-4 mx-6 px-4 py-1 rounded-xl bg-white backdrop-filter backdrop-blur-sm bg-opacity-20 border-b border-gray-900 shadow-lg">
            <div className="max-w-5xl w-full mx-auto flex justify-between items-center px-1">
                <span className="text-2xl text-white-900 font-semibold ml-0 md:-ml-20 py-3">Logo</span>
                <div className="hidden md:flex space-x-4 md:space-x-14 text-white-100 py-4 mr-0 md:-mr-20">
                    <motion.a
                        href="#"
                        className="text-sm md:text-base"
                        whileHover={{ scale: 1.1, color: '#ff6347' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        Home
                    </motion.a>
                    <motion.a
                        href="/members"
                        className="text-sm md:text-base"
                        whileHover={{ scale: 1.1, color: '#ff6347' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        Members
                    </motion.a>
                    <motion.a
                        href="/events"
                        className="text-sm md:text-base"
                        whileHover={{ scale: 1.1, color: '#ff6347' }}
                        transition={{ type: 'spring', stiffness: 300 }}
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
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 origin-top-right bg-gray-600 shadow-lg ring-1 rounded-lg ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-white-700 hover:bg-gray-400 rounded-lg m-2">Home</a>
                                <a href="/members" className="block px-4 py-2 text-sm text-white-700 hover:bg-gray-400 rounded-lg m-2">Members</a>
                                <a href="/events" className="block px-4 py-2 text-sm text-white-700 hover:bg-gray-400 rounded-lg m-2">Events</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
