import pkg from 'winston';

const { createLogger, transports, format } = pkg;
const { printf } = format;

const myFormatConsole = printf(({
  level, message,
}) => `${level}: ${message}`);
const myFormatFile = printf(({
  level, message, timestamp,
}) => `time: ${timestamp} ${level}: ${message}`);
const myFormatForSequelizeFile = printf(({
  level, message, timestamp,
}) => `time: ${timestamp} 
${level}: 
${message}`);

const errorLogger = createLogger({
  transports: [
    new transports.Console({
      level: 'error',
      format: (format.timestamp(), format.json(), myFormatConsole),
    }),
    new transports.File({
      filename: 'src/logger/logger-history/errors.log',
      level: 'error',
      format: format.combine(format.timestamp(), format.json(), myFormatFile),
    }),
  ],
});
const successLogger = createLogger({
  transports: [
    new transports.Console({
      level: 'info',
      format: (format.timestamp(), format.json(), myFormatConsole),
    }),
    new transports.File({
      filename: 'src/logger/logger-history/info.log',
      level: 'info',
      format: format.combine(format.timestamp(), format.json(), myFormatFile),
    }),
  ],
});
const sequelizeLogger = createLogger({
  transports: [
    new transports.File({
      filename: 'src/logger/logger-history/sequelize.log',
      level: 'info',
      format: format.combine(format.timestamp(), format.json(), myFormatForSequelizeFile),
    }),
  ],
});
export default { errorLogger, successLogger, sequelizeLogger };
