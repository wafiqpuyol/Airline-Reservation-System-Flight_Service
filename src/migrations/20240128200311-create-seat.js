'use strict';
/** @type {import('sequelize-cli').Migration} */

const { Enums: { SEAT_TYPE, AVAILABILITY } } = require('../utils/common')
const { BUSINESS, FIRST, ECONOMY } = SEAT_TYPE;
const { AVAILABLE, BOOKED } = AVAILABILITY;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Airplanes",
          key: "id"
        },
        allowNull: false
      },
      cabin: {
        type: Sequelize.ENUM,
        values: [BUSINESS, FIRST, ECONOMY],
        defaultValue: ECONOMY,
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      col: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      seatAvailability: {
        type: Sequelize.ENUM,
        values: [AVAILABLE, BOOKED],
        defaultValue: AVAILABLE,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Seats');
  }
};