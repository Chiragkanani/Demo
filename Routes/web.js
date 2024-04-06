const web = require("express").Router()

const authController = require("../app/controllers/authController");
const homeController = require("../app/controllers/homeController");
const auth = require("../app/middlewares/auth");



web.get("/",auth,homeController().getHome)
web.get("/login",authController().getLoginForm);
// web.post("/login",authController());
web.get("/register",authController().getRegisterForm);
web.post("/register",authController().registerUser);



module.exports = web;