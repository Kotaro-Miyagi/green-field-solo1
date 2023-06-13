const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3333;
const knex = require("./src/db/index");
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.json());
app.use(express.json());
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

app.post("/record", async (req, res) => {
  try {
    // console.log("############################");
    console.log(req.body);
    await knex("record").insert(req.body);

    res.status(200).send("Record created successfully");
  } catch (error) {
    console.error(error);
  }
});

// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const PORT = 3333;
// const knex = require("./src/db/index");

// app.listen(PORT, () => {
//   console.log(`Server is running ${PORT} !`);
// });

// app.get("/record", async (req, res) => {
//   try {
//     const data = await knex
//       .from("record")
//       .select(["date-id", "id", "training"]);
//     res.status(200).send(data);
//   } catch (error) {
//     console.error(error);
//   }
// });

// app.post("/record", async (req, res) => {
//   try {
//     const { dateId, id, training } = req.body;
//     await knex("record").insert({
//       "date-id": dateId,
//       id: id,
//       training: training,
//     });

//     res.status(200).send("Record created successfully");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("An error occurred");
//   }
// });
