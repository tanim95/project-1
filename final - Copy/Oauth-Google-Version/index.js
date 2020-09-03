//initialization 
const path  = require('path');
const express = require('express');
const app = express();
const log = require('./routes/login');
const reg = require('./routes/register');
//const forget = require('./routes/forget');
const morgan = require('morgan');
const cors = require('cors');
const passportSetup = require('./config/passport-setup');
//setting the port
const port = process.env.PORT||3000;
const mongoose = require('mongoose');
const database = require('./database');
//const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/key');
const profileRoute = require('./routes/profile');
const { initialize } = require('passport');
const User = require('./models/user-models');
const session = require('express-session');
const key = require('./config/key');
const flash = require('connect-flash');
app.use(express.static(path.join(__dirname,'views')));
app.use(express.urlencoded({ extended: true }));
// setting up the view engine
app.set('view engine','ejs');
app.set ('views','./views');
app.use(morgan('dev'));
app.use(cors());
require('./config/passport-local')(passport);

app.use(
    session({
      secret: key.session.cookieKey,
      resave: true,
      saveUninitialized: true
    })
  );
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(function(req,res,next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});


//setting up the routes 
app.use('/auth',log);
app.use('/register',reg);
//app.use('/forget',forget);
app.use('/profile',profileRoute);

app.listen(port,()=>{
    console.log(`server is running in ${port}......`);
});