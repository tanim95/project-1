const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./key');
const User = require('./../models/user-models');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs')


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})
passport.use(
    new GoogleStrategy({
        //OPTIONS
        callbackURL: 'http://localhost:3000/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //callback functions
        console.log(`passport callback function fired`);
        console.log(profile);

        User.findOne({ googleid: profile.id }).then((currentUser) => {
            if (currentUser) {
                console.log(`User already registered`);

                done(null, currentUser);
            }
            else {
                new User({
                    username: profile.displayName,
                    googleid: profile.id,
                    thumbnail: profile._json.picture
                }).save().then((newUser) => {
                    console.log(`User created ${newUser}`);
                    done(null, newUser);
                });
            }
        })

    })
) 