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
      flightName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Airplanes',
          key: "id"
        },
        allowNull: false
      },
      departureAirportCode: {
        type: Sequelize.STRING,
        references: {
          model: 'Airports',
          key: "iataCode"
        },
        allowNull: false
      },
      arrivalAirportCode: {
        type: Sequelize.STRING,
        references: {
          model: 'Airports',
          key: "iataCode"
        }
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      oneWay: {
        type: Sequelize.BOOLEAN,
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