import Router from 'express';
import { check } from 'express-validator';
import FollowedController from './src/controllers/FollowedController.js';
import PostController from './src/controllers/PostController.js';
import ProfileController from './src/controllers/ProfileController.js';
import UserController from './src/controllers/UserController.js';
import AuthController from './src/controllers/AuthController.js';
import { tokenMiddleware } from './src/middlewaree/tokenMiddleware.js';
import { tryCatch } from './src/utils/tryCatch.js';

const router = new Router();
// User
router.post('/user', tryCatch(UserController.create));
router.get('/user/:id', tryCatch(UserController.getOne));
router.get('profile/status/:id', tryCatch(UserController.getStatus));

// Post
router.post('/profile/posts', tokenMiddleware, tryCatch(PostController.create));
router.get('/profile/posts', tokenMiddleware, tryCatch(PostController.getAll));
router.get('/profile/posts/:id', tryCatch(PostController.getOne));
router.put('/profile/posts/:id', tryCatch(PostController.update));
router.delete('/profile/posts/:id', tryCatch(PostController.delete));

router.post('/registration', [
  check('userName', 'Имя пользовател не может быть пустым').notEmpty(),
  check('password', 'Password не может быть короче 4 символов').isLength({ min: 4 }),
], tryCatch(AuthController.registration));
router.post('/login', tryCatch(AuthController.login));

router.get('/profile/user', tokenMiddleware, tryCatch(ProfileController.getInfoAuthorizedUser));
router.put('/profile/status', tokenMiddleware, tryCatch(ProfileController.updateStatus));

// Follow
router.post('/follow', tokenMiddleware, tryCatch(FollowedController.follow));
router.put('/approved', tokenMiddleware, tryCatch(FollowedController.approved));
router.put('/unfollow', tokenMiddleware, tryCatch(FollowedController.unfollow));

export default router;
