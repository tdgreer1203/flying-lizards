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

module.exports = router;