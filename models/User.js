const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },
    profile: {
        type: DataTypes.TEXT('medium'),
        allowNull: true
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
{
    hooks: {
        async beforeCreate(userData) {
            newUserData.password = await bcrypt.hash(userData.password, 10);
            return newUserData;
        },
        async beforeUpdate(userData) {
            updatedUserData.password = await bcrypt.hash(userData.password, 10)
            return updatedUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
}
);

module.exports = User;