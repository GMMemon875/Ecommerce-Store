const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/mongoose-conection");
const onwerRouter = require("./routes/onwerRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
 

require("dotenv").config();

app.set("views engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/onwer", onwerRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);

app.listen(8000, function (err) {
  console.log("server is ready On 8000 Port ");
});
