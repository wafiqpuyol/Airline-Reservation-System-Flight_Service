'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {

    static associate(models) {
      // define association here
      Airplane.hasMany(models.Flight, { as: "Flights", foreignKey: "airplane_id", onDelete: "CASCADE" })
      Airplane.hasMany(models.Seat, { foreignKey: "airplane_id", onDelete: "CASCADE" })
    }
  }
  Airplane.init({
    model_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};