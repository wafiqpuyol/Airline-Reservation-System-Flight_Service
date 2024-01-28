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
    await queryInterface.bulkInsert('Airlines', [
      {
        name: "British Airways",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Virgin Atlantic",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "easyJet",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ryanair",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Qatar Airways",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Emirates",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lufthansa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Air France",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "KLM Royal Dutch Airlines",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Turkish Airlines",
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
    await queryInterface.bulkDelete('Airlines', null, {});
  }
};
