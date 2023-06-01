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
router.put('/profile/posts/update/:id', tryCatch(PostController.update));
router.delete('/profile/posts/delete/:id', tryCatch(PostController.delete));
router.post('/profile/posts/comment/create', tryCatch(PostController.createComment));
router.delete('/profile/posts/comment/delete/:id', tryCatch(PostController.deleteComment));
router.get('/profile/posts/comments/:id', tryCatch(PostController.getAllComments));
router.post('/profile/posts/like/:id', tryCatch(PostController.setLike));
router.delete('/profile/posts/unlike/:id', tryCatch(PostController.deleteLike));

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
router.get('/friends/:perPage', tryCatch(FollowController.getFriends));
router.get('/subscribers/:perPage', tryCatch(FollowController.getSubscribers));
router.get('/subscriptions/:perPage', tryCatch(FollowController.getSubscriptions));

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
