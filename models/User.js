const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        //table column definitions
        id: {
            //use Sequelize DataTypes object for type of data
            type: DataTypes.INTEGER,
            //not null
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        //table config options go here
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        //pass in sequelize connection
        sequelize,
        //don't auto create timestamp fields
        timestamps: false,
        //don't pluralize db table name
        freezeTableName: true,
        //use underscores instead of camelcase
        underscored: true,
        //model name stays lowercase in db
        modelName: 'user'
    }
);

module.exports = User;