import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    document.addEventListener('keydown', onKey);
    // focus the modal for keyboard users
    modalRef.current?.focus();

    return () => document.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
      {/* clickable overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <motion.div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-gray-900 rounded-lg max-w-4xl w-full mx-4 p-4 text-white shadow-2xl relative z-10"
      >
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="text-gray-300 hover:text-white bg-transparent border-none px-2 py-1"
          >
            ✕
          </button>
        </div>

        <div className="mt-4">
          {project.previewVideo ? (
            <video src={project.previewVideo} controls className="w-full rounded-md" />
          ) : (
            <img src={project.image} alt={project.title} className="w-full rounded-md" />
          )}
        </div>

        <div className="mt-4 text-gray-300">{project.longDescription || project.description}</div>

        <div className="mt-4 flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 bg-neutral-800 rounded-md text-sm">
              View Code
            </a>
          )}

          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="px-4 py-2 bg-indigo-600 rounded-md text-sm text-white">
              Open Live
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
