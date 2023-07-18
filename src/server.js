import app from './app.js';
import { config } from '../config/config.js';
import { errorHandler } from './utils/errorHandler.js';

/**
 * Starts the server.
 * Retrieves the port from the configuration and listens for incoming connections.
 * @function
 * @name startServer
 * @returns {void}
 */
function startServer() {
  const port = config.server;

  app.listen(port, (err, address) => {
    if (err) {
      errorHandler(err);
      process.exit(1);
    }

    console.log(`Server listening at ${address}`);
  });
}

// Export the startServer function as a named export
export { startServer };

// Start the server by calling the startServer function
startServer();
