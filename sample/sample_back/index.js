const http = require("http");
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv").config();
const ConnectDB = require("./db");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ConnectDB();
//   .then(() => {
http.createServer(app).listen(8000, function (req, res) {
  console.log("Port Running");
});
//   })
//   .catch((err) => {
//     console.log("Failed");
//   });
const userDataSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const UserData = mongoose.model("UserData", userDataSchema);

app.post("/data", async (req, res) => {
  try {
    const { name, email } = req.body;

    const userData = new UserData({ name, email });

    await userData.save();

    console.log("Data saved:", userData);
    res.status(200).send("Data saved successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
});
