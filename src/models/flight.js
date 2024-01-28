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
      Flight.belongsTo(models.Airport, { as: "ArrivalAirport", foreignKey: 'arrivalAirportCode', onDelete: "CASCADE" })
      Flight.belongsTo(models.Airport, { as: "DepartureAirport", foreignKey: 'departureAirportCode', onDelete: "CASCADE" })
      Flight.belongsTo(models.Airplane, { as: "AirplaneDetail", foreignKey: 'airplaneId', onDelete: "CASCADE" })
    }
  }
  Flight.init({
    flightName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    departureAirportCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalAirportCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    arrivalTime: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    departureTime: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    oneWay: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};