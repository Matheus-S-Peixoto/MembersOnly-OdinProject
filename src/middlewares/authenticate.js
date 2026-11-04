import passport from 'passport';

export const authenticateUser = async (req, res, next) => {
  await passport.authenticate('local', (error, user, info) => {
    if (error) return next(error);

    if (!user) {
      req.authError = info?.message;
      return next();
    }

    req.logIn(user, (error) => {
      if (error) return next(error);

      return next();
    });
  })(req, res, next);
};
