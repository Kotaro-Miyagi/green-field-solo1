const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3333;
const knex = require("./src/db/index");

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} !`);
});
