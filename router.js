import Router from 'express';
import { check, param, body } from 'express-validator';
import DialogController from './src/controllers/DialogController.js';
import FollowController from './src/controllers/FollowController.js';
import PostController from './src/controllers/PostController.js';
import ProfileController from './src/controllers/ProfileController.js';
import UserController from './src/controllers/UserController.js';
import AuthController from './src/controllers/AuthController.js';

const router = new Router();
router.post('/registration', [
  check('login', 'Login cannot be empty').notEmpty(),
  check('firstName', 'First Name cannot be empty').notEmpty(),
  check('lastName', 'Last Name cannot be empty').notEmpty(),
  check('email', 'Email cannot be empty').notEmpty(),
  check('password', 'Password cannot be shorter than 4 characters').isLength({ min: 4 }),
], AuthController.registration);
router.post('/login', [
  check('login', 'Login cannot be empty').notEmpty(),
  check('password', 'Password cannot be shorter than 4 characters').isLength({ min: 4 }),
], AuthController.login);

router.get('/user/:id', UserController.getOne);
router.get('/users', UserController.getAllUsers);

router.post('/profile/posts', [
  check('newMessageText', 'Message for new post cannot be empty').notEmpty().isLength({ max: 400 }),
], PostController.create);
router.get('/profile/posts', PostController.getAll);
router.get('/profile/posts/:id', [
  param('id', 'Id cannot be empty').notEmpty(),
], PostController.getOne);
router.put('/profile/posts/:id', PostController.update);
router.delete('/profile/posts/:id', PostController.delete);

router.get('/profile/user', ProfileController.getInfoAuthorizedUser);
router.put('/profile/status', ProfileController.updateStatus);
router.get('profile/status/:id', ProfileController.getStatus);

router.post('/follow', [
  body('id', 'Id cannot be empty').notEmpty(),
], FollowController.follow);
router.put('/approve', [
  body('id', 'Id cannot be empty').notEmpty(),
], FollowController.approve);
router.put('/unfollow', [
  body('id', 'Id cannot be empty').notEmpty(),
], FollowController.unfollow);

router.post('/dialog/message/:id', [
  param('id', 'Id cannot be empty').notEmpty(),
], DialogController.sendMessage);
router.get('/dialog/companion', DialogController.getAllDialogs);
router.get('/dialog/messages/:id', [
  param('id', 'Id cannot be empty').notEmpty(),
], DialogController.getAllMessage);

export default router;
