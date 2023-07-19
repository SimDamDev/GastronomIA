import validateObject from './validateObject.js';

/**
 * Validates the provided server configuration object.
 *
 * @function
 * @name validateServerConfig
 * @param {Object} server - The server configuration object to validate.
 * @throws {Error} Will throw an error if a required configuration value is missing or is not of the expected type.
 */
  function validateServerConfig(server) {
    validateObject(server, [
      { key: 'port', type: 'number' },
      { key: 'host', type: 'string', validate: value => {
        try {
          new URL(value);
          return true;
        } catch (_) {
          return false;
        }
      } },
      // Other rules...
    ]);
  }