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

router.get("/stories/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log("my id", id);
    const stories = await Story.findAll({
      where: { userId: id },
      include: { model: User, attributes: ["imageUrl", "name"] },
      order: [["updatedAt", "DESC"]],
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

router.post("/:userId", authMiddleware, async (req, res, next) => {
  try {
    const logged_in_user = req.user.id;
    const email = req.user.email;
    const imageUrl = req.user.imageUrl;
    const name = req.user.name;

    const user = await User.findByPk(logged_in_user);

    if (!user) {
      res.status(404).send("The user was not found");
    } else {
      const { content } = req.body;
      const userId = parseInt(req.params.userId);

      if (!content) {
        res.status(404).send("Need to provided a content");
      }

      const createNewStory = await Story.create({
        content,
        email,
        imageUrl,
        userId,
        name,
      });

      if (!createNewStory) {
        res.status(404).send("Something went wrong");
      } else {
        res.status(200).send({
          message: `The new story with content "${content}" was created`,
          newStory: createNewStory,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
  next();
});

module.exports = router;
