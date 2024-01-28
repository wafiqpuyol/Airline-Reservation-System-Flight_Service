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
    await queryInterface.bulkInsert('Airports', [
      {
        airportName: 'Heathrow Airport',
        iataCode: "LHR",
        address: 'Hillingdon',
        category: "International",
        longitude: 25.0122,
        latitude: 1.9652,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airportName: 'Stansted Airport',
        iataCode: "STN",
        address: 'Manchester',
        category: "International",
        longitude: 25.0122,
        latitude: 1.9652,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airportName: 'Gatwick Airport',
        iataCode: "LGW",
        address: 'Birmingham',
        category: "International",
        longitude: 25.0122,
        latitude: 1.9652,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airportName: 'Luton Airport',
        iataCode: "LTN",
        address: 'Liverpool',
        category: "International",
        longitude: 25.0122,
        latitude: 1.9652,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airportName: 'Southend Airport',
        iataCode: "SEN",
        address: 'Leeds',
        category: "International",
        longitude: 25.0122,
        latitude: 1.9652,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airportName: 'City Airport',
        iataCode: "LCY",
        address: 'Newham',
        category: "International",
        longitude: 25.0122,
        latitude: 1.9652,
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
