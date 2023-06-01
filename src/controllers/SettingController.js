import SettingService from '../services/SettingService.js';
import LanguageSerializer from '../serializers/LanguageSerializer.js';
import AuthSerializer from '../serializers/AuthSerializer.js';

class SettingController {
  async getLanguage(req, res, next) {
    const language = await SettingService.getLanguage(req.user.id, next);
    req.serializer = new LanguageSerializer(language);
    next();
  }

  async changeLanguage(req, res, next) {
    const language = await SettingService.changeLanguage(req.body.lang, req.user.id, next);
    req.serializer = new LanguageSerializer(language);
    next();
  }

  async changePassword(req, res, next) {
    const password = await SettingService.changePassword(req.body.newPassword, req.user.id, next);
    req.serializer = new AuthSerializer(password);
    next();
  }
}
export default new SettingController();
