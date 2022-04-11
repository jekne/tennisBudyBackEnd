const { Router } = require("express");
const router = new Router();
const User = require("../models/").user;
const Level = require("../models").level;

router.get("/", async (req, res, next) => {
  try {
    const levels = await Level.findAll();
    if (!levels) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({ message: "All the levels!!!", levels: levels });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.put("/update/:id/:levelId", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log("id", id);

    const levelId = parseInt(req.params.levelId);

    const users = await User.findByPk(id);

    if (!users) {
      res.status(404).send(`The id provided ${id}, was not founded`);
    }

    const updateUser = await users.update({
      levelId: levelId,
    });

    res.status(200).send({
      message: `This is the User correspondent a id ${id},  His level was update`,
      updateUser: updateUser,
    });
  } catch (e) {
    console.log(e);
  }
  next();
});

module.exports = router;
