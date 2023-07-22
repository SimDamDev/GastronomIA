import {validateObject} from './validateObject.js';
import { isIP } from 'net';  // Import isIP function from 'net' module

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
      // Allow "localhost" as a valid host
      if (value === "localhost") {
        return true;
      }
      // Check if host is a valid IP address
      return isIP(value);
    } },
    // Other rules...
  ]);
}

export { validateServerConfig };
