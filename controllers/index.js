const router = require('express').Router();

const apiRoutes = require('./api');

<<<<<<< HEAD
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
=======
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
>>>>>>> e7471653bd8cc634509dcd1d8882b21a1b39f4e6
});

module.exports = router;