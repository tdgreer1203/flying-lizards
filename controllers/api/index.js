const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./vote-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', voteRoutes);
router.use('/posts', commentRoutes);

module.exports = router;
