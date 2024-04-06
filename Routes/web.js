const web = require("express").Router()
const passport = require("passport");

require("../app/config/passport")(passport)


const authController = require("../app/controllers/authController");
const homeController = require("../app/controllers/homeController");
const auth = require("../app/middlewares/auth");
const RegisterLogin = require("../app/middlewares/validation/registerLogin");



web.get("/", passport.authenticate('jwt', { session: false }),homeController().getHome)
web.get("/login",authController().getLoginForm);
web.post("/login",authController().loginUser);
web.get("/register",authController().getRegisterForm);
web.post("/register",RegisterLogin,authController().registerUser);
web.get("/activateuser",authController().activeUser)


module.exports = web;