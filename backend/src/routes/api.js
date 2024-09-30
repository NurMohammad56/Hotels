const express = require("express");
const router = express.Router();

router.get("/blog", (req, res) => {
  res.send("This is blog");
});

module.exports = router;
