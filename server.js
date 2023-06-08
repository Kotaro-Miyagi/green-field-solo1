const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3333;
const knex = require("./src/db/index");

app.listen(PORT, () => {
  console.log(`Server is running ${PORT} !`);
});

app.get("/record", async (req, res) => {
  try {
    const data = await knex
      .from("record")
      .select(["date-id", "id", "training"]);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
  }
});
