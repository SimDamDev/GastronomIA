import { validateServerConfig } from './serverConfigValidator.js';
import { validateLoggerConfig } from './loggerConfigValidator.js';
  

/**
 * Validates the provided configuration object.
 *
 * @function
 * @name validateConfig
 * @param {Object} config - The configuration object to validate.
 * @throws {Error} Will throw an error if the server or logger configuration objects are missing or are not valid.
 */
  function validateConfig(config) {
    validateServerConfig(config.server);
    validateLoggerConfig(config.logger);
    // You can add other validations here
  }
  
  export { validateConfig };
  