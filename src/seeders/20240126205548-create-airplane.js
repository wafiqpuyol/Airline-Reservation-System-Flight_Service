'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
      {
        modelName: 'Airbus A330',
        capacity: 145,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelName: 'Boeing 717',
        capacity: 145,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelName: 'F-102A Delta Dagger',
        capacity: 145,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelName: 'B-25J Mitchell',
        capacity: 145,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelName: 'C-54G Skymaster',
        capacity: 145,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelName: 'VC-140B JetStar',
        capacity: 145,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelName: 'T-39A Sabreliner',
        capacity: 145,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
