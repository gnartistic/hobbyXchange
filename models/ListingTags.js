// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// const Category = require('./Category');

// class ListingTags extends Model {}

// ListingTags.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         listing_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//         tag_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         }
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'listingTags'
//     }
// );

// module.exports = Category;