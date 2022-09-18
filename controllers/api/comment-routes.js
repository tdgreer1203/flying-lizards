const router = require('express').Router();
const { Comment, User } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Comment.findAll({
      where: {
        recipient_id: req.params.id
      },
      order: [['created_at', 'DESC']],
      include: [{
        model: User,
        attributes: ['id', 'username', 'image_url']
      }]
    }).then(dbCommentData => {
      if(!dbCommentData) {
        res.status(404).json({ message: 'No comments to show just yet.' });
        return;
      }
      res.json(dbCommentData);
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router