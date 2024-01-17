'use strict';
/** @type {import('sequelize-cli').Migration} */

const { Enums: { SEAT_TYPE } } = require('../utils/common')
const { BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY } = SEAT_TYPE

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Airplanes",
          key: "id"
        },
        allowNull: false
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      col: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM,
        values: [BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY],
        defaultValue: ECONOMY,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};