const { Router } = require("express");
const router = new Router();
const User = require("../models/").user;
const Club = require("../models/").club;
const Level = require("../models").level;

//GET ALL THE LEVELS
//http -v GET :4000/levels

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

module.exports = router;
