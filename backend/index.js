const express = require("express");
const router = require("./src/routes/api.js");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4000;

// parser options
app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

main()
  .then(() => console.log("Database Connected...."))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Running on ${port}...`);
});

// Managing BackEnd Api
app.use("/api/v1", router);
