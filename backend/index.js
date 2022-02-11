require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const adminPanel = require("./routes/index");
const path = require("path");

const PORT = process.env.PORT || 5000;
const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}/${process.env.MONGO_DB}`;
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.SITE_URL,
  })
);
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", adminPanel);

async function start() {
  try {
    mongoose.connect(url);
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server started on port ` + PORT));
  } catch (e) {
    console.log(e);
  }
}

start();
