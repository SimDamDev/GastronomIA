import app from './app.js';
import {config} from './config/config.js';
import {errorHandler} from './middlewares/errorHandler.js';

/**
 * Starts the server.
 * Retrieves the port from the configuration and listens for incoming connections.
 * @function
 * @name startServer
 * @returns {Promise} Resolves when the server has started successfully.
 */
export function startServer() {
  const  {port, host} = config.server;

  return new Promise((resolve, reject) => {
    const server = app.listen(port, host, (err) => {
      if (err){
        errorHandler(err);
        reject(err);
      } else {
        app.log.info(`Server listening on ${host}:${port}`);
        resolve(server);
      }
    });

    // Listen for SIGINT and SIGTERM signals and close the server gracefully
    process.on('SIGINT', () => server.close());
    process.on('SIGTERM', () => server.close());
  });
}

