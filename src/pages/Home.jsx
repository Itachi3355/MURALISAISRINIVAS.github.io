import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FeaturedProject from '../components/projects/FeaturedProject';
import ProjectGrid from '../components/projects/ProjectGrid';
import ProjectModal from '../components/projects/ProjectModal';
import useProjects from '../hooks/useProjects';
import CommandTerminal from '../components/interactive/CommandTerminal';
import { KPIWidget } from '../components/analytics/KPIWidget';
import ChartWindowLoader from '../components/analytics/ChartWindowLoader';

const Home = () => {
    const { projects } = useProjects();
    const [selectedProject, setSelectedProject] = useState(null);
    const [query, setQuery] = useState('');
    const [secretUnlocked, setSecretUnlocked] = useState(false);

    const handleOpenDemo = (project) => setSelectedProject(project);
    const handleCloseDemo = () => setSelectedProject(null);

    useEffect(() => {
        const onSecret = () => setSecretUnlocked(true);
        window.addEventListener('portfolio:open-secret', onSecret);
        return () => window.removeEventListener('portfolio:open-secret', onSecret);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const stats = [
        {
            title: "Years of Experience",
            value: "3+",
            change: "+25%",
            description: "Enterprise Development"
        },
        {
            title: "Projects Delivered",
            value: "25+",
            change: "+65%",
            description: "Microservices & Apps"
        },
        {
            title: "Data Processed",
            value: "50.9M+",
            change: "+82%",
            description: "Records Analyzed"
        },
        {
            title: "Cost Savings",
            value: "$2.1M",
            change: "+40%",
            description: "Annual Impact"
        }
    ];

    // ...existing code...

    return (
        <motion.div
            className="p-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants} className="mb-8">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    Welcome to My Portfolio Dashboard
                </h1>
                <p className="text-xl text-gray-400">
                    Systems Engineer & Data Scientist | Building Enterprise Solutions & ML Models
                </p>
            </motion.div>

            {secretUnlocked && (
                <motion.div 
                    variants={itemVariants}
                    className="mb-6 p-4 bg-gradient-to-r from-emerald-800 to-emerald-600 text-white rounded-lg shadow-lg"
                >
                    🎉 Secret unlocked — hidden projects revealed!
                </motion.div>
            )}

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                    <KPIWidget
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                        description={stat.description}
                    />
                ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <FeaturedProject project={projects?.[0]} onOpenDemo={handleOpenDemo} />
                    </div>
                    <div className="lg:col-span-1">
                        <ChartWindowLoader
                            labels={['2021','2022','2023','2024','2025']}
                            datasets={[
                                { label: 'Full Stack', data: [65,72,80,88,95], borderColor: 'rgba(59,130,246,1)' },
                                { label: 'Data Science', data: [55,66,75,82,90], borderColor: 'rgba(16,185,129,1)' }
                            ]}
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div variants={itemVariants}>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold">Featured Projects</h2>
                    <div className="ml-4">
                        <input
                            type="search"
                            placeholder="Search projects..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
                        />
                    </div>
                </div>
                <ProjectGrid projects={projects} onOpenDemo={handleOpenDemo} query={query} />
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Interactive Terminal</h3>
                <CommandTerminal />
            </motion.div>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={handleCloseDemo} />
            )}
        </motion.div>
    );
};

export default Home;