'use strict';
const { Model } = require('sequelize');
const { Enums: { SEAT_TYPE, AVAILABILITY } } = require('../utils/common')
const { BUSINESS, FIRST, ECONOMY } = SEAT_TYPE
const { AVAILABLE, BOOKED } = AVAILABILITY


module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      // define association here
      Seat.belongsTo(models.Airplane, { as: 'seat', foreignKey: "airplaneId", onDelete: 'CASCADE' })
    }
  }
  Seat.init({
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cabin: {
      type: DataTypes.ENUM,
      values: [BUSINESS, FIRST, ECONOMY],
      defaultValue: ECONOMY,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    row: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    col: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    seatAvailability: {
      type: DataTypes.ENUM,
      values: [AVAILABLE, BOOKED],
      defaultValue: AVAILABLE,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};