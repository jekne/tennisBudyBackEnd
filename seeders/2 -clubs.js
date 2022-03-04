"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "clubs",
      [
        {
          name: "Amstelpark Tennisclub ",
          webSite: "https://www.amstelpark.nl/",
          telephone: "020-301-0715",
          email: "tennis@amstelpark.nl",
          adress: "Koenenkade 8",
          zipCode: "1081 KH Amsterdam",
          rateClub: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tennis sloterplas",
          webSite: "https://www.tennisparksloterplas.nl/",
          telephone: "020-611-6363",
          email: "info@tennisparksloterplas.nl",
          adress: "August Vermeylenstraat 50",
          zipCode: "1064 AB Amsterdam",
          rateClub: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tennis Club Amsterdam",
          webSite: "https://www.tcamsterdam.net/",
          telephone: "020-643-2828",
          email: "info@tcamsterdam.net",
          adress: "Nieuwe Kalfjeslaan 19a",
          zipCode: "1182 AA Amstelveen",
          rateClub: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tennis Park Buitenveldert",
          webSite: "https://tennisparkbuitenveldert.nl/",
          telephone: "020–642-9641",
          email: "rental@tennisparkbuitenveldert.nl",
          adress: "Van der Boechorststraat 38",
          zipCode: "1081BT Amsterdam",
          rateClub: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vondelpark Wintertennis",
          webSite: "https://vondelparkwintertennis.nl/",
          telephone: "020–612-7098",
          email: "nfo@vondelparkwintertennis.nl",
          adress: "Kattenlaan 13",
          zipCode: "1054KA Amsterdam",
          rateClub: "5",
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
    await queryInterface.bulkDelete("clubs", null, {});
  },
};
