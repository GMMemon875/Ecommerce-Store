const express = require("express");
const app = express();
const path = require("path");

app.set(`views engine`, "ejs");
app.get(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.get(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("register.ejs");
});

app.listen(8000, function (err) {
  console.log("server is ready On 8000 Port ");
});
