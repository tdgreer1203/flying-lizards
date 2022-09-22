const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Vote } = require('../models');
const { QueryTypes } = require('sequelize');

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
      attributes: { exclude: ['password'] }
    });
    const comments = await sequelize.query(`SELECT comment.author_id, comment_text, username, image_url, created_at FROM comment LEFT JOIN user ON comment.author_id = user.id WHERE recipient_id = ? ORDER BY created_at DESC`, {
      replacements: [req.params.id],
      type: QueryTypes.SELECT
    }); 
    const profile = user.get({ plain: true });
    res.render('profile', { profile, comments });
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

router.get('/userscroll', (req, res) => {
  User.findAll({
    attributes: ['id', 'name', 'image_url', 'age']
}).then(dbUserData => {
  const users = dbUserData.map(user => user.get({ plain: true }));
  console.log(users);
  res.render('userscroll', { users });
  });
});

module.exports = router;