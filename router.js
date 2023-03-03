import Router from 'express';
import { check } from 'express-validator';
import FollowController from './src/controllers/FollowController.js';
import PostController from './src/controllers/PostController.js';
import ProfileController from './src/controllers/ProfileController.js';
import UserController from './src/controllers/UserController.js';
import AuthController from './src/controllers/AuthController.js';
import { tokenMiddleware } from './src/middlewaree/tokenMiddleware.js';
import { tryCatch } from './src/utils/tryCatch.js';

const router = new Router();

router.post('/registration', [
  check('userName', 'Имя пользовател не может быть пустым').notEmpty(),
  check('password', 'Password не может быть короче 4 символов').isLength({ min: 4 }),
], tryCatch(AuthController.registration));
router.post('/login', tryCatch(AuthController.login));

router.use(tokenMiddleware);
// User
router.post('/user', tryCatch(UserController.create));
router.get('/user/:id', tryCatch(UserController.getOne));
router.get('profile/status/:id', tryCatch(UserController.getStatus));

// Post
router.post('/profile/posts', tryCatch(PostController.create));
router.get('/profile/posts', tryCatch(PostController.getAll));
router.get('/profile/posts/:id', tryCatch(PostController.getOne));
router.put('/profile/posts/:id', tryCatch(PostController.update));
router.delete('/profile/posts/:id', tryCatch(PostController.delete));

router.get('/profile/user', tryCatch(ProfileController.getInfoAuthorizedUser));
router.put('/profile/status', tryCatch(ProfileController.updateStatus));

// Follow
router.post('/follow', tryCatch(FollowController.follow));
router.put('/approve', tryCatch(FollowController.approve));
router.put('/unfollow', tryCatch(FollowController.unfollow));

export default router;
