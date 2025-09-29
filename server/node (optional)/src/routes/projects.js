const express = require('express');
const router = express.Router();
const projectsData = require('../../data/projects.json');

// GET route to fetch all projects
router.get('/', (req, res) => {
    res.json(projectsData);
});

// GET route to fetch a specific project by ID
router.get('/:id', (req, res) => {
    const project = projectsData.find(p => p.id === parseInt(req.params.id));
    if (!project) return res.status(404).send('Project not found');
    res.json(project);
});

module.exports = router;