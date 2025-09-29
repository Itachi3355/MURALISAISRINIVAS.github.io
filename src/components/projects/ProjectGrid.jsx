import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects = [], onOpenDemo, query = '' }) => {
    const normalizedQuery = (query || '').trim().toLowerCase();
    const filtered = useMemo(() => {
        if (!normalizedQuery) return projects;
        return projects.filter((p) => {
            const title = (p.title || '').toLowerCase();
            const desc = (p.description || p.longDescription || '').toLowerCase();
            const tech = ((p.tech || p.technologies || []).join(' ') || '').toLowerCase();
            return title.includes(normalizedQuery) || desc.includes(normalizedQuery) || tech.includes(normalizedQuery);
        });
    }, [projects, normalizedQuery]);
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {filtered?.map((project) => (
                <motion.div key={project.id} variants={item}>
                    <ProjectCard project={project} onOpenDemo={onOpenDemo} />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ProjectGrid;