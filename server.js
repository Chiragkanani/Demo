const express = require("express");
const app = express();
require("dotenv").config();
const web = require("./Routes/web");
const expresslayout = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const passport = require("passport");
// const logger = require("./logger");


app.use(passport.initialize())
app.use(expresslayout);
app.set("layout", "./layouts/layout");
app.use(cookieParser());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", web);

app.listen(process.env.PORT || 3002);
