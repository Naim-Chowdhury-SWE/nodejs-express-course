//server.js
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
//CREATE A SERVER
const app = require("./app");

//console.log(app.get("env"));
//console.log(process.env);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then((connection) => {
    console.log("DB Connection successful");
  })
  .catch((error) => {
    console.log("Some error has occurred");
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
