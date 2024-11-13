
const express = require('express');
const passport = require('./passportMiddleware'); /
const router = express.Router();

// Route to initiate Google authentication
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google callback route
router.get('/auth/google/callback', 
   passport.authenticate('google', { failureRedirect: '/' }),
   (req, res) => {
      res.redirect('/contribute'); // Redirect to contribution page
   }
);

// Logout route
router.get('/logout', (req, res) => {
   req.logout(() => {
      res.redirect('/');
   });
});

module.exports = router;
