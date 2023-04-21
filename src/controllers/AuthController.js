import { validationResult } from 'express-validator';
import UserSerializer from '../serializers/UserSerializer.js';
import AuthService from '../services/AuthService.js';
import AuthSerializer from '../serializers/AuthSerializer.js';

class AuthController {
  async registration(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next({
        errorsArray: errors.array(),
        title: 'Validation Error',
      });
      return;
    }
    const user = await AuthService.registration(req.body, next);
    req.serializer = new UserSerializer(user);
    next();
  }

  async login(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next({ errorsArray: errors.array(), title: 'Validation Error' });
      return;
    }
    const token = await AuthService.login(req.body, next);
    req.serializer = new AuthSerializer(token);
    next();
  }
}

export default new AuthController();
