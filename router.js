import Router from 'express';
import { check } from 'express-validator';
import DialogController from './src/controllers/DialogController.js';
import FollowController from './src/controllers/FollowController.js';
import PostController from './src/controllers/PostController.js';
import ProfileController from './src/controllers/ProfileController.js';
import UserController from './src/controllers/UserController.js';
import AuthController from './src/controllers/AuthController.js';

const router = new Router();
router.post('/registration', [
  check('userName', 'Имя пользовател не может быть пустым').notEmpty(),
  check('password', 'Password не может быть короче 4 символов').isLength({ min: 4 }),
], AuthController.registration);
router.post('/login', AuthController.login);

// Users
router.get('/user/:id', UserController.getOne);
router.get('/users', UserController.getAllUsers);
router.get('profile/status/:id', ProfileController.getStatus);

// Post
router.post('/profile/posts', PostController.create);
router.get('/profile/posts', PostController.getAll);
router.get('/profile/posts/:id', PostController.getOne);
router.put('/profile/posts/:id', PostController.update);
router.delete('/profile/posts/:id', PostController.delete);

router.get('/profile/user', ProfileController.getInfoAuthorizedUser);
router.put('/profile/status', ProfileController.updateStatus);

// Follow
router.post('/follow', FollowController.follow);
router.put('/approve', FollowController.approve);
router.put('/unfollow', FollowController.unfollow);

// Dialog
router.post('/dialog/message/:id', DialogController.sendMessage);
router.get('/dialog/companion/:id', DialogController.getAllMessage);
router.get('/dialog/companion', DialogController.getAllCompanions);

export default router;
