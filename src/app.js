import fastify from 'fastify';
import pino from 'fastify-pino';
import {config} from './config/config.js';
import {registerRoutes} from './routes/index.js';
import {dbConnect} from './services/db.js';
import {registerStaticFiles} from './staticFiles.js';
import {registerErrorHandler} from './utils/errorHandler.js';

/**
 * Initializes the Fastify application.
 * This function encapsulates the configuration of the application,
 * such as the registration of routes, error handlers, and plugins.
 * @function
 * @name initFastifyApp
 * @returns {import('fastify').FastifyInstance} A Fastify application instance.
 */
function initFastifyApp() {
  // Instantiate a Fastify application
  const app = fastify();

  // Register the fastify-pino logger
  app.register(pino, config.logger);

  // Register the static file serving plugin
  registerStaticFiles(app);

  // Establish a connection to the database
  dbConnect();

  // Register the main routes of the application
  registerRoutes(app);

  // Register the centralized error handler
  registerErrorHandler(app);

  return app;
}

export default initFastifyApp;
