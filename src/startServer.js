import { getConfig } from '../config/config.js';

/**
 * Starts the server.
 * Retrieves the port and host from the configuration and listens for incoming connections.
 * @param {import('fastify').FastifyInstance} app The Fastify application to start.
 * @function
 * @name startServer
 * @returns {Promise} Resolves when the server has started successfully.
 */
export function startServer(app, server) { 
  
  // Add server parameter
  if (app.server) {
    throw new Error('Server is already running');
  }

  app.server = server;  // Assign server to app.server here

  const config = getConfig();
  const { port, host } = config.server;

  // Handle system signals
  process.on('SIGINT', () => {
    if (app.server) {
      app.server.close((err) => {  // Add err parameter
        if (err) {
          app.log.error('Server close failed');  // Log error message
        } else {
          app.log.info('Server closed due to SIGINT signal');
        }
      });
    }
  });

  let isClosed = false;

  process.on('SIGTERM', () => {
    if (!app.server) return;
  
    app.log.info('Received SIGTERM signal, shutting down server...');
  
    app.server.close(() => {
      if (isClosed) return;
  
      isClosed = true;
      app.log.info('Server closed successfully');  
      process.exit(0);
    });
  });

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

