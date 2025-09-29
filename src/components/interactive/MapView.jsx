import React from 'react';

const MapView = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-900">
            <h1 className="text-3xl font-bold text-white mb-4">Interactive Map View</h1>
            <div className="w-full h-96 bg-gray-800 rounded-lg shadow-lg relative">
                {/* Placeholder for the map */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">Map will be displayed here</span>
                </div>
            </div>
            <div className="mt-4 text-gray-400">
                <p>Hover over the map to see project details.</p>
            </div>
        </div>
    );
};

export default MapView;