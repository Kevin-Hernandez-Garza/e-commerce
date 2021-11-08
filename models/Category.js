// importing Model and DataTypes objects from Sequelize
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// creating Category model
class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING, 
      allowNull: false
    }
  },
  {
    // pass in our imported sequelize connection
    sequelize,
    // don't automatically create createdAt/updatedAt timestamps fields
    timestamps: false,
    // don't pluralize name of db table 
    freezeTableName: true,
    // use underscores instead of camel-casing 
    underscored: true,
    // our model stays lowercase in the db
    modelName: 'category',
  }
);

module.exports = Category;