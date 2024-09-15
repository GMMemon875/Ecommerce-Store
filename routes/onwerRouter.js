const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Hello World imtiaz this is a onwer route");
});

module.exports = router;
