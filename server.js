const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
//cdn
const cloudinary = require("cloudinary").v2;

const path = require("path");

//helps with developing locally as an option
const staticDir = process.env.PRODUCTION
  ? path.resolve("./client/build")
  : path.resolve("./client/public");

//static server connecting public folder
app.use(express.static(staticDir));
//middleware for helping read the form body of a post request
app.use(express.urlencoded({ extended: true }));

cloudinary.config({
  cloud_name: "tjn-personal",
  api_key: "478386268918152",
  api_secret: process.env.API_SECRET,
});

//catch all
app.get("*", async (req, res) => {
  res.sendFile(path.resolve(staticDir + "/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port${port}`);
});
