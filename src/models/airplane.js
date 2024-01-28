'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airplane.hasMany(models.Flight, { as: "AirplaneDetail", foreignKey: "airplaneId", onDelete: "CASCADE" })
      Airplane.hasMany(models.Seat, { as: 'Seat', foreignKey: "airplaneId", onDelete: "CASCADE" })

    }
  }
  Airplane.init({
    modelName: { type: DataTypes.STRING, allowNull: false },
    capacity: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};