const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const ConnectDB = () => {
  const connectionString = process.env.MONGODB_URI;

  mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Connection Success");
    })
    .catch((error) => {
      console.error("Connection Error:", error);
    });
};

module.exports = ConnectDB;
