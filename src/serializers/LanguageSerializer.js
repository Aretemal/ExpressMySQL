import Serializer from './Serializer.js';

class LanguageSerializer extends Serializer {
  type() {
    return 'Language';
  }

  attributes() {
    return {
      language: this.resource.language,
    };
  }

  links() {
    return { self: `${process.env.API_URL}/settings/language` };
  }
}
export default LanguageSerializer;
