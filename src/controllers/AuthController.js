import { validationResult } from 'express-validator';
import AuthService from '../services/AuthService.js';
import { ResponseObjectJSON } from '../utils/createrObjectResponse.js';

class AuthController {
  async registration(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Ошибка регистрациии' });
    }
    const data = await AuthService.registration(req.body);
    res.json(
      ResponseObjectJSON.render({
        type: 'registration', id: data.id, attributes: data, relationships: req.body,
      }, { links: { self: req.originalUrl } }),
    );
  }

  async login(req, res) {
    const data = await AuthService.login(req.body);
    res.json(
      ResponseObjectJSON.render({
        type: 'login', id: data.user.id, attributes: data, relationships: req.body,
      }, { links: { self: req.originalUrl } }),
    );
  }
}

export default new AuthController();
