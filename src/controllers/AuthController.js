import { validationResult } from 'express-validator';
import UserSerializer from '../serializers/UserSerializer.js';
import AuthService from '../services/AuthService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import AuthSerializer from '../serializers/AuthSerializer.js';

class AuthController {
  async registration(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Ошибка регистрациии' });
    }
    const user = await AuthService.registration(req.body);
    const serializer = new UserSerializer({
      attributes: user, link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async login(req, res, next) {
    const token = await AuthService.login(req.body);
    const serializer = new AuthSerializer({
      token, link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }
}

export default new AuthController();
