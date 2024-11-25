interface LogData {
  [key: string]: any;
}

const logger = (message: string, data?: LogData) => {
  const logMessage = `[Logger] ${message}`;
  console.log(logMessage, data || "");
};

export { logger };
