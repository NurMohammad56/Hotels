const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;

async function main() {
  await mongoose.connect(
    "mongodb+srv://hotels:hotels1221@hotels-cluster.bu0ud.mongodb.net/?retryWrites=true&w=majority&appName=hotels-cluster"
  );

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()
  .then(() => console.log("Database Connected...."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Running on ${port}...`);
});
