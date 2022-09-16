const { Vote } = require('../models');

const voteData = [
    {
        voter_id: 1,
        recipient_id: 3,
    },
    {
        voter_id: 2,
        recipient_id: 3,
    },
    {
        voter_id: 3,
        recipient_id: 4,
    },
    {
        voter_id: 4,
        recipient_id: 2,
    },
    {
        voter_id: 5,
        recipient_id: 1,
    },
    {
        voter_id: 6,
        recipient_id: 7,
    },
    {
        voter_id: 7,
        recipient_id: 5,
    },
    {
        voter_id: 8,
        recipient_id: 7,
    },
    {
        voter_id: 9,
        recipient_id: 6,
    },
    {
        voter_id: 10,
        recipient_id: 5,
    },
];

const seedVotes = () => Vote.bulkCreate(voteData);

module.exports = seedVotes;