'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flight.belongsTo(models.Airport, { as: "ArrivalAirport", foreignKey: 'arrival_airport_id', onDelete: "CASCADE" })
      Flight.belongsTo(models.Airport, { as: "DepartureAirport", foreignKey: 'departure_airport_id', onDelete: "CASCADE" })
      Flight.belongsTo(models.Airplane, { as: "ChoduAirplanes", foreignKey: 'airplane_id', onDelete: "CASCADE" })
    }
  }
  Flight.init({
    flight_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    airplane_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    airport_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    departure_airport_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    arrival_airport_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    boarding_gate: {
      type: DataTypes.STRING
    },
    total_seats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    arrival_time: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    departure_time: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};