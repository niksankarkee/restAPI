const cors = require("cors");
const morgan = require("morgan");
const helment = require("helmet");
const { json, urlencoded } = require("body-parser");

const setupMiddleware = (app) => {
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(helment());
};

module.exports = setupMiddleware;
