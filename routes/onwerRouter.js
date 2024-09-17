const express = require("express");
const router = express.Router();
// const onwerModel = require("../modal/OnwerModel");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    // const onwer = await onwerModel.find();
    // if (onwer.length > 0) {
    //   return res.send("already save onwer");
    // }
    // res.send("create a Onwer Account");
  });
}

router.get("/", function (req, res) {
  res.send("Hello World imtiaz this is a onwer route");
});

module.exports = router;
