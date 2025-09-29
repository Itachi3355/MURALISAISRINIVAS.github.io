import React from 'react';

const Card = ({ title, description, image, githubLink, liveDemoLink }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={image} alt={title} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-gray-400 mt-2">{description}</p>
                <div className="mt-4 flex justify-between">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        GitHub
                    </a>
                    <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;