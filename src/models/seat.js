'use strict';
const { Model } = require('sequelize');
const { Enums: { SEAT_TYPE } } = require('../utils/common')
const { BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY } = SEAT_TYPE

module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {

    static associate(models) {
      Seat.belongsTo(models.Airplane, { foreignKey: "airplaneId", onDelete: "CASCADE" })
    }
  }
  Seat.init({
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    row: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    col: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: [BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY],
      defaultValue: ECONOMY,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};