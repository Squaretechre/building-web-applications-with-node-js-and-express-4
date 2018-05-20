const passport = require('passport');
require('./strategies/local.strategy')();

module.exports = function passportConfig(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  // Stores user in session
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Retrieves user from session
  // Alternatively pass only user id
  passport.deserializeUser((user, done) => {
    // Then grab user with Mongo
    done(null, user);
  });
};
