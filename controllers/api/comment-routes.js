const router = require('express').Router();
const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/connection');
const { Comment, User } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', async (req, res) => {
  try {
    const comment = await sequelize.query(`SELECT comment_text, username, image_url, created_at FROM comment LEFT JOIN user ON comment.author_id = user.id WHERE recipient_id = ? ORDER BY created_at DESC`, {
      replacements: [req.params.id],
      type: QueryTypes.SELECT
    });
    res.json(comment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router