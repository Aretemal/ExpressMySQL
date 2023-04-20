class ValidationError extends Error {
  constructor(errors) {
    super(errors);
    this.errorsArray = errors.map((item) => {
      delete item.value;
      return item;
    });
    this.title = 'Validation Error';
  }
}
export default ValidationError;
