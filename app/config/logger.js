const winston = require("winston");
const { combine, timestamp, json, printf, colorize, align } = winston.format;

const logger = winston.createLogger({
    level: "silly",
    // format: winston.format.json(),
    // format: winston.format.cli(),
    format: combine(
        // colorize({ all: true }),
        timestamp({
            format: "YYYY-MM-DD hh:mm:ss.SSS A",
        }),
        // align(),
        printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    // transports: [new winston.transports.Console()],
    transports: [
        new winston.transports.Console(),
    ],
});

module.exports = logger;