const express = require("express");
const app = express();

const { PORT, API_ROUTES } = require("./constants/index");
const setupMiddleware = require("./utils/middleware");
const { playerRouter } = require("./routers");

setupMiddleware(app);

app.use(API_ROUTES.PLAYERS, playerRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Hello i am responding",
  });
});

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Application is up and runngin on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = startServer;
