const router = require('express').Router();
<<<<<<< HEAD

const userRoutes = require('./user-routes');
const postRoutes = require('./vote-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', voteRoutes);
router.use('/posts', commentRoutes);

module.exports = router;
=======
const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
>>>>>>> e7471653bd8cc634509dcd1d8882b21a1b39f4e6
