'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {

    static associate(models) {
      // define association here
      City.hasMany(models.Airport, { as: "airport", foreignKey: 'cityId', onDelete: "CASCADE" })
    }
  }
  City.init({
    cityName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'City',
  });

  return City;
};