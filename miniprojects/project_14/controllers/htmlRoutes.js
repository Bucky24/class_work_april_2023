const router = require("express").Router();

const { Project } = require('../models');

router.get('/', async (req, res) => {
    try {
        const projects = await Project.findAll();

        const plainProjects = projects.map((project) => {
            return project.get({ plain: true });
        });

        res.render('home', {
            projects: plainProjects,
            logged_in: req.session.logged_in,
        });
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
});

router.get('/project/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Project.findByPk(id);

        const plainProject = project.get({ plain: true });

        res.render('project', plainProject);
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
});

router.get("/login", (req, res) => {
    res.render("login");
});

module.exports = router;