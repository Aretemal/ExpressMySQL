import { validationResult } from 'express-validator';
import UserSerializer from '../serializers/UserSerializer.js';
import AuthService from '../services/AuthService.js';
import AuthSerializer from '../serializers/AuthSerializer.js';

class AuthController {
  async registration(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = await AuthService.registration(req.body);
    req.serializer = new UserSerializer(user);
    next();
  }

  async login(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const token = await AuthService.login(req.body);
    req.serializer = new AuthSerializer(token);
    next();
  }
}

export default new AuthController();
