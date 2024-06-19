import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className="sticky top-4 z-10 h-[70px] flex items-center justify-between my-4 mx-6 px-4 py-1 rounded-xl bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 border-b border-gray-900 shadow-lg">
            <div className="max-w-5xl w-full mx-auto flex justify-between items-center px-1">
                <span className="text-2xl text-white-900 font-semibold ml-0 md:-ml-20 py-3">Logo</span>
                <div className="flex space-x-4 md:space-x-14 text-white-100 py-4 mr-0 md:-mr-20">
                    <a href="#" className="text-sm md:text-base">Home</a>
                    <a href="#" className="text-sm md:text-base">Members</a>
                    <a href="#" className="text-sm md:text-base">Events</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
