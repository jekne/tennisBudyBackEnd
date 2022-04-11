const { Router } = require("express");
const router = new Router();
const Location = require("../models").location;

router.get("/", async (req, res, next) => {
  try {
    const locations = await Location.findAll();
    if (!locations) {
      res.status(404).send("Something went wrong!");
    } else {
      res
        .status(200)
        .send({ message: "All the locations!!!", locations: locations });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
