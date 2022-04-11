"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Serena Willians",
          email: "serena@serena.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-jOTxYCLezEDOXiQtV4SCSQ59lhuWXUXng&usqp=CAU",
          gender: false,
          age: 40,
          telephone: "3198289",
          locationId: 3,
          levelId: 13,
          description: "hey lets play tennis!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria Sharapova",
          email: "sharapova@Sharapova.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://tennishead.net/wp-content/uploads/2020/08/Maria-Sharapova-celebrating.jpg.webp",
          gender: false,
          age: 34,
          telephone: "3198289",
          locationId: 5,
          levelId: 13,
          description: "Waiting for a match!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Roger Federer",
          email: "r@r.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpIFlFJmbFkMs-hsuMSdec7AEy9Rd_1ON4Q&usqp=CAU",
          gender: true,
          age: 40,
          telephone: "35890204",
          locationId: 1,
          levelId: 13,
          description: "Always willing to play!",
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
          locationId: 8,
          levelId: 12,
          description: "Looking for a regular player!",
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
          locationId: 4,
          levelId: 13,
          description: "I want play every morning!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Novak Djokovic",
          email: "novak@novak.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://www.atptour.com/-/media/tennis/players/gladiator/2019/djokovic_full_ao19.png",

          gender: true,
          age: 34,
          telephone: "35890204",
          locationId: 3,
          levelId: 4,
          description: "I like to play during the night!",
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
          locationId: 2,
          levelId: 11,
          description: "We always can find a time to play!",
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
          locationId: 1,
          levelId: 9,
          description: "During the weekends i am always on the court!",
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
          locationId: 5,
          description: "Lets Hit this afternon!",
          levelId: 7,
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
          locationId: 1,
          levelId: 7,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iga Swiatek ",
          email: "iga@iga.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://photoresources.wtatennis.com/photo-resources/2021/09/20/9cdb0ca8-91a7-4d23-90ac-9ee062d5e179/Swiatek_Hero-Smile.png?width=1900",
          gender: false,
          age: 20,
          telephone: "3478910",
          locationId: 2,
          levelId: 3,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barbora Krejcikova ",
          email: "bar@bar.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://photoresources.wtatennis.com/photo-resources/2020/09/30/51357b9f-48f7-48ab-948a-f86e07e5dae6/Krejcikova_Hero-Smile.png?width=1140",
          gender: false,
          age: 26,
          telephone: "34321910",
          locationId: 3,
          levelId: 7,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paula Badosa ",
          email: "pau@pau.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://photoresources.wtatennis.com/photo-resources/2021/11/12/44059ca0-dd8e-4b29-8995-ff3d72051e34/Badosa_crop.jpg?width=328&height=438",
          gender: false,
          age: 24,
          telephone: "3411910",
          locationId: 4,
          levelId: 13,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aryna Sabalenka ",
          email: "ari@ari.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://photoresources.wtatennis.com/photo-resources/2020/09/30/077d0d47-22d6-4efc-b3a9-e13ff64b0934/Sabalenka_Hero-Smile.png?width=1140",
          gender: false,
          age: 23,
          telephone: "341110",
          locationId: 5,
          levelId: 10,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria Sakkari ",
          email: "maria@maria.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://photoresources.wtatennis.com/photo-resources/2020/07/02/64a1e097-a3fd-4f3a-8dbd-353a3317aa3d/Sakkari_Hero-Smile.png?width=1140",
          gender: false,
          age: 26,
          telephone: "9134910",
          locationId: 4,
          levelId: 9,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anett Kontaveit",
          email: "anett@annet.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://photoresources.wtatennis.com/photo-resources/2020/09/30/86ebc6fb-2b6c-4f22-bdab-632c75febac9/Kontaveit_Hero-Smile.png?width=1140",
          gender: false,
          age: 26,
          telephone: "8774910",
          locationId: 1,
          levelId: 7,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karolina Pliskova",
          email: "karolina@karolina.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://photoresources.wtatennis.com/photo-resources/2020/09/30/d2107552-9555-4c17-9eab-6361b940905e/Pliskova_Hero-Smile.png?width=1140",
          gender: false,
          age: 30,
          telephone: "8774910",
          locationId: 2,
          levelId: 5,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Danielle Collins",
          email: "danielle@danielle.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://photoresources.wtatennis.com/photo-resources/2019/10/08/27707657-88c2-4c20-be31-e4bb9e4d2021/wtoRqbfx.png?width=1140",
          gender: false,
          age: 28,
          telephone: "879023",
          locationId: 8,
          levelId: 13,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ons Jabeur",
          email: "ons@ons.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://photoresources.wtatennis.com/photo-resources/2019/10/08/cd7419cc-a9a6-4215-ab9a-3709a5d49391/VbhVIRWm.png?width=1140",
          gender: false,
          age: 27,
          telephone: "8790923",
          locationId: 7,
          levelId: 11,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Garbine Murguruza",
          email: "garbine@garbine.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://photoresources.wtatennis.com/photo-resources/2020/09/30/58137bc5-55f4-44aa-9260-e9c39d644c36/Muguruza_Hero-Smile.png?width=1140",
          gender: false,
          age: 28,
          telephone: "120923",
          locationId: 6,
          levelId: 11,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jelena Ostapenko",
          email: "jelena@jelena.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://photoresources.wtatennis.com/photo-resources/2020/09/30/ea8d6745-d55a-46b8-871e-aa2e463ec822/Ostapenko_Hero-Smile.png?width=1140",
          gender: false,
          age: 24,
          telephone: "120923",
          locationId: 2,
          levelId: 7,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Matteo Berretini",
          email: "bere@bere.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://www.perfect-tennis.com/wp-content/uploads/2022/04/matteo-berrettini-racket-780x470.jpg.webp",
          gender: true,
          age: 25,
          telephone: "120923",
          locationId: 3,
          levelId: 1,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Reilly Opelka",
          email: "reilly@reilly.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://www.atptour.com/-/media/tennis/players/gladiator/2020/opelka_full_ao20.png",
          gender: true,
          age: 24,
          telephone: "120923",
          locationId: 2,
          levelId: 7,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Casper Ruud",
          email: "casper@casper.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://www.atptour.com/-/media/tennis/players/gladiator/2020/opelka_full_ao20.png",
          gender: true,
          age: 23,
          telephone: "120923",
          locationId: 3,
          levelId: 1,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alexander Zverev",
          email: "alexander@alexander.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://www.atptour.com/-/media/tennis/players/gladiator/2020/zverev_full_ao20.png",
          gender: true,
          age: 24,
          telephone: "120923",
          locationId: 1,
          levelId: 13,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
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
