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
  console.log(req.session.user_id)
  try {
    const dbUserData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Project,
          attributes: ['name', 'description'],
        },
      ],
    });
    console.log(dbUserData);
    const users = dbUserData.map((project) =>
      project.get({ plain: true })
    );
    // console.log(req.session);
    console.log(users);
    // console.log("req.sessionID", req.sessionID)
    // res.render('homepage', {
    //   projects,
    // });
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
