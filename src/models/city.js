'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {

    static associate(models) {
      // define association here
      City.hasMany(models.Airport, { as: "CityDetail", foreignKey: 'address', onDelete: "CASCADE" })
    }
  }
  City.init({
    airportCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    cityName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    regionCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    countryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};