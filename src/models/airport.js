'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Airport.belongsTo(models.City, { foreignKey: 'cityId', onDelete: "CASCADE" })
      Airport.hasMany(models.Flight, { foreignKey: 'arrival_airport_id', targetKye: "arrival_airport_id", onDelete: "CASCADE" })
      Airport.hasMany(models.Flight, { foreignKey: 'departure_airport_id', targetKye: "departure_airport_id", onDelete: "CASCADE" })
    }
  }
  Airport.init({
    airportName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
      unique: true,
    },
    cityId: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Airport',
  });

  return Airport;
};