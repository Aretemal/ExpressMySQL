class ServiceError extends Error {
  constructor(errorCode) {
    super(errorCode);
    this.errorsArray = [{
      msg: errorCode,
    },
    ];
  }
}
export default ServiceError;
