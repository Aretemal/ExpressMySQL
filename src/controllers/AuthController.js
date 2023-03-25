import { validationResult } from 'express-validator';
import UserSerializer from '../serializers/UserSerializer.js';
import AuthService from '../services/AuthService.js';
import AuthSerializer from '../serializers/AuthSerializer.js';

class AuthController {
  async registration(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Ошибка регистрациии' });
    }
    const user = await AuthService.registration(req.body);
    req.serializer = new UserSerializer(user, req);
    next();
  }

  async login(req, res, next) {
    const token = await AuthService.login(req.body);
    req.serializer = new AuthSerializer(token, req);
    next();
  }
}

export default new AuthController();
