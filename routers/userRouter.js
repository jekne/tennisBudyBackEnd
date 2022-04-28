const { Router } = require("express");
const router = new Router();
const User = require("../models/").user;
const Level = require("../models").level;
const Match = require("../models").match;
const Sets = require("../models").set;
const Location = require("../models").location;
const authMiddleware = require("../auth/middleware");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [{ model: Location }, { model: Level }],
    });
    if (!users) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({ message: "All the users!!!", users: users });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/location", async (req, res, next) => {
  try {
    const usersLocation = await User.findAll({
      include: {
        model: Location,
      },
    });
    if (!usersLocation) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({
        message: "All the usersLocation!!!",
        usersLocation: usersLocation,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log("id", id);

    const userById = await User.findByPk(id, {
      include: {
        model: Match,
        include: Sets,
      },
    });
    if (!userById) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({
        message: "All the users with matches and Sets!!!",
        userById: userById,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.put("/update/:id", authMiddleware, async (req, res, next) => {
  try {
    const logged_in_user = req.user.id;

    console.log("THIS IS THE LOGGED_IN_USER", logged_in_user);
    const user = await User.findByPk(logged_in_user);

    if (!user) {
      res.status(404).send("The user was not found");
    } else {
      res.status(200).send({ message: "authorized", user: user });

      const id = parseInt(req.params.id);
      console.log("id", id);
      const {
        name,
        age,
        description,
        email,
        gender,
        imageUrl,
        location,
        telephone,
        password,
      } = req.body;

      const users = await User.findByPk(id);

      if (!users) {
        res.status(404).send(`The id provided ${id}, was not founded`);
      }

      await users.update({
        name: !name ? users.name : name,
        age: !age ? users.age : age,
        description: !description ? users.description : description,
        email: !email ? users.email : email,
        gender: gender,
        imageUrl: !imageUrl ? users.imageUrl : imageUrl,
        password: !password ? users.password : password,
        telephone: !telephone ? users.telephone : telephone,
        locationId: !location ? users.location : location,
      });

      res.status(200).send({
        message: `This is the User correspondent a id ${id},  was update`,
        updateUser: users,
      });
    }
  } catch (e) {
    console.log(e);
  }
  next();
});

router.get("/details/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log("id", id);
    const users = await User.findByPk(id, {
      include: [{ model: Location }, { model: Level }],
    });
    if (!users) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({
        message: "Users by id with level and location!!!",
        users: users,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
