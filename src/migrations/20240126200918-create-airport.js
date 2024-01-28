'use strict';
/** @type {import('sequelize-cli').Migration} */

const { Enums: { AIRPORT_TYPES } } = require('../utils/common')
const { DOMESTIC, INTERNATIONAL } = AIRPORT_TYPES


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airportName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      iataCode: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: Sequelize.STRING,
        references: {
          model: "Cities",
          key: "cityName"
        },
        allowNull: false
      },
      category: {
        type: Sequelize.ENUM,
        values: [DOMESTIC, INTERNATIONAL],
        defaultValue: INTERNATIONAL,
        allowNull: false
      },
      longitude: {
        type: Sequelize.DOUBLE
      },
      latitude: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airports');
  }
};