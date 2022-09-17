const User = require("./User");
const Vote = require('./Vote');
const Comment = require('./Comment');

User.hasMany(Comment, {
    foreignKey: 'recipient_id'
});

/*User.hasMany(Vote, {
    foreignKey: 'user_id'
});*/

User.belongsToMany(User, {
    as: 'voter', 
    through: Vote,
    foreignKey: 'recipient_id',
    onDelete: 'CASCADE'
});

User.belongsToMany(User, {
    as: 'recipient', 
    through: Vote,
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

/*Vote.belongsTo(User, {
    foreignKey: 'user_id'
});*/

Comment.belongsTo(User, {
    foreignKey: 'recipient_id'
});

module.exports = { User, Vote, Comment };