import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-500 py-4">
            <div className="container mx-auto flex items-center justify-between px-4">
                <h1 className="text-white text-2xl font-bold">My To-Do App</h1>
                {/* Add any additional header elements such as user profile, settings, etc. */}
            </div>
        </header>
    );
};

export default Header;
