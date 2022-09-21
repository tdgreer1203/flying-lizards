const { Vote } = require('../models');

const voteData = [
    {
        user_id: 1,
        recipient_id: 3,
    },
    {
        user_id: 2,
        recipient_id: 3,
    },
    {
        user_id: 3,
        recipient_id: 4,
    },
    {
        user_id: 4,
        recipient_id: 2,
    },
    {
        user_id: 5,
        recipient_id: 1,
    },
    {
        user_id: 6,
        recipient_id: 7,
    },
    {
        user_id: 7,
        recipient_id: 5,
    },
    {
        user_id: 8,
        recipient_id: 7,
    },
    {
        user_id: 9,
        recipient_id: 6,
    },
    {
        user_id: 10,
        recipient_id: 5,
    },
];

const seedVotes = () => Vote.bulkCreate(voteData);

module.exports = seedVotes;