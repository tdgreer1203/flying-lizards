const router = require('express').Router();

const apiRoutes = require('./api');

<<<<<<< HEAD
<<<<<<< HEAD
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
=======
=======
>>>>>>> a8b4d23e93f4241b0a923d783939b052a5fa8047
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
<<<<<<< HEAD
>>>>>>> e7471653bd8cc634509dcd1d8882b21a1b39f4e6
=======
>>>>>>> a8b4d23e93f4241b0a923d783939b052a5fa8047
});

module.exports = router;