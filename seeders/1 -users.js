"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          imageUrl: "some picture",
          gender: true,
          age: 29,
          telephone: "3198289",
          location: "Amsterdam",
          levelId: "1.5",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          imageUrl: "some picture",
          gender: true,
          age: 29,
          telephone: "3198289",
          location: "Amsterdam",
          levelId: "1.5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Roger Federer",
          email: "r@r.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://www.demorgen.be/sport/roger-federer-ik-zou-verbaasd-zijn-als-ik-wimbledon-haal~b28b7948/?referrer=https%3A%2F%2Fwww.google.com%2F#&gid=1&pid=1",
          gender: true,
          age: 40,
          telephone: "35890204",
          location: "Switzerland",
          levelId: "7.0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rafael Nadal",
          email: "rafa@rafa.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://cdn-japantimes.com/wp-content/uploads/2022/02/np_file_143928.jpeg",
          gender: true,
          age: 35,
          telephone: "35890204",
          location: "Spain",
          levelId: "7.0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andy Murray",
          email: "andy@andy.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://www.insidesport.in/wp-content/uploads/2022/02/Andy-Murray.jpg?w=1024&h=1&crop=1",

          gender: true,
          age: 34,
          telephone: "35890204",
          location: "England",
          levelId: "7.0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Novak Djokovic",
          email: "novak@novak.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://www.ad.nl/tennis/djokovic-door-naar-kwartfinales-in-dubai-behoud-van-koppositie-op-atp-ranking-blijft-in-zicht~af2977b9/213059346/",

          gender: true,
          age: 34,
          telephone: "35890204",
          location: "Serbian",
          levelId: "7.0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stefanos Tsitsipas",
          email: "stefanos@stefanos.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://www.tennisworldusa.org/imgb/113270/stefanos-tsitsipas-reacts-to-surviving-laslo-djere-challenge-in-tight-acapulco-opener.jpg",

          gender: true,
          age: 23,
          telephone: "35890204",
          location: "Greek",
          levelId: "7.0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Daniil Medvedev",
          email: "medvedev@medvedev.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://tennishead.net/wp-content/uploads/2022/02/Medvedev-number-one.jpeg",

          gender: true,
          age: 26,
          telephone: "35890204",
          location: "Russian",
          levelId: "7.0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andrey Rublev",
          email: "andrey@andrey.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://prod-accessonline-be.s3-us-west-2.amazonaws.com/uploads/2022/02/AndreyRublev022822.jpg",

          gender: true,
          age: 24,
          telephone: "35890204",
          location: "Russian",
          levelId: "7.0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dominic Thiem",
          email: "dominic@dominic.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://image-cdn.essentiallysports.com/wp-content/uploads/20210210153717/2021-02-08T055434Z_1695155671_UP1EH280GEY10_RTRMADP_3_TENNIS-AUSOPEN.jpg?width=900",
          gender: true,
          age: 28,
          telephone: "35890204",
          location: "Austrian",
          levelId: "7.0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
