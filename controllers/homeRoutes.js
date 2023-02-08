const router = require('express').Router();
const { Project, User } = require('../models/index');

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

router.get('/profile', async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Project,
          attributes: ['name', 'description', 'needed_funding', 'date_created'],
        },
      ],
    });
    const projects = dbUserData.dataValues.projects.map((project) =>
      project.get({ plain: true })
    );
    const user = dbUserData.dataValues;
    console.log(projects);
    console.log(user);
    res.render('profile', {
      user,
      projects
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const dbProjectData = await Project.findByPk(req.params.id);
    const project = dbProjectData.get({plain: true});
    console.log(project)
    res.render('project', {
      project,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


module.exports = router;
