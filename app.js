//app.js
const express = require("express");
const morgan = require("morgan");

const moviesRouter = require("./Routes/moviesRouter.js");

let app = express();

const logger = function (request, response, next) {
  console.log("Custom middleware called");
  next();
};
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("./public"));
app.use(logger);
app.use((request, response, next) => {
  request.requestedAt = new Date().toISOString();
  next();
});

//GET - api/v1/movies/id
app.use("/api/v1/movies", moviesRouter);

module.exports = app;
