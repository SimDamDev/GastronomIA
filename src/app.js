import fastify from 'fastify';
import staticFiles from './staticFiles.js';
import routes from './routes/indexRoutes.js';
import {dbConnect} from './services/db.js';
import {errorHandler} from './utils/errorHandler.js';

// Instantiate a Fastify application
/** @type {import('fastify').FastifyInstance} */
const app = fastify();

/**
 * Configure the static files' serving module.
 * @see {@link ./staticFiles.js}
 */
app.register(staticFiles);

/**
 * Establish a connection to the MongoDB database.
 * @see {@link ./services/db.js}
 */
dbConnect();

/**
 * Register the main routes of the application.
 * @see {@link ./routes/indexRoutes.js}
 */
app.register(routes);

/**
 * Register a centralized error handling function for the application.
 * @see {@link ./utils/errorHandler.js}
 */
app.setErrorHandler(errorHandler);

/**
 * Export the Fastify application for use in other modules.
 * @type {import('fastify').FastifyInstance}
 */
export default app;
