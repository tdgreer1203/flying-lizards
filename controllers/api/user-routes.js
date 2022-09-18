const router = require('express').Router();
const { json } = require('sequelize');
const { User, Comment, Vote } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password']}
    }).then(dbUserData => res.json(dbUserData)).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: [
                {
                    model: Comment, 
                    attributes: ['comment_text', 'author_id']
                },
                {
                    model: User,
                    attributes: ['name', 'image_url'],
                    through: Vote,
                    as: 'recipient'
                }
            ]
        })
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;