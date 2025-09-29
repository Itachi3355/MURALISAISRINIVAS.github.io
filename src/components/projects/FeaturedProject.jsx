import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProject = ({ project, onOpenDemo }) => {
    if (!project) return null;

    return (
        <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
            <div className="relative">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                    {project.previewVideo ? (
                        <video 
                            src={project.previewVideo} 
                            controls 
                            className="w-full h-full object-cover rounded-lg shadow-xl"
                        />
                    ) : (
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover rounded-lg shadow-xl"
                            loading="lazy"
                        />
                    )}
                </div>

                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                            {project.title}
                        </h2>
                        <p className="text-gray-300">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tech?.map((tech, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {project.github && (
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                View Code
                            </motion.a>
                        )}

                        {project.liveDemo && (
                            <motion.button
                                onClick={() => {
                                    if (project.liveDemo) return window.open(project.liveDemo, '_blank');
                                    if (onOpenDemo) return onOpenDemo(project);
                                }}
                                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                Live Demo
                            </motion.button>
                        )}

                        {project.caseStudy && (
                            <motion.a
                                href={project.caseStudy}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Case Study
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FeaturedProject;