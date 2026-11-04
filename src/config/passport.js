import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { findUserById, findUserByUsername } from '../services/authService.js';
import { verifyPassword } from '../services/passwordService.js';

const verifyCallback = async (username, password, done) => {
  try {
    const user = await findUserByUsername(username);
    if (!user) {
      return done(null, false, { message: 'Invalid username or password' });
    }

    const passwordMatch = await verifyPassword(password, user.password);
    if (!passwordMatch) {
      return done(null, false, { message: 'Invalid username or password' });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
};

const serializeCallback = (user, done) => {
  done(null, user.id);
};

const deserializeCallback = async (userId, done) => {
  try {
    const user = await findUserById(userId);

    done(null, user);
  } catch (error) {
    done(error);
  }
};

export const configurePassport = () => {
  passport.use(new LocalStrategy(verifyCallback));
  passport.serializeUser(serializeCallback);
  passport.deserializeUser(deserializeCallback);
};
