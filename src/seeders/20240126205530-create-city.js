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
    await queryInterface.bulkInsert('Cities', [
      {
        airportCode: "LHR",
        cityName: "Hillingdon",
        regionCode: "ENG",
        countryName: "England",
        countryCode: "GB",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airportCode: "STN",
        cityName: "Manchester",
        regionCode: "ENG",
        countryName: "England",
        countryCode: "GB",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airportCode: "LGW",
        cityName: "Birmingham",
        regionCode: "ENG",
        countryName: "England",
        countryCode: "GB",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airportCode: "LTN",
        cityName: "Liverpool",
        regionCode: "ENG",
        countryName: "England",
        countryCode: "GB",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airportCode: "LCY",
        cityName: "Newham",
        regionCode: "ENG",
        countryName: "England",
        countryCode: "GB",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airportCode: "SEN",
        cityName: "Leeds",
        regionCode: "ENG",
        countryName: "England",
        countryCode: "GB",
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
