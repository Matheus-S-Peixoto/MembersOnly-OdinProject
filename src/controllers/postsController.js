import { makeUserAdmin } from '../services/postsService.js';

export const getHomePage = async (req, res) => {
  res.render('home', {
    title: 'Home Page',
    user: req.user,
  });
};

export const getJoinClubPage = (req, res) => {
  if (!req.user) {
    res.status(401);
  }
  res.render('join-club', {
    title: 'Join the Club',
    user: req.user,
  });
};

export const postJoinClubForm = async (req, res, next) => {
  if (req.body.passcode === 'jon dere 130') {
    try {
      await makeUserAdmin(req.user.id);

      console.log(req.user);

      res.render('join-club', {
        title: 'Join the Club',
        user: req.user,
        message: "You're an ADMIN NOW!!!!",
      });
    } catch (error) {
      return next(error);
    }
  } else {
    res.render('join-club', {
      title: 'Join the Club',
      user: req.user,
      message: 'ERRROUUU KKKKKK',
    });
  }
};
