import Router from 'express';
import { check, param, body } from 'express-validator';
import DialogController from './src/controllers/DialogController.js';
import FollowController from './src/controllers/FollowController.js';
import PostController from './src/controllers/PostController.js';
import ProfileController from './src/controllers/ProfileController.js';
import UserController from './src/controllers/UserController.js';
import AuthController from './src/controllers/AuthController.js';
import { tryCatch } from './src/utils/tryCatch.js';

const router = new Router();
router.post('/registration', [
  check('login', 'Login cannot be empty').notEmpty(),
  check('firstName', 'First Name cannot be empty').notEmpty(),
  check('lastName', 'Last Name cannot be empty').notEmpty(),
  check('email', 'Email cannot be empty').notEmpty(),
  check('password', 'Password cannot be shorter than 4 characters').isLength({ min: 4 }),
], tryCatch(AuthController.registration));
router.post('/login', [
  check('login', 'Login cannot be empty').notEmpty(),
  check('password', 'Password cannot be shorter than 4 characters').isLength({ min: 4 }),
], tryCatch(AuthController.login));

router.get('/user/:id', tryCatch(UserController.getOne));
router.get('/users', tryCatch(UserController.getAllUsers));

router.post('/profile/posts', [
  check('newMessageText', 'Message for new post cannot be empty').notEmpty().isLength({ max: 400 }),
], tryCatch(PostController.create));
router.get('/profile/posts', tryCatch(PostController.getAll));
router.get('/profile/posts/:id', [
  param('id', 'Id cannot be empty').notEmpty(),
], tryCatch(PostController.getOne));
router.put('/profile/posts/:id', tryCatch(PostController.update));
router.delete('/profile/posts/:id', tryCatch(PostController.delete));

router.get('/profile/user', tryCatch(ProfileController.getInfoAuthorizedUser));
router.put('/profile/status', tryCatch(ProfileController.updateStatus));
router.get('profile/status/:id', tryCatch(ProfileController.getStatus));

router.post('/follow', [
  body('id', 'Id cannot be empty').notEmpty(),
], tryCatch(FollowController.follow));
router.put('/approve', [
  body('id', 'Id cannot be empty').notEmpty(),
], tryCatch(FollowController.approve));
router.put('/unfollow', [
  body('id', 'Id cannot be empty').notEmpty(),
], tryCatch(FollowController.unfollow));
router.get('/friends/:count', tryCatch(FollowController.getFriends));
router.get('/subscribers/:count', tryCatch(FollowController.getSubscribers));
router.get('/subscriptions/:count', tryCatch(FollowController.getSubscriptions));

router.post('/dialog/message/:id', [
  param('id', 'Id cannot be empty').notEmpty(),
], tryCatch(DialogController.sendMessage));
router.get('/dialog/companion', tryCatch(DialogController.getAllDialogs));
router.delete('/dialog/message/:id', [
  param('id', 'Id cannot be empty').notEmpty(),
], tryCatch(DialogController.deleteMessage));
router.get('/dialog/messages/:id', [
  param('id', 'Id cannot be empty').notEmpty(),
], tryCatch(DialogController.getAllMessage));

export default router;
