const mongoose = require("mongoose");
const { config } = require("../config");

exports.connectToDatabase = (options) => {
  return mongoose.connect(config.dbURL, { ...options });
};

// module.exports = connectToDatabase;
