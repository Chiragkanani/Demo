const web = require("express").Router()

const authController = require("../app/controllers/authController");
const homeController = require("../app/controllers/homeController");
const auth = require("../app/middlewares/auth");
const RegisterLogin = require("../app/middlewares/validation/registerLogin");



web.get("/",auth,homeController().getHome)
web.get("/login",authController().getLoginForm);
web.post("/login",authController().loginUser);
web.get("/register",authController().getRegisterForm);
web.post("/register",RegisterLogin,authController().registerUser);
web.get("/activateuser",authController().activeUser)


module.exports = web;