
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Configure the google strategy
passport.use(new GoogleStrategy({
   clientID: 'YOUR_GOOGLE_CLIENT_ID',
   clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
   callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
   // Placeholder for handling authenticated user profile
   return done(null, profile);
}));


passport.serializeUser((user, done) => {
   done(null, user);
});

passport.deserializeUser((user, done) => {
   done(null, user);
});

// Export configured passport instance to be used in app
module.exports = passport;
