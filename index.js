const express = require("express");
const corsMiddleWare = require("cors");

const authMiddleWare = require("./auth/middleware");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const clubRouter = require("./routers/clubsRouter");
const levelRouter = require("./routers/levelRouter");
const userRouter = require("./routers/userRouter");

const storiesRouter = require("./routers/storiesRouter");
const locationsRouter = require("./routers/locationRouter");

const app = express();

app.use(corsMiddleWare());

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use("/auth", authRouter);
app.use("/clubs", clubRouter);
app.use("/levels", levelRouter);
app.use("/users", userRouter);

app.use("/stories", storiesRouter);
app.use("/locations", locationsRouter);

app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  const user = req.user;

  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
