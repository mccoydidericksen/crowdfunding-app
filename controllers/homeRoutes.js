const router = require('express').Router();
const { Project } = require('../models/index');

router.get('/', async (req, res) => {
  try {
    const dbProjectsData = await Project.findAll();
    const projects = dbProjectsData.map((project) => project.get({plain: true}))
    res.render('homepage', {
      projects,
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
