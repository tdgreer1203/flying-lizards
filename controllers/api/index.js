const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./vote-routes');

router.use('/users', userRoutes);
router.use('/posts', voteRoutes);

module.exports = router;
