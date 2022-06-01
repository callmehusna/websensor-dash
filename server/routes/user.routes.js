var express = require("express");
var router = express.Router();
var postController = require("../controller/user.controller");
var auth = require("../middleware/authJwt")();

router.put("/config", auth.authenticate(), postController.update_config);

module.exports = router;