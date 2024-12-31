const express = require("express");
const router = require("./src/routes/api.js");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4000;

// parser options
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, //Enable set cookie
  })
);

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
