const User = require("./User");
const Vote = require('./Vote');
const Comment = require('./Comment');

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'recipient_id'
});

module.exports = { User, Vote, Comment };