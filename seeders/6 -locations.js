"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "locations",
      [
        {
          city: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amstelveen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amstelveen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amstelveen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amstelveen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amstelveen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amstelveen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
   */

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("locations", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
