import React from 'react';
import { motion } from 'framer-motion';

export const KPIWidget = ({ title, value, description, change }) => {
    // normalize change to a numeric value if possible (e.g. '+25%' -> 25)
    let changeNumber;
    if (typeof change === 'string') {
        const parsed = parseFloat(change.replace(/[^0-9.-]/g, ''));
        changeNumber = Number.isFinite(parsed) ? parsed : undefined;
    } else if (typeof change === 'number') {
        changeNumber = change;
    }
    const isPositive = typeof changeNumber === 'number' ? changeNumber >= 0 : false;
    
    return (
        <motion.div
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="text-3xl font-bold text-green-400">{value}</p>
            <p className="text-gray-400">{description}</p>
            {change !== undefined && (
                <div className="mt-2 flex items-center">
                    <span className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {isPositive ? '↑' : '↓'} {change}
                    </span>
                    <span className="ml-2 text-sm text-gray-400">from last month</span>
                </div>
            )}
        </motion.div>
    );
};

// Adding default export while keeping named export
export default KPIWidget;