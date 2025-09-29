import { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = projectsData; // static local data
                // by default hide projects marked hidden
                setProjects(response.filter((p) => !p.hidden));
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();

        const handleOpenSecret = () => {
            try {
                // reveal hidden projects
                const all = projectsData;
                setProjects(all);
            } catch (err) {
                // ignore
            }
        };

        window.addEventListener('portfolio:open-secret', handleOpenSecret);
        return () => window.removeEventListener('portfolio:open-secret', handleOpenSecret);
    }, []);

    return { projects, loading, error };
};

export default useProjects;