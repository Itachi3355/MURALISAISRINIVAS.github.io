import React from 'react';

const IconButton = ({ icon, onClick, label }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out"
            aria-label={label}
        >
            {icon}
        </button>
    );
};

export default IconButton;