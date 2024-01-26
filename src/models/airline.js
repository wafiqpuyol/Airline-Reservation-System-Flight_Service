'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airline extends Model {
    static associate(models) {
      // define association here
    }
  }
  Airline.init({
    airlineId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    href: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Airline',
  });
  return Airline;
};