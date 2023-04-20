class ValidationError extends Error {
  constructor(errors) {
    super(errors);
    this.errorsArray = errors.map((item) => {
      delete item.value;
      return item;
    });
  }
}
export default ValidationError;
