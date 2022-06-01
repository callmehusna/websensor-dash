const axios = require('axios');


exports.homeRoutes = (req, res) => {
    res.render('index');
}
exports.landingPage = (req, res) => {
    res.render('login');
}
exports.new_config = (req, res) =>{
    res.render('config');
}
exports.new_calib = (req, res) =>{
    res.render('calib');
}
