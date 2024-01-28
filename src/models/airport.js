'use strict';
const { Model } = require('sequelize');

const { Enums: { AIRPORT_TYPES } } = require('../utils/common')
const { DOMESTIC, INTERNATIONAL } = AIRPORT_TYPES


module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, { as: "CityDetail", foreignKey: 'address', onDelete: "CASCADE" })
      Airport.hasMany(models.Flight, { as: "ArrivalAirport", foreignKey: 'arrivalAirportCode', onDelete: "CASCADE" })
      Airport.hasMany(models.Flight, { as: "DepartureAirport", foreignKey: 'departureAirportCode', onDelete: "CASCADE" })

    }
  }
  Airport.init({
    airportName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    iataCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM,
      values: [DOMESTIC, INTERNATIONAL],
      defaultValue: INTERNATIONAL,
      allowNull: false
    },
    longitude: {
      type: DataTypes.DOUBLE,
    },
    latitude: {
      type: DataTypes.DOUBLE,
    },
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};