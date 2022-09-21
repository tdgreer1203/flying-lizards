const User = require("./User");
const Vote = require('./Vote');
const Comment = require('./Comment');

User.hasMany(Comment, {
    foreignKey: 'recipient_id'
});

/*User.belongsTo(Comment, {
    foreignKey: 'user_id',
    as: 'receiver'
});*/

Comment.hasOne(User, {
    foreignKey: 'user_id',
    as: 'author'
});

/*Comment.belongsTo(User, {
    foreignKey: 'recipient_id',
    as: 'receiver'
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

module.exports = { User, Vote, Comment };