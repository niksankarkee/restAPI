const express = require("express");
const app = express();

const mongoose = require("mongoose");

const { PORT, API_ROUTES } = require("./constants/index");
const setupMiddleware = require("./utils/middleware");
const { playerRouter } = require("./routers");
const { connectToDatabase } = require("./utils/db");

setupMiddleware(app);

app.use(API_ROUTES.PLAYERS, playerRouter);

const startServer = async () => {
  try {
    // Connect to database
    await connectToDatabase({
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Application is up and runngin on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = startServer;
