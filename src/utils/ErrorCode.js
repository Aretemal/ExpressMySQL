export const errorCodes = (status, lang) => {
  switch (lang) {
    case 'en': switch (status) {
      case '430': return 'Login cannot be empty';
      case '431': return 'First Name cannot be empty';
      case '432': return 'Last Name cannot be empty';
      case '433': return 'Email cannot be empty';
      case '434': return 'Password cannot be shorter than 4 characters';
      case '435': return 'Message for new post cannot be empty';
      case '436': return 'Id cannot be empty';
      case '437': return 'User already exists';
      case '438': return 'User not found';
      case '439': return 'Wrong password entered';
      case '440': return 'No such connection exists';
      case '441': return 'Id not specified';
      default: return null;
    }
    case 'ru': switch (status) {
      case '430': return 'Логин не может быть пустым';
      case '431': return 'Имя не может быть пустым';
      case '432': return 'Фамилия не может быть пустой';
      case '433': return 'Электронная почта не может быть пустой';
      case '434': return 'Пароль не может быть короче 4 символов';
      case '435': return 'Сообщение для нового поста не может быть пустым';
      case '436': return 'Идентификатор не может быть пустым';
      case '437': return 'Пользователь уже существует';
      case '438': return 'Пользователь не найден';
      case '439': return 'Введен неправильный пароль';
      case '440': return 'Нет такой связи';
      case '441': return 'Идентификатор не указан';
      default: return null;
    }
    default: return null;
  }
};
export const titleCodes = (status, lang) => {
  switch (lang) {
    case 'en':
      switch (status) {
        case '430':
        case '431':
        case '432':
        case '433':
        case '434':
        case '435':
        case '436':
          return 'Validation Error';
        case '437':
        case '438':
        case '439':
        case '440':
        case '441':
          return 'Service Error';
        default:
          return null;
      }
    case 'ru':
      switch (status) {
        case '430':
        case '431':
        case '432':
        case '433':
        case '434':
        case '435':
        case '436':
          return 'Ошибка проверки';
        case '437':
        case '438':
        case '439':
        case '440':
        case '441':
          return 'Cервисная ошибка';
        default:
          return null;
      }
    default: return null;
  }
};
