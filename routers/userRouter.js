const { Router } = require("express");
const router = new Router();
const User = require("../models/").user;
const Club = require("../models/").club;
const Level = require("../models").level;
const Match = require("../models").match;
const Sets = require("../models").set;
const authMiddleware = require("../auth/middleware");

//GET ALL THE USERS
//http -v GET :4000/users

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
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

//GET USERS BY ID
//http -v GET :4000/users/1

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log("id", id);

    const userById = await User.findByPk(id, {
      include: { model: Match, include: { model: Sets } },
    });
    if (!userById) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({
        message: "All the users with matches!!!",
        userById: userById,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//UPDATE USER

//http PUT :4000/users/1  name=johann,password=1234,age=34,description=good,email=joj,gender=true,imageUrl=mnice,levelId=7,location=amsterdam,telephone=302

router.put("/:id", async (req, res, next) => {
  try {
    // HERE WE GET OUT THE ID OF THE USER THAT MADE THE TOKEN
    // const logged_in_user = req.user.id;

    // console.log("THIS IS THE LOGGED_IN_USER", logged_in_user);
    // const user = await User.findByPk(logged_in_user);

    // if (!user) {
    //   res.status(404).send("The user was not found");
    // } else {
    //   res.status(200).send({ message: "authorized", user: user });

    const id = parseInt(req.params.id);
    console.log("id", id);

    const {
      name,
      age,
      description,
      email,
      gender,
      imageUrl,
      levelId,
      location,
      telephone,
      password,
    } = req.body;

    console.log("name", name);
    const users = await User.findByPk(id);
    // console.log("users found", users);

    if (!users) {
      res.status(404).send(`The id provided ${id}, was not founded`);
    }

    const updateUser = await users.update({
      name: name,
      age: age,
      description: description,
      email: email,
      gender: gender,
      imageUrl: imageUrl,
      levelId: levelId,
      location: location,
      telephone: telephone,
      password: password,
    });

    res.status(200).send({
      message: `This is the User correspondent a id ${id},  was update`,
      updateUser: updateUser,
    });
  } catch (e) {
    console.log(e);
  }
  next();
});

module.exports = router;
