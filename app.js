const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const db = require("./config/mongoose-conection");

const indexRouter = require("./routes/index");
const onwerRouter = require("./routes/onwerRouter");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");

const expressSession = require("express-session");
const flash = require("connect-flash");

require("dotenv").config();

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET || "default-secret-key", // Provide a fallback secret
  })
);
app.use(flash());
app.set("views engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/onwer", onwerRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(8000, function (err) {
  console.log("server is ready On 8000 Port ");
});
