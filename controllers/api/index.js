const router = require('express').Router();
<<<<<<< HEAD
<<<<<<< HEAD

const userRoutes = require('./user-routes');
const postRoutes = require('./vote-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', voteRoutes);
router.use('/posts', commentRoutes);

module.exports = router;
=======
=======
>>>>>>> a8b4d23e93f4241b0a923d783939b052a5fa8047
const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

<<<<<<< HEAD
module.exports = router;
>>>>>>> e7471653bd8cc634509dcd1d8882b21a1b39f4e6
=======
module.exports = router;
>>>>>>> a8b4d23e93f4241b0a923d783939b052a5fa8047
