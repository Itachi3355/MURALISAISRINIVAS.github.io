import axios from 'axios';

const API_URL = 'http://localhost:5000/api/projects'; // Adjust the URL based on your backend setup

export const fetchProjects = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};