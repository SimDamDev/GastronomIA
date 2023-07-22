import 'dotenv/config.js';
import { validateConfig } from '../src/utils/validators/index.js';
import { createWriteStream, existsSync, mkdirSync, openSync, closeSync } from 'fs';

/** @module config */

/**
 * The application configuration
 * @type {Object}
 * @property {boolean} requireUnitIcons - Whether the application requires unit icons.
 * @property {Object} server - The server configuration.
 * @property {number|string} server.port - The server port number.
 * @property {string} server.host - The server host name.
 * @property {Object} logger - The logger configuration.
 * @property {string} logger.level - The logger level.
 * @property {boolean} logger.prettyPrint - Whether to pretty print the logs.
 * @property {Object} logger.stream - The stream to which to write the logs.
 */
const logDir = '../logs';
const logFile = `${logDir}/logs.txt`;

// Check if the logs directory exists, if not, create it
if (!existsSync(logDir)){
    mkdirSync(logDir);
}

// Check if the logs.txt file exists, if not, create it
if (!existsSync(logFile)){
    closeSync(openSync(logFile, 'w'));
}

export const config = {
  requireUnitIcons: false,
  server: {
    port: Number(process.env.PORT),
    host: process.env.HOST,
  },
  logger: {
    level: 'info',
    prettyPrint: false,
    stream: createWriteStream(logFile)
  }
}


console.log(`Server Port: ${config.server.port}, Type: ${typeof config.server.port}`)
// Validate the configuration
validateConfig(config);
