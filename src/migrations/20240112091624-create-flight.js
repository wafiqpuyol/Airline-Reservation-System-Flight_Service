'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flight_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      airplane_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Airplanes',
          key: "id"
        },
        allowNull: false
      },
      airport_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      departure_airport_id: {
        type: Sequelize.STRING,
        references: {
          model: "Airports",
          key: "code"
        },
        allowNull: false,
      },
      arrival_airport_id: {
        type: Sequelize.STRING,
        references: {
          model: "Airports",
          key: "code"
        },
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      boarding_gate: {
        type: Sequelize.STRING
      },
      total_seats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      arrival_time: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      departure_time: {
        type: Sequelize.DATEONLY,
        allowNull: false
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
    await queryInterface.dropTable('Flights');
  }
};