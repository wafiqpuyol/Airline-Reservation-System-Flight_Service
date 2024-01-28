'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Airline extends Model {
    static associate(models) {
      Airline.hasMany(models.Flight, { as: 'Airline', foreignKey: "airlineId", onDelete: "CASCADE" })
    }
  }
  Airline.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Airline',
  });
  return Airline;
};