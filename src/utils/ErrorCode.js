const errorCodes = (status) => {
  switch (status) {
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
};

export default errorCodes;
