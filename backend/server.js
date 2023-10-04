const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("database connected");
});

app.use(express.json());

app.listen(5000, () => {
  console.log("Server listenning on Port " + process.env.PORT);
});
