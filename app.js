const express = require("express");
require("dotenv").config();
var cors = require("cors");

const app = express();

const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mediline.netlify.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Routes
const homeRoute = require("./server/routes/homeRoute");
// const userRoute = require("./server/routes/userRoute");

app.use("/api/v1", homeRoute);
// app.use("/api/v1", userRoute);

module.exports = app;
