import {validateObject} from './validateObject.js';

/**
 * Validates the provided logger configuration object.
 *
 * @function
 * @name validateLoggerConfig
 * @param {Object} logger - The logger configuration object to validate.
 * @throws {Error} Will throw an error if a required configuration value is missing or is not of the expected type.
 */
  function validateLoggerConfig(logger) {
    validateObject(logger, [
      { key: 'level', type: 'string' },
      { key: 'prettyPrint', type: 'boolean' },
      { key: 'stream', type: 'object', validate: value => typeof value.write === 'function' },
      // Other rules...
    ]);
  }

    export { validateLoggerConfig };