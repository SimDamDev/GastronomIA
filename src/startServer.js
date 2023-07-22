import { getConfig } from '../config/config.js';

/**
 * Handle SIGINT signal.
 * Closes the server and logs the status.
 * @param {import('fastify').FastifyInstance} app The Fastify application.
 */
function handleSIGINT(app) {
  if (app.server) {
    app.server.close((err) => {
      if (err) {
        app.log.error('Server close failed');
      } else {
        app.log.info('Server closed due to SIGINT signal');
      }
    });
  }
}

/**
 * Handle SIGTERM signal.
 * Closes the server and logs the status.
 * @param {import('fastify').FastifyInstance} app The Fastify application.
 */
function handleSIGTERM(app) {
  let isClosed = false;

  if (!app.server) return;

  app.log.info('Received SIGTERM signal, shutting down server...');

  app.server.close(() => {
    if (isClosed) return;

    isClosed = true;
    app.log.info('Server closed successfully');  
    process.exit(0);
  });
}

/**
 * Starts the server.
 * Retrieves the port and host from the configuration and listens for incoming connections.
 * @param {import('fastify').FastifyInstance} app The Fastify application to start.
 * @function
 * @name startServer
 * @returns {Promise} Resolves when the server has started successfully.
 */
export function startServer(app, server) { 
  if (app.server) {
    throw new Error('Server is already running');
  }

  app.server = server;

  const config = getConfig();
  const { port, host } = config.server;

  // Handle system signals
  process.on('SIGINT', () => handleSIGINT(app));
  process.on('SIGTERM', () => handleSIGTERM(app));

  return new Promise((resolve, reject) => {
    app.listen(port, host, (err, server) => {
      if (err) {
        if (err.code === 'EADDRINUSE') {
          app.log.error('Port already in use'); 
        } else {
          app.log.error(err);
        }
        reject(err);
      } else {
        app.log.info(`Server listening on ${host}:${port}`);
        resolve();
      }
    });
  });
}
