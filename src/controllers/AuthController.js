import { validationResult } from 'express-validator';
import AuthService from '../services/AuthService.js';
import fullUrlCreator from '../utils/fullUrlCreator.js';
import AuthSerializers from '../serializers/AuthSerializers.js';

class AuthController {
  async registration(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Ошибка регистрациии' });
    }
    const data = await AuthService.registration(req.body);
    const serializer = new AuthSerializers({
      attributes: data, id: data.id, type: 'User', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }

  async login(req, res, next) {
    const data = await AuthService.login(req.body);
    const serializer = new AuthSerializers({
      attributes: data, id: data.id, type: 'Token', link: fullUrlCreator(req),
    });
    req.serializer = serializer;
    next();
  }
}

export default new AuthController();
