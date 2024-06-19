import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className="sticky top-4 z-10  h-[70px] item-center justify-between my-4 mx-6 px-4 py-1 rounded-xl bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 border-b border-gray-900 shadow-lg">
            <div className="max-w-5xl mx-auto px-1">
                <div className="flex  justify-between h-20">
                    <span className="text-2xl text-white-900 font-semibold -ml-20 py-3">Logo</span>
                    <div className="flex  justify-end space-x-14 text-white-100 py-4 -mr-20">
                        <a href="#">Home</a>
                        <a href="#">Members</a>
                        <a href="#">Events</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
