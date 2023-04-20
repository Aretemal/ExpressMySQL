class ServiceError extends Error {
  constructor(errorCode) {
    super(errorCode);
    this.errorsArray = [{
      msg: errorCode,
    },
    ];
    this.title = 'Service Error';
  }
}
export default ServiceError;
