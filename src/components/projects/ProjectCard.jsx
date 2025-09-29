import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
    initial: { opacity: 0, y: 8 },
    enter: { opacity: 1, y: 0 },
    hover: { scale: 1.03 }
};

const ProjectCard = ({ project, onOpenDemo }) => {
    return (
        <motion.article
            className="relative bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden"
            variants={cardVariants}
            initial="initial"
            animate="enter"
            whileHover="hover"
        >
            <div className="h-44 md:h-48 bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110" 
                    loading="lazy"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/portfolio-dashboard.png'; // Fallback image
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-sm text-gray-200 line-clamp-2">{project.description}</p>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-3 line-clamp-3">{project.description}</p>

                <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                        {(project.tech || project.technologies || []).slice(0, 4).map((t) => (
                            <span key={t} className="text-xs px-2 py-1 bg-neutral-700 text-neutral-100 rounded-md">{t}</span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-3 py-1 bg-neutral-700 rounded-md border border-neutral-600 hover:bg-neutral-600"
                            aria-label={`Open ${project.title} on GitHub`}
                        >
                            GitHub
                        </a>

                        <button
                            onClick={() => {
                                // Prefer opening the external live demo URL if present.
                                if (project.liveDemo) return window.open(project.liveDemo, '_blank');
                                // Fallback: if no external link, open the demo modal via onOpenDemo
                                if (onOpenDemo) return onOpenDemo(project);
                            }}
                            className="text-xs px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded-md text-white"
                            aria-label={`Open live demo for ${project.title}`}
                        >
                            Live
                        </button>
                    </div>
                </div>
            </div>

            {/* Hover preview overlay */}
            <motion.div
                initial={{ opacity: 0, y: 8, pointerEvents: 'none' }}
                whileHover={{ opacity: 1, y: 0, pointerEvents: 'auto' }}
                transition={{ duration: 0.18 }}
                className="absolute inset-0 flex items-end p-4 pointer-events-none"
            >
                <div className="w-full md:w-1/2 bg-black/60 backdrop-blur-sm rounded-md p-3 text-sm text-gray-100 pointer-events-auto">
                    {project.previewVideo ? (
                        <video src={project.previewVideo} muted autoPlay loop playsInline className="w-full rounded" />
                    ) : (
                        <>
                            <div className="font-semibold">{project.title}</div>
                            <div className="text-xs text-gray-300 mt-1 line-clamp-3">{project.description}</div>
                            <div className="mt-2 flex gap-2">
                                <a href={project.github} target="_blank" rel="noreferrer" className="text-xs px-2 py-1 bg-neutral-700 rounded">Code</a>
                                <button onClick={() => (onOpenDemo ? onOpenDemo(project) : window.open(project.liveDemo, '_blank'))} className="text-xs px-2 py-1 bg-indigo-600 rounded text-white">Open</button>
                            </div>
                        </>
                    )}
                </div>
            </motion.div>
        </motion.article>
    );
};

export default ProjectCard;