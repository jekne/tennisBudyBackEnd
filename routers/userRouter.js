const { Router } = require("express");
const router = new Router();
const User = require("../models/").user;
const Club = require("../models/").club;
const Level = require("../models").level;

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

//UPDATE USER
//INCREASE THE NUMBER OF HEARTS
//http PATCH :4000/users/1  name=johann,password=1234,age=34,description=good,email=joj,gender=true,imageUrl=mnice,levelId=7,location=amsterdam,telephone=302

router.patch("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log("id", id);

    const {
      name,
      //   age,
      description,
      //   email,
      //   gender,
      //   imageUrl,
      //   levelId,
      //   location,
      //   telephone,
      //   password,
    } = req.body;

    console.log("name", name);
    const users = await User.findByPk(id);
    // console.log("users found", users);

    if (!users) {
      res.status(404).send(`The id provided ${id}, was not founded`);
    }

    const updateUser = await users.update({
      name: name,
      //   age: age,
      description: description,
      //   email: email,
      //   gender: gender,
      //   imageUrl: imageUrl,
      //   levelId: levelId,
      //   location: location,
      //   telephone: telephone,
      //   password: password,
    });

    // const {
    //   ,
    //   ,
    //   ,
    //   ,
    //   ,
    //   ,
    //   ,
    //   ,
    //   ,
    // } = updateUser;
    // console.log("this update user", updateUser);
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
