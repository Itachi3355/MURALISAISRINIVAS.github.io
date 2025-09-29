import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Topbar = () => {
    const { toggleTheme } = useTheme();

    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
            <div className="text-lg font-bold">Creative Portfolio Dashboard</div>
            <div className="flex space-x-4 items-center">
                <a 
                    href="/resume.pdf" 
                    className="px-3 py-1 bg-neutral-700 rounded text-sm hover:bg-neutral-600 transition-colors" 
                    download
                >
                    Download Resume
                </a>

                <button 
                    onClick={toggleTheme}
                    className="px-2 py-1 bg-neutral-700 rounded text-sm hover:bg-neutral-600 transition-colors" 
                    aria-label="Toggle theme"
                >
                    Theme
                </button>
            </div>
        </div>
    );
};

export default Topbar;