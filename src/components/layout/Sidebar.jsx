import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="bg-gray-800 text-white w-64 h-full p-5 shadow-lg">
            <h1 className="text-2xl font-bold mb-8">Portfolio Dashboard</h1>
            <nav>
                <ul className="space-y-2">
                    {[
                        { path: '/', label: 'Home' },
                        { path: '/about', label: 'About Me' },
                        { path: '/projects', label: 'Projects' },
                        { path: '/experience', label: 'Experience' },
                        { path: '/contact', label: 'Contact' }
                    ].map(({ path, label }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className={`block px-4 py-2 rounded transition-colors ${
                                    isActive(path)
                                        ? 'bg-neutral-700 text-white'
                                        : 'hover:bg-neutral-700/50 hover:text-gray-300'
                                }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;