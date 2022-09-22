const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Vote } = require('../models');

router.get('/', (req, res) => {
  User.findAll({
    attributes: [
      'id',
      'name',
      'breed',
      'age',
      'profile',
      'image_url'
    ]
  })
  .then(dbUserData => {
    const users = dbUserData.map(user => user.get({ plain: true }));
    res.render('homepage', { users });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/profile/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
        include: [
            {
                model: Comment, 
                attributes: ['comment_text', 'author_id', 'createdAt'],
                order: [['createdAt', 'DESC']],
                include: [
                  { 
                    model: User,
                    as: 'user'
                  }
                ]
            }
        ]
    });
    const profile = user.get({ plain: true });
    console.log(profile);
    res.render('profile', { profile });
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

module.exports = router;