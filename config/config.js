import 'dotenv/config.js';
//import { validateConfig } from '../src/utils/validator/index.js';
import { createWriteStream } from 'fs';

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

function getConfig() {
  const config = {
    requireUnitIcons: false,
    server: {
      port: process.env.PORT,
      host: process.env.HOST,
    },
    logger: {
      level: 'info',
      prettyPrint: false,
      stream: createWriteStream('../logs/logs.txt')
    }
  };

  // Validate the configuration
  //validateConfig(config);
  
  return config;
}

export { getConfig };
