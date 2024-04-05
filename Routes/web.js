const web = require("express").Router()

const authController = require("../app/controllers/authController");




web.get("/",authController().getLoginForm)

module.exports = web;