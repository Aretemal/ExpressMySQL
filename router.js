import Router from 'express'
import PostController from "./controllers/PostController.js";
import ProfileController from "./controllers/ProfileController.js";
import UserController from "./controllers/UserController.js";
import AuthController from "./controllers/AuthController.js";
import {authMiddleware} from "./middleware/authMiddleware.js";
import {check} from 'express-validator';
const router = new Router()
// User
router.post('/user', UserController.create);
router.get('/user/:id', UserController.getOne)
router.get('profile/status/:id', UserController.getStatus)

// Post
router.post('/profile/posts', PostController.create)
router.get('/profile/posts', authMiddleware, PostController.getAll)
router.get('/profile/posts/:id', PostController.getOne)
router.put('/profile/posts/:id', PostController.update)
router.delete('/profile/posts/:id', PostController.delete)


router.post('/registration',[
    check('userName','Имя пользовател не может быть пустым').notEmpty(),
    check('password','Password не может быть короче 4 символов').isLength({min:4}),
],AuthController.registration)
router.post('/login',AuthController.login)

router.get('/profile/user', authMiddleware, ProfileController.getInfoAuthorizedUser)
router.put('/profile/status', authMiddleware, ProfileController.updateStatus)



export default router;
