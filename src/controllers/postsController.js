import { matchedData, validationResult } from 'express-validator';
import {
  makeUserMember,
  sendNewMessage,
  getAllMessages,
  deleteMessageById,
} from '../services/postsService.js';

export const getHomePage = async (req, res) => {
  const messagesArray = await getAllMessages();

  res.render('home', {
    title: 'Home Page',
    user: req.user,
    messages: messagesArray,
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

export const getDeleteMessage = async (req, res, next) => {
  const messageId = req.params.id;

  try {
    await deleteMessageById(messageId);

    res.redirect('/');
  } catch (error) {
    return next(error);
  }
};

export const postNewMessageForm = async (req, res, next) => {
  if (!req.user) {
    res.redirect('/auth/login');
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('new-message', {
      title: 'New Message',
      user: req.user,
      formData: req.body,
      errors: errors.array(),
    });
  }

  const { content } = matchedData(req);

  try {
    await sendNewMessage(req.user.id, content);

    res.redirect('/');
  } catch (error) {
    return next(error);
  }
};

export const getNewMessagePage = (req, res) => {
  res.render('new-message', {
    title: 'New Message',
    user: req.user,
  });
};

export const postJoinClubForm = async (req, res, next) => {
  if (req.body.passcode === 'jon dere 130') {
    try {
      await makeUserMember(req.user.id);

      res.render('join-club', {
        title: 'Join the Club',
        user: req.user,
        message: "You're a MEMBER NOW!!!!",
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
