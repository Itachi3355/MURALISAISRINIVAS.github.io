import React from 'react';
import ProjectGrid from '../components/projects/ProjectGrid';
import FeaturedProject from '../components/projects/FeaturedProject';
import useProjects from '../hooks/useProjects';

const Projects = () => {
    const { projects, featuredProject } = useProjects();

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            {featuredProject && <FeaturedProject project={featuredProject} />}
            <ProjectGrid projects={projects} />
        </div>
    );
};

export default Projects;