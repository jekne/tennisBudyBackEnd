const { Router } = require("express");
const router = new Router();
const User = require("../models/").user;
const Club = require("../models/").club;
const Level = require("../models").level;
const Match = require("../models").match;
const Sets = require("../models").set;
const Location = require("../models").location;
const UserMatches = require("../models").userMatches;
const Story = require("../models").story;
const authMiddleware = require("../auth/middleware");

//GET ALL THE STORIES
// http -v GET :4000/stories

router.get("/", async (req, res, next) => {
  try {
    const stories = await Story.findAll();
    if (!stories) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({ message: "All the stories!!!", stories: stories });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//GET ALL THE STORIES BY ID
// http -v GET :4000/stories/stories/3

router.get("/stories/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log("my id", id);
    const stories = await Story.findAll({
      where: { userId: id },
      include: { model: User, attributes: ["imageUrl", "name"] },
    });
    if (!stories) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({ message: "Stories by id!!!", stories: stories });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// create a new story:
//http -v POST :4000/stories/4  content=NiceNewContent

router.post("/:userId", async (req, res, next) => {
  try {
    // HERE WE GET OUT THE ID OF THE USER THAT MADE THE TOKEN
    // const logged_in_user = req.user.id;

    // console.log("THIS IS THE LOGGED_IN_USER", logged_in_user);
    // const user = await User.findByPk(logged_in_user);

    // if (!user) {
    //   res.status(404).send("The user was not found");
    // } else {
    //   res.status(200).send({ message: "authorized", user: user });
    const { content } = req.body;
    const params = req.params;
    const userId = parseInt(req.params.userId);
    console.log("my id", userId);

    if (!content) {
      res.status(404).send("Need to provided a content");
    }

    const checkuserId = await Story.findByPk(userId);
    if (!checkuserId) {
      res.status(404).send("This user id do not belong a valid story");
    }
    const createNewStory = await Story.create({
      content,

      userId,
    });

    if (!createNewStory) {
      res.status(404).send("Something get wrong");
    } else {
      res.status(200).send({
        message: `The new story with content ${content} was created`,
        createNewStory: createNewStory,
      });
    }
    // }
  } catch (e) {
    console.log(e);
  }
  next();
});

module.exports = router;
