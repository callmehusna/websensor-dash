const User = require('../model/User');
var express = require('express');
var passport = require('passport');
var router = express.Router();
var authController = require('../controller/auth.controller')

router.post("/login", passport.authenticate("local") ,  authController.login)
router.post("/register", authController.register)

module.exports = router