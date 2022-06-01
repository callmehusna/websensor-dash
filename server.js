const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const session = require('express-session');
const authRoute = require("./server/routes/auth.routes"),
postRoute = require("./server/routes/user.routes"),
auth = require('./server/middleware/authJwt.js')(),
passport = require("passport"),
User = require("./server/model/User"),
localStrategy = require("passport-local");

const connectDB = require('./server/database/connection');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth.initialize());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 's0m3$3Cret$h0lyC0d3&$' 
  }));
dotenv.config( { path : 'config.env'} )
app.use(morgan('tiny'));
connectDB();
app.use(bodyparser.urlencoded({ extended : true}))
app.set("view engine", "ejs")

passport.use(new localStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(authRoute);
app.use(postRoute);


app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.get('/',(req,res) => {
    res.render('login')
})
app.get('/home',(req,res) => {
    res.render('index')
})
app.get('/config',(req,res) => {
    res.render('config')
})
app.get('/calib',(req,res) => {
    res.render('calib')
})

//app.use('/', require('./server/routes/router'))
const PORT = process.env.PORT || 8080
app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});