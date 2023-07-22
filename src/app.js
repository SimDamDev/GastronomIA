import fastify from 'fastify';
import pino from 'pino';
import staticFiles from './staticFiles.js';
import {config} from '../config/config.js';
import routes from './routes/indexRoutes.js';
import {dbConnect} from './services/standaloneServices/db.js';
import {errorHandler} from './utils/errorHandler.js';

/**
 * Creates a Fastify application with given dependencies.
 *
 * @param {Object} options - The options for the application.
 * @param {Function} options.fastifyModule - The Fastify module.
 * @param {Function} options.pinoModule - The fastify-pino logger module.
 * @param {Function} options.staticFilesModule - The module for serving static files.
 * @param {Function} options.routesModule - The module for application routes.
 * @param {Function} options.dbConnectFunction - The function to establish a database connection.
 * @param {Function} options.errorHandlerFunction - The function for handling application errors.
 * @returns {Object} The Fastify application instance.
 */
export function createApp({fastifyModule, pinoModule, staticFilesModule, routesModule, dbConnectFunction, errorHandlerFunction}) {
  const app = fastifyModule();

  app.register(pinoModule, config.logger);

  app.register(staticFilesModule);

  dbConnectFunction();

  app.register(routesModule);

  app.setErrorHandler(errorHandlerFunction);

  return app;
}

// Create the application with the actual dependencies
const app = createApp({
    fastifyModule: fastify,
    pinoModule: pino,
    staticFilesModule: staticFiles,
    routesModule: routes,
    dbConnectFunction: dbConnect,
    errorHandlerFunction: errorHandler,
  });

/**
 * The Fastify application instance, exported for use in other modules.
 *
 * @type {Object}
 */
export default app;
