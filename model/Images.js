const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
    "images",
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        image_url: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: Sequelize.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: Sequelize.DATE,
        }
    }
);

//Image.hasOne(Gallery);