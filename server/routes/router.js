const express = require('express');
const route = express.Router();
const jwt = require('jwt-simple');

const services = require('../services/render');
const controller = require('../controller/user.controller');

 route.get('/', services.landingPage);
 route.get('/home', services.homeRoutes);
 route.get('/config', services.new-config)
 route.get('/config', services.new-calib)
 
 // API
 route.post('/api/config', controller.update_config);
 module.exports = route