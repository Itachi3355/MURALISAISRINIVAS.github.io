import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, title, children }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <motion.div
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-md w-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    >
                        <h2 className="text-xl font-semibold mb-4">{title}</h2>
                        <div>{children}</div>
                        <button
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default Modal;